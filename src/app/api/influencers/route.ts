import { NextResponse } from 'next/server';
import { getClient } from '@/lib/db';
import { PoolClient } from 'pg';

// Retry function for database operations
async function withRetry<T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      console.log(`Attempt ${attempt}/${maxRetries} failed:`, error);
      
      if (attempt === maxRetries) {
        throw error;
      }
      
      // Exponential backoff
      await new Promise(resolve => setTimeout(resolve, delay * attempt));
    }
  }
  throw new Error('Max retries exceeded');
}

export async function GET() {
  let client: PoolClient | undefined;
  
  try {
    console.log('🚀 Fetching fresh influencer data...');
    const startTime = Date.now();

    // Use lazy connection with retry logic
    client = await withRetry(async () => {
      const conn = await getClient();
      console.log('✅ Database connected successfully');
      return conn;
    });

    // Optimized query with timeout handling
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
          credibility_score
        FROM scrapped.influencer_ui 
        WHERE influencer_rank IS NOT NULL
        ORDER BY id ASC
      `);
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
    console.log(`✅ Loaded ${finalData.length} total records in ${loadTime}ms`);
    
    const response = NextResponse.json({
      data: finalData,
      total: finalData.length
    });

    // Short cache for performance but allow fresh data
    response.headers.set('Cache-Control', 'public, max-age=60, s-maxage=60');
    response.headers.set('X-Cache-Status', 'MISS');
    
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
