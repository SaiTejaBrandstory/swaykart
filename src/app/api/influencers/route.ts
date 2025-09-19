import { NextResponse } from 'next/server';
import pool from '@/lib/db';

// Simple cache - load once and keep in memory
let allDataCache: any[] = [];
let isLoaded = false;

// Clear cache function for development (internal only)
function clearCache() {
  allDataCache = [];
  isLoaded = false;
  console.log('🗑️ Cache cleared');
}

export async function GET() {
  try {
    console.log('🚀 Fetching influencer data...');
    const startTime = Date.now();

    // Load data only once
    if (!isLoaded) {
      console.log('📡 Connecting to database...');
      const client = await pool.connect();
      console.log('✅ Database connected successfully');
      
      const result = await client.query(`
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
      if (uniqueIds.size !== uniqueData.length) {
        console.log('⚠️ Duplicates detected, filtering...');
        const finalData = uniqueData.filter((item, index, self) => 
          index === self.findIndex(t => t.id === item.id)
        );
        allDataCache = finalData;
      } else {
        allDataCache = uniqueData;
      }
      isLoaded = true;
      client.release();
      
      const loadTime = Date.now() - startTime;
      console.log(`✅ Loaded ${allDataCache.length} records in ${loadTime}ms`);
    }
    
    // Check if we have data
    if (allDataCache.length === 0) {
      console.log('⚠️ No data available, returning empty array');
      return NextResponse.json({
        data: [],
        total: 0,
        message: 'No data available'
      });
    }

    const response = NextResponse.json({
      data: allDataCache,
      total: allDataCache.length
    });

    response.headers.set('Cache-Control', 'public, max-age=7200, s-maxage=3600, stale-while-revalidate=14400');
    response.headers.set('X-Cache-Status', 'HIT');
    
    return response;
  } catch (error) {
    console.error('❌ Database error:', error);
    
    // More detailed error logging for Vercel
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch influencers',
        details: error instanceof Error ? error.message : 'Unknown error',
        type: error instanceof Error ? error.name : 'UnknownError'
      },
      { status: 500 }
    );
  }
}
