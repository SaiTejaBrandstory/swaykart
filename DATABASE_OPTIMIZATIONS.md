# Database Query Optimizations

This document outlines all the optimizations implemented to improve database performance and reduce query timeouts.

## ✅ Completed Optimizations

### 1. Query Timeout Increase
**File:** `src/lib/db.ts`
- Increased `query_timeout` from 30s to 60s
- Increased `statement_timeout` from 30s to 60s
- **Impact:** Prevents timeout errors on large queries

### 2. Pagination Implementation
**File:** `src/app/api/influencers/route.ts`
- Added pagination support with `page` and `limit` parameters
- Default limit: 50 records per page (max 100)
- Special `all=true` parameter for backward compatibility
- Added total count query with proper pagination metadata
- **Impact:** Reduces memory usage and query time by loading smaller chunks

**Usage Examples:**
```
GET /api/influencers                    # Page 1, 50 records
GET /api/influencers?page=2&limit=25    # Page 2, 25 records  
GET /api/influencers?all=true           # All records (backward compatibility)
```

### 3. Optimized SELECT Queries
**Files:** 
- `src/app/api/influencer/[username]/route.ts`
- `src/app/api/influencers/route.ts`

**Changes:**
- Replaced `SELECT *` with specific column lists
- Only fetch required columns for each endpoint
- **Impact:** Reduces network transfer and memory usage

### 4. Enhanced Retry Mechanism
**Files:** 
- `src/app/api/influencers/route.ts`
- `src/app/api/influencer/[username]/route.ts`

**Improvements:**
- Added initial 500ms delay before first attempt (helps with DB warmup)
- Implemented exponential backoff with jitter (prevents thundering herd)
- Enhanced error logging with retry progress
- **Impact:** Better handling of cold starts and connection issues

### 5. Advanced Caching Strategy
**Files:** 
- `src/app/api/influencers/route.ts` 
- `src/app/api/influencer/[username]/route.ts`
- `src/lib/cache.ts` (new utility)

**Caching Rules:**
- **Individual profiles:** 10 minutes cache (`max-age=600`)
- **Full dataset:** 5 minutes cache (`max-age=300`)
- **Paginated data:** 2 minutes cache (`max-age=120`)
- Added `stale-while-revalidate` for better UX
- **Impact:** Reduced database load and faster response times

### 6. Frontend Compatibility
**File:** `src/components/TopCreatorsSection.tsx`
- Updated to use new API with `all=true` parameter
- Maintains backward compatibility with existing component logic

## 📊 Performance Improvements

### Before Optimizations:
- ❌ Loading all 20k+ records at once
- ❌ 30s query timeout causing failures
- ❌ SELECT * queries transferring unnecessary data
- ❌ Basic retry mechanism
- ❌ Short 60s cache leading to frequent DB hits

### After Optimizations:
- ✅ Paginated loading (50 records default)
- ✅ 60s query timeout with better error handling
- ✅ Targeted SELECT queries with only needed columns
- ✅ Smart retry with warmup delays and exponential backoff
- ✅ Tiered caching strategy (2-10 minutes based on data type)

## 🚀 Additional Recommendations

### Database Indexes
Add these indexes to improve query performance:
```sql
-- For pagination and filtering
CREATE INDEX idx_influencer_rank ON scrapped.influencer_ui(influencer_rank) WHERE influencer_rank IS NOT NULL;
CREATE INDEX idx_username ON scrapped.influencer_ui(username);
CREATE INDEX idx_categories ON scrapped.influencer_ui USING gin(to_tsvector('english', categories_combined));
```

### Redis Caching (Future Enhancement)
For production scale, consider implementing Redis:
```typescript
// Example Redis integration
import Redis from 'ioredis';
const redis = new Redis(process.env.REDIS_URL);

// Cache expensive queries
const cacheKey = `influencers:page:${page}:limit:${limit}`;
const cached = await redis.get(cacheKey);
if (cached) return JSON.parse(cached);

// Store result with TTL
await redis.setex(cacheKey, 300, JSON.stringify(result));
```

### Connection Pooling Monitoring
Monitor pool metrics:
```typescript
// Add to db.ts
pool.on('connect', () => console.log('New client connected'));
pool.on('remove', () => console.log('Client removed'));
pool.on('error', (err) => console.error('Pool error:', err));
```

## 🧪 Testing

### Load Testing
Test with tools like Artillery or k6:
```javascript
// artillery-test.yml
scenarios:
  - duration: 60
    arrivalRate: 10
targets:
  - url: "https://your-domain.com/api/influencers?page=1&limit=50"
```

### Performance Monitoring
Add performance logs:
```typescript
const startTime = Date.now();
// ... database operation
const duration = Date.now() - startTime;
console.log(`Query completed in ${duration}ms`);
```

## 📈 Expected Results

- **Query Time:** Reduced from 20-30s to 2-5s for paginated requests
- **Memory Usage:** Reduced by ~95% (from 20k records to 50 per request)
- **Cache Hit Rate:** 60-80% reduction in database queries
- **Error Rate:** Significant reduction in timeout errors
- **User Experience:** Faster page loads and more responsive UI

## 🔧 Environment Variables

Ensure these are set in production:
```env
DATABASE_URL=postgresql://...
NODE_ENV=production
VERCEL=1
RDS_CA_CERT=base64_encoded_cert (for Vercel)
```
