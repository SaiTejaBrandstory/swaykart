// Database change detection and cache invalidation utility
import { getClient } from './db';
import cache from './cache';
import crypto from 'crypto';

// In-memory storage for database state tracking
let lastModified: Date | null = null;
let dbETag: string | null = null;
let lastCheckTime: number = 0;
const CHECK_INTERVAL = 30000; // Check every 30 seconds

// Track database modification time by checking the most recent update
export async function getDatabaseModificationTime(): Promise<Date | null> {
  let client;
  try {
    client = await getClient();
    
    // Query to get the most recent modification time
    // We'll use a combination of max ID and a count to detect changes
    const result = await client.query(`
      SELECT 
        MAX(id) as max_id,
        COUNT(*) as total_count,
        NOW() as check_time
      FROM scrapped.influencer_ui 
      WHERE influencer_rank IS NOT NULL
    `);
    
    if (result.rows.length > 0) {
      const { max_id, total_count, check_time } = result.rows[0];
      
      // Create a hash from the data that changes when DB is modified
      const dataSignature = `${max_id}-${total_count}`;
      const newETag = crypto.createHash('md5').update(dataSignature).digest('hex');
      
      // If ETag changed, database was modified
      if (dbETag !== newETag) {
        console.log(`🔄 Database change detected: ${dbETag} -> ${newETag}`);
        dbETag = newETag;
        lastModified = new Date(check_time);
        
        // Invalidate all caches when database changes
        cache.clear();
        console.log(`🗑️ Cache cleared due to database changes`);
      }
      
      return lastModified;
    }
    
    return null;
  } catch (error) {
    console.error('Error checking database modification time:', error);
    return null;
  } finally {
    if (client) {
      client.release();
    }
  }
}

// Check if database was modified since last check
export async function isDatabaseModified(): Promise<boolean> {
  const now = Date.now();
  
  // Only check database every 30 seconds to avoid excessive queries
  if (now - lastCheckTime < CHECK_INTERVAL) {
    return false;
  }
  
  lastCheckTime = now;
  const currentModTime = await getDatabaseModificationTime();
  
  return currentModTime !== null;
}

// Force cache invalidation (useful for testing or manual refresh)
export function forceCacheInvalidation(): void {
  cache.clear();
  lastModified = null;
  dbETag = null;
  lastCheckTime = 0;
  console.log('🗑️ Cache manually invalidated');
}

// Get current database ETag for HTTP caching
export async function getDatabaseETag(): Promise<string | null> {
  await getDatabaseModificationTime(); // This updates the ETag
  return dbETag;
}

// Generate ETag from data content
export function generateETag(data: any): string {
  const content = JSON.stringify(data);
  return crypto.createHash('md5').update(content).digest('hex');
}

// Cache-aware wrapper for database queries
export async function getCachedOrFetch<T>(
  cacheKey: string,
  fetchFunction: () => Promise<T>,
  ttlMs: number = 300000 // 5 minutes default
): Promise<{ data: T; fromCache: boolean }> {
  // Check if database was modified
  const dbModified = await isDatabaseModified();
  
  if (!dbModified) {
    // Try to get from cache first
    const cached = cache.get<T>(cacheKey);
    if (cached) {
      return { data: cached, fromCache: true };
    }
  }
  
  // Fetch fresh data
  const freshData = await fetchFunction();
  
  // Cache the fresh data
  cache.set(cacheKey, freshData, ttlMs);
  
  return { data: freshData, fromCache: false };
}
