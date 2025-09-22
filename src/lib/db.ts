import { Pool, PoolClient } from 'pg';

// Database configuration optimized for Vercel serverless
const isProduction = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

let pool: Pool | null = null;

function getPoolConfig() {
  return {
    connectionString: process.env.DATABASE_URL,
    // Fallback to individual variables if DATABASE_URL is not available
    ...(process.env.DATABASE_URL ? {} : {
      host: process.env.DB_HOST || 'swaykart-test.cd4ai80suo3k.ap-south-1.rds.amazonaws.com',
      port: parseInt(process.env.DB_PORT || '5432'),
      database: process.env.DB_NAME || 'swaykart',
      user: process.env.DB_USER || 'saiteja',
      password: process.env.DB_PASSWORD || 'Swaykart@123',
    }),
    // SSL configuration - explicitly allow self-signed certs
    ssl: {
      rejectUnauthorized: false, // 👈 allows self-signed certs
    },
    // Vercel-optimized settings for serverless
    max: 1, // Single connection for serverless
    min: 0, // No minimum connections
    idleTimeoutMillis: 10000, // 10 seconds
    connectionTimeoutMillis: 10000, // 10 seconds
    statement_timeout: 25000, // 25 seconds
    query_timeout: 25000, // 25 seconds
    keepAlive: false, // Disable keepAlive for serverless
    allowExitOnIdle: true, // Important for serverless
    maxUses: 1 // Single use per connection
  };
}

// Lazy connection - only create pool when needed
export function getPool(): Pool {
  if (!pool) {
    const config = getPoolConfig();
    
    console.log('🔧 Creating new database pool for serverless environment');

    pool = new Pool(config);

    // Handle pool errors
    pool.on('error', (err) => {
      console.error('❌ Database pool error:', err);
      // Reset pool on error to force recreation
      pool = null;
    });
  }
  
  return pool;
}

// Get a client from the pool (lazy connection)
export async function getClient(): Promise<PoolClient> {
  const pool = getPool();
  return await pool.connect();
}

// Graceful shutdown
process.on('SIGINT', async () => {
  if (pool) {
    await pool.end();
  }
  process.exit(0);
});

process.on('SIGTERM', async () => {
  if (pool) {
    await pool.end();
  }
  process.exit(0);
});

// For backward compatibility
export default getPool;
