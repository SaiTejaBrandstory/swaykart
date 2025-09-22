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

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  let client: PoolClient | undefined;

  try {
    const { username } = params;
    console.log(`🚀 Fetching influencer data for: ${username}`);
    const startTime = Date.now();

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
        SELECT *
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

    const response = NextResponse.json({
      data: influencerData,
      success: true
    });

    // Short cache for performance
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
