import { NextResponse } from 'next/server';
import { getClient } from '@/lib/db';
import { PoolClient } from 'pg';
import { isDatabaseModified, forceCacheInvalidation, getDatabaseETag, generateETag } from '@/lib/cache-invalidation';
import cache, { generateCacheKey, getCachedData, setCachedData } from '@/lib/cache';

// Enhanced retry function for database operations with warmup handling
async function withRetry<T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000,
  initialDelay: number = 500
): Promise<T> {
  // Add initial delay to help with DB warmup on first attempt
  if (initialDelay > 0) {
    await new Promise(resolve => setTimeout(resolve, initialDelay));
  }
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      console.log(`Attempt ${attempt}/${maxRetries} failed:`, error);
      
      if (attempt === maxRetries) {
        throw error;
      }
      
      // Enhanced exponential backoff with jitter to prevent thundering herd
      const jitter = Math.random() * 200; // 0-200ms random jitter
      const delay = baseDelay * Math.pow(2, attempt - 1) + jitter;
      
      console.log(`Retrying in ${Math.round(delay)}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  throw new Error('Max retries exceeded');
}

export async function GET(request: Request) {
  let client: PoolClient | undefined;
  
  try {
    // Parse URL parameters for pagination
    const { searchParams } = new URL(request.url);
    const getAllData = searchParams.get('all') === 'true'; // Special flag to get all data
    const forceRefresh = searchParams.get('fresh') === 'true'; // Force fresh data
    const page = parseInt(searchParams.get('page') || '1');
    const limit = getAllData ? 50000 : Math.min(parseInt(searchParams.get('limit') || '50'), 100); // Max 100 per page (or all data)
    const offset = (page - 1) * limit;
    
    console.log(`🚀 Fetching influencer data (page ${page}, limit ${limit})${forceRefresh ? ' [FRESH]' : ''}...`);
    const startTime = Date.now();

    // Generate cache key
    const cacheKey = generateCacheKey('/api/influencers', { getAllData, page, limit });
    
    // Check ETag for conditional requests
    const currentETag = await getDatabaseETag();
    const ifNoneMatch = request.headers.get('if-none-match');
    
    if (!forceRefresh && currentETag && ifNoneMatch === currentETag) {
      console.log(`✅ ETag match - data not modified`);
      return new NextResponse(null, { 
        status: 304,
        headers: {
          'ETag': currentETag,
          'X-Cache-Status': 'NOT_MODIFIED'
        }
      });
    }
    
    // Check for database changes (invalidates cache if needed)
    const dbModified = await isDatabaseModified();
    
    // Check cache first (unless force refresh or db was modified)
    if (!forceRefresh && !dbModified) {
      const cachedData = getCachedData(cacheKey);
      if (cachedData) {
        console.log(`✅ Cache hit for ${cacheKey}`);
        const response = NextResponse.json(cachedData);
        response.headers.set('X-Cache-Status', 'HIT');
        response.headers.set('X-Page-Info', `page-${page}-limit-${limit}`);
        if (currentETag) response.headers.set('ETag', currentETag);
        return response;
      }
    }

    // Use lazy connection with retry logic
    client = await withRetry(async () => {
      const conn = await getClient();
      console.log('✅ Database connected successfully');
      return conn;
    });

    // Get total count first (optimized query)
    const countResult = await withRetry(async () => {
      if (!client) {
        throw new Error('Database client not available');
      }
      return await client.query(`
        SELECT COUNT(DISTINCT id) as total
        FROM scrapped.influencer_ui_leader 
        WHERE influencer_rank IS NOT NULL
      `);
    });

    const totalRecords = parseInt(countResult.rows[0]?.total || '0');
    const totalPages = Math.ceil(totalRecords / limit);

    // Optimized paginated query with timeout handling
    const result = await withRetry(async () => {
      if (!client) {
        throw new Error('Database client not available');
      }
      return await client.query(`
        SELECT DISTINCT ON (id)
          id,
          influencer_rank,
          username,
          verified,
          categories_combined,
          followers_count,
          engagement_rate,
          credibility_score,
          profile_pic_url_hd,
          location
        FROM scrapped.influencer_ui_leader 
        WHERE influencer_rank IS NOT NULL
        ORDER BY id ASC
        LIMIT $1 OFFSET $2
      `, [limit, offset]);
    });

    // More robust deduplication using Map
    const uniqueMap = new Map();
    result.rows.forEach(row => {
      if (!uniqueMap.has(row.id)) {
        uniqueMap.set(row.id, row);
      }
    });
    const uniqueData = Array.from(uniqueMap.values());
    
    // Quick duplicate check
    const uniqueIds = new Set(uniqueData.map(item => item.id));
    let finalData = uniqueData;
    if (uniqueIds.size !== uniqueData.length) {
      console.log('⚠️ Duplicates detected, filtering...');
      finalData = uniqueData.filter((item, index, self) => 
        index === self.findIndex(t => t.id === item.id)
      );
    }
    
    const loadTime = Date.now() - startTime;
    console.log(`✅ Loaded ${finalData.length} records (page ${page}/${totalPages}) in ${loadTime}ms`);
    
    const responseData = {
      data: finalData,
      pagination: {
        page,
        limit,
        total: totalRecords,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      },
      // Keep backward compatibility
      total: totalRecords
    };

    // Cache the response data
    const cacheTtl = getAllData ? 300000 : 120000; // 5 min for all data, 2 min for paginated
    setCachedData(cacheKey, responseData, cacheTtl);
    
    const response = NextResponse.json(responseData);

    // Enhanced caching strategy based on request type
    if (forceRefresh) {
      // No cache for fresh data requests
      response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
      response.headers.set('X-Cache-Status', 'BYPASS');
    } else if (getAllData) {
      // Longer cache for full dataset (5 minutes)
      response.headers.set('Cache-Control', 'public, max-age=300, s-maxage=600, stale-while-revalidate=300');
      response.headers.set('X-Cache-Status', 'MISS');
    } else {
      // Shorter cache for paginated data (2 minutes)
      response.headers.set('Cache-Control', 'public, max-age=120, s-maxage=240, stale-while-revalidate=120');
      response.headers.set('X-Cache-Status', 'MISS');
    }
    response.headers.set('X-Page-Info', `page-${page}-limit-${limit}`);
    if (currentETag) response.headers.set('ETag', currentETag);
    
    return response;
  } catch (error) {
    console.error('❌ Database error:', error);
    
    // More specific error handling
    let errorMessage = 'Unknown error';
    let statusCode = 500;
    
    if (error instanceof Error) {
      if (error.message.includes('timeout')) {
        errorMessage = 'Database connection timeout - please try again';
        statusCode = 408;
      } else if (error.message.includes('connection')) {
        errorMessage = 'Database connection failed - please try again';
        statusCode = 503;
      } else {
        errorMessage = error.message;
      }
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch influencers',
        details: errorMessage
      },
      { status: statusCode }
    );
  } finally {
    // Always release the client
    if (client) {
      try {
        client.release();
      } catch (releaseError) {
        console.error('Error releasing client:', releaseError);
      }
    }
  }
}
