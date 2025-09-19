import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';
    const offset = (page - 1) * limit;

    console.log('🔍 API: Search query:', search);

    const client = await pool.connect();
    
    let countResult, dataResult;
    
    if (search) {
      // With search - use separate queries with proper parameter indexing
      const searchPattern = `%${search}%`;
      
      countResult = await client.query(`
        SELECT COUNT(DISTINCT id) as total FROM scrapped.influencer_ui 
        WHERE (
          LOWER(username) LIKE LOWER($1) OR 
          LOWER(categories_combined) LIKE LOWER($1)
        )
      `, [searchPattern]);
      
      dataResult = await client.query(`
        SELECT * FROM (
          SELECT DISTINCT ON (id) * FROM scrapped.influencer_ui 
          WHERE (
            LOWER(username) LIKE LOWER($1) OR 
            LOWER(categories_combined) LIKE LOWER($1)
          )
          ORDER BY id
        ) AS unique_influencers
        ORDER BY influencer_rank ASC 
        LIMIT $2 OFFSET $3
      `, [searchPattern, limit, offset]);
    } else {
      // Without search - original query
      countResult = await client.query('SELECT COUNT(DISTINCT id) as total FROM scrapped.influencer_ui');
      
      dataResult = await client.query(`
        SELECT * FROM (
          SELECT DISTINCT ON (id) * FROM scrapped.influencer_ui 
          ORDER BY id
        ) AS unique_influencers
        ORDER BY influencer_rank ASC 
        LIMIT $1 OFFSET $2
      `, [limit, offset]);
    }
    
    const total = parseInt(countResult.rows[0].total);
    client.release();
    
    console.log('✅ API: Successfully fetched', dataResult.rows.length, 'records');
    
    const response = NextResponse.json({
      data: dataResult.rows,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNext: page < Math.ceil(total / limit),
        hasPrev: page > 1
      }
    });

    // Add caching headers for better performance
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
    
    return response;
  } catch (error) {
    console.error('❌ Database error:', error instanceof Error ? error.message : 'Unknown error');
    console.error('❌ Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch influencers',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
