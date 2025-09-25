# Database Change Detection & Cache Invalidation

This system ensures that when data in the database changes, the cache is automatically invalidated and users see fresh data **without any external APIs or services**.

## 🔄 How It Works

### 1. Database Change Detection
The system monitors database changes by:
- Tracking the maximum ID and total count of records
- Creating a hash (ETag) from this data signature
- Checking for changes every 30 seconds (configurable)
- Automatically clearing cache when changes are detected

### 2. Multi-Level Caching
```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────┐
│   HTTP Cache    │    │   Memory Cache   │    │  Database   │
│ (Browser/CDN)   │    │  (Server-side)   │    │             │
│ 2-10 minutes    │    │  2-10 minutes    │    │             │
└─────────────────┘    └──────────────────┘    └─────────────┘
         │                       │                      │
         │                       │                      │
         └───── ETag Check ──────┼──── Change Detection ┘
                                 │
                                 └──── Auto-Invalidation
```

### 3. Instant Invalidation
When database changes:
1. **Detection**: Hash comparison detects the change
2. **Cache Clear**: All memory cache is cleared automatically
3. **Fresh Data**: Next request fetches fresh data from database
4. **Re-cache**: Fresh data is cached with new ETag

## 🚀 Usage Examples

### Automatic Detection (Recommended)
```typescript
// Normal API calls - cache is automatically managed
GET /api/influencers              // Uses cache if data unchanged
GET /api/influencer/username123   // Uses cache if data unchanged
```

### Force Fresh Data
```typescript
// Force bypass cache and get fresh data
GET /api/influencers?fresh=true
GET /api/influencer/username123?fresh=true
```

### Admin Cache Management
```typescript
// Check cache status
GET /api/admin/cache

// Manually clear cache
POST /api/admin/cache?action=clear

// Get detailed cache info
POST /api/admin/cache?action=status
```

### Frontend Refresh Button
```typescript
// Users can manually refresh data via UI button
// This calls /api/influencers?all=true&fresh=true
```

## 📊 Cache Levels & TTL

| Data Type | Memory Cache | HTTP Cache | Auto-Invalidation |
|-----------|-------------|------------|------------------|
| Individual Profiles | 10 minutes | 10 minutes | ✅ Instant |
| Full Dataset | 5 minutes | 5 minutes | ✅ Instant |
| Paginated Data | 2 minutes | 2 minutes | ✅ Instant |

## 🔧 Configuration

### Change Detection Interval
```typescript
// In src/lib/cache-invalidation.ts
const CHECK_INTERVAL = 30000; // Check every 30 seconds
```

### Cache Sizes
```typescript
// In src/lib/cache.ts
private maxSize = 100; // Maximum number of cache entries
```

### TTL Settings
```typescript
// In API routes
const cacheTtl = getAllData ? 300000 : 120000; // 5 min vs 2 min
```

## 🧪 Testing Cache Invalidation

### 1. Test Automatic Detection
```sql
-- Make a change in database
INSERT INTO scrapped.influencer_ui (username, followers_count, ...) 
VALUES ('test_user', 1000, ...);

-- Or update existing record
UPDATE scrapped.influencer_ui 
SET followers_count = followers_count + 1000 
WHERE username = 'existing_user';
```

### 2. Verify Cache Invalidation
```bash
# Check cache status before change
curl https://your-domain.com/api/admin/cache

# Make database change (above SQL)

# Wait 30 seconds for detection

# Check cache status after change (should be cleared)
curl https://your-domain.com/api/admin/cache

# Next API call should fetch fresh data
curl https://your-domain.com/api/influencers
```

### 3. Test ETag Support
```bash
# First request - gets ETag
curl -I https://your-domain.com/api/influencers

# Second request with ETag - should get 304 Not Modified
curl -H "If-None-Match: <etag-value>" https://your-domain.com/api/influencers
```

## 📈 Performance Impact

### Before Cache Invalidation:
- ❌ Stale data shown for cache duration (2-10 minutes)
- ❌ Manual cache clearing required
- ❌ No way to detect if data changed

### After Cache Invalidation:
- ✅ Fresh data within 30 seconds of database change
- ✅ Automatic cache management
- ✅ ETag support for efficient caching
- ✅ Manual refresh option for users
- ✅ Admin endpoints for monitoring

## 🔍 Monitoring & Debugging

### Cache Headers to Monitor
```
X-Cache-Status: HIT | MISS | BYPASS | NOT_MODIFIED
ETag: md5-hash-of-data-signature
X-Page-Info: page-1-limit-50
X-Influencer: username
```

### Console Logs to Watch
```
🔄 Database change detected: old-etag -> new-etag
🗑️ Cache cleared due to database changes
✅ Cache hit for /api/influencers
🚀 Fetching influencer data (page 1, limit 50) [FRESH]
```

### Admin Endpoints Response
```json
{
  "success": true,
  "cache": {
    "size": 5,
    "lastModified": "2024-01-15T10:30:00.000Z",
    "etag": "abc123def456"
  },
  "timestamp": "2024-01-15T10:35:00.000Z"
}
```

## 🚨 Important Notes

### Database Changes Detection
- **Detected**: INSERT, UPDATE, DELETE operations that change max ID or total count
- **Not Detected**: Changes that don't affect these metrics (rare edge cases)
- **Detection Delay**: Up to 30 seconds (configurable)

### Memory Constraints
- Cache is cleared on serverless function restart
- Maximum 100 cached entries (configurable)
- Uses memory efficiently with LRU-style eviction

### ETag Behavior
- ETags change when database data changes
- Supports conditional requests (304 Not Modified)
- Browsers automatically handle ETag caching

## 🛠️ Troubleshooting

### Data Not Updating?
1. Check if detection is working: `GET /api/admin/cache`
2. Force refresh: Add `?fresh=true` to API calls
3. Clear cache manually: `POST /api/admin/cache?action=clear`
4. Use browser refresh button on leaderboard page

### Cache Not Working?
1. Verify cache headers in Network tab
2. Check console logs for cache hit/miss
3. Ensure database changes are within detection scope

### Performance Issues?
1. Monitor cache hit rates via `X-Cache-Status` header
2. Adjust CHECK_INTERVAL if needed
3. Consider reducing cache TTL for more frequent updates

## 🔮 Future Enhancements

### Database Triggers (Advanced)
```sql
-- Optional: Use PostgreSQL triggers for instant detection
CREATE OR REPLACE FUNCTION notify_cache_invalidation()
RETURNS TRIGGER AS $$
BEGIN
    PERFORM pg_notify('cache_invalidate', 'influencer_data_changed');
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER influencer_cache_trigger
    AFTER INSERT OR UPDATE OR DELETE ON scrapped.influencer_ui
    FOR EACH STATEMENT
    EXECUTE FUNCTION notify_cache_invalidation();
```

### Redis Integration (Scale)
```typescript
// For high-scale deployments
import Redis from 'ioredis';
const redis = new Redis(process.env.REDIS_URL);

// Use Redis pub/sub for instant cache invalidation across instances
redis.subscribe('cache_invalidate');
redis.on('message', (channel, message) => {
  if (channel === 'cache_invalidate') {
    cache.clear();
  }
});
```
