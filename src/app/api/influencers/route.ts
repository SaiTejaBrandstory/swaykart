import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    console.log('🚀 Fetching fresh influencer data...');
    const startTime = Date.now();

    // Always fetch fresh data from database
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
    let finalData = uniqueData;
    if (uniqueIds.size !== uniqueData.length) {
      console.log('⚠️ Duplicates detected, filtering...');
      finalData = uniqueData.filter((item, index, self) => 
        index === self.findIndex(t => t.id === item.id)
      );
    }
    
    client.release();
    
    const loadTime = Date.now() - startTime;
    console.log(`✅ Loaded ${finalData.length} fresh records in ${loadTime}ms`);
    
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
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch influencers',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
