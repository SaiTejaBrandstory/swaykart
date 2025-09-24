import { Pool, PoolClient } from 'pg';
import fs from 'fs';
import path from 'path';

// Database configuration optimized for Vercel serverless
const isProduction = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

let pool: Pool | null = null;

function getPoolConfig() {
  // Require DATABASE_URL environment variable
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required');
  }

  // SSL configuration - environment-aware
  const isProduction = process.env.NODE_ENV === "production";
  const isVercel = process.env.VERCEL === "1";
  
  let sslConfig: any;
  
  if (isProduction || isVercel) {
    // Production: Use AWS RDS CA certificate
    if (process.env.RDS_CA_CERT) {
      sslConfig = {
        ca: Buffer.from(process.env.RDS_CA_CERT, "base64").toString("utf-8"),
      };
    } else {
      // Local production: Load RDS CA cert from file system
      const certPath = path.join(process.cwd(), "rds-ca.pem");
      sslConfig = { 
        ca: fs.readFileSync(certPath).toString() 
      };
    }
  } else {
    // Development: Allow self-signed certs (bypass SSL verification)
    sslConfig = { 
      rejectUnauthorized: false 
    };
    console.log('🔧 Development SSL config:', sslConfig);
  }

  // Parse the connection string to extract individual components
  const url = new URL(process.env.DATABASE_URL);
  
  const baseConfig: any = {
    host: url.hostname,
    port: parseInt(url.port) || 5432,
    database: url.pathname.slice(1), // Remove leading slash
    user: url.username,
    password: url.password,
    ssl: sslConfig,
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

  console.log('🔧 Final database config SSL:', baseConfig.ssl);
  return baseConfig;
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
