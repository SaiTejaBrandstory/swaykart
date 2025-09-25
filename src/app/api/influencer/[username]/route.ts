import { NextResponse } from 'next/server';
import { getClient } from '@/lib/db';
import { PoolClient } from 'pg';
import { isDatabaseModified } from '@/lib/cache-invalidation';
import { generateCacheKey, getCachedData, setCachedData } from '@/lib/cache';

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

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  let client: PoolClient | undefined;

  try {
    const { username } = params;
    const { searchParams } = new URL(request.url);
    const forceRefresh = searchParams.get('fresh') === 'true';
    
    console.log(`🚀 Fetching influencer data for: ${username}${forceRefresh ? ' [FRESH]' : ''}`);
    const startTime = Date.now();

    // Generate cache key
    const cacheKey = generateCacheKey(`/api/influencer/${username}`);
    
    // Check for database changes (invalidates cache if needed)
    const dbModified = await isDatabaseModified();
    
    // Check cache first (unless force refresh or db was modified)
    if (!forceRefresh && !dbModified) {
      const cachedData = getCachedData(cacheKey);
      if (cachedData) {
        console.log(`✅ Cache hit for ${username}`);
        const response = NextResponse.json(cachedData);
        response.headers.set('X-Cache-Status', 'HIT');
        response.headers.set('X-Influencer', username);
        return response;
      }
    }

    // Use lazy connection with retry logic
    client = await withRetry(async () => {
      const conn = await getClient();
      console.log('✅ Database connected successfully');
      return conn;
    });

    // Fetch all data for the specific influencer
    const result = await withRetry(async () => {
      if (!client) {
        throw new Error('Database client not available');
      }
      return await client.query(`
        SELECT 
          id,
          influencer_rank,
          username,
          verified,
          upper,
          posts_count,
          engagement_rate,
          top_hashtag,
          total_unique_hashtags,
          hashtag_diversity,
          avg_hashtags_per_post,
          category,
          categories_combined,
          location,
          locations_combined,
          confidence_level,
          credibility_score,
          risk_level_value,
          risk_level_explanation,
          consistency_score,
          consistency_evidence,
          brand_safety_verification_score,
          brand_safety_verification_evidence,
          risk_advisory,
          pn_content_themes,
          pn_engagement_context,
          pn_overall_recommendation,
          value_proposition,
          average_days_between_posts,
          profile_pic_url_hd,
          followers_count
        FROM scrapped.influencer_ui
        WHERE username = $1
        LIMIT 1
      `, [username]);
    });

    if (result.rows.length === 0) {
      return NextResponse.json(
        {
          error: 'Influencer not found',
          details: `No influencer found with username: ${username}`
        },
        { status: 404 }
      );
    }

    const influencerData = result.rows[0];
    const loadTime = Date.now() - startTime;
    console.log(`✅ Loaded influencer data in ${loadTime}ms`);

    const responseData = {
      data: influencerData,
      success: true
    };

    // Cache the response data (10 minutes)
    setCachedData(cacheKey, responseData, 600000);

    const response = NextResponse.json(responseData);

    // Caching strategy based on request type
    if (forceRefresh) {
      // No cache for fresh data requests
      response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
      response.headers.set('X-Cache-Status', 'BYPASS');
    } else {
      // Longer cache for individual influencer profiles (10 minutes)
      response.headers.set('Cache-Control', 'public, max-age=600, s-maxage=1200, stale-while-revalidate=600');
      response.headers.set('X-Cache-Status', 'MISS');
    }
    response.headers.set('X-Influencer', username);

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
        error: 'Failed to fetch influencer data',
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
