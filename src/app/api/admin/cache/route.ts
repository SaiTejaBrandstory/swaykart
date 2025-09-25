import { NextResponse } from 'next/server';
import { forceCacheInvalidation, getDatabaseETag, getDatabaseModificationTime } from '@/lib/cache-invalidation';
import cache from '@/lib/cache';

// Admin endpoint to manage cache
export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    
    switch (action) {
      case 'clear':
        forceCacheInvalidation();
        return NextResponse.json({
          success: true,
          message: 'Cache cleared successfully',
          timestamp: new Date().toISOString()
        });
        
      case 'status':
        const etag = await getDatabaseETag();
        const lastModified = await getDatabaseModificationTime();
        
        return NextResponse.json({
          success: true,
          cache: {
            size: cache.size(),
            lastModified: lastModified?.toISOString() || null,
            etag: etag
          },
          timestamp: new Date().toISOString()
        });
        
      default:
        return NextResponse.json(
          { error: 'Invalid action. Use ?action=clear or ?action=status' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Cache admin error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Get cache status
export async function GET() {
  try {
    const etag = await getDatabaseETag();
    const lastModified = await getDatabaseModificationTime();
    
    return NextResponse.json({
      success: true,
      cache: {
        size: cache.size(),
        lastModified: lastModified?.toISOString() || null,
        etag: etag,
        endpoints: {
          clearCache: '/api/admin/cache?action=clear',
          forceRefresh: {
            influencers: '/api/influencers?fresh=true',
            specificInfluencer: '/api/influencer/{username}?fresh=true'
          }
        }
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Cache status error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
