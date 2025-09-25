import { Pool, PoolClient } from 'pg';
import fs from 'fs';
import path from 'path';

// Global pool declaration for Vercel serverless persistence
declare global {
  // eslint-disable-next-line no-var
  var _pool: Pool | undefined;
}

// Database configuration optimized for Vercel serverless
const isProduction = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

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
    max: 10, // More connections for bursts
    min: 0, // No minimum connections
    idleTimeoutMillis: 10000, // 10 seconds - free connections faster
    connectionTimeoutMillis: 5000, // 5 seconds - fail faster if RDS doesn't respond
    statement_timeout: 60000, // 60 seconds - increased for large queries
    query_timeout: 60000, // 60 seconds - increased for large queries
    keepAlive: true, // Enable keepAlive for better connection stability
    allowExitOnIdle: true // Important for serverless
    // Removed maxUses to allow connection reuse
  };

  console.log('🔧 Final database config SSL:', baseConfig.ssl);
  return baseConfig;
}

// Global pool that persists across Vercel invocations
export function getPool(): Pool {
  if (!global._pool) {
    const config = getPoolConfig();
    
    console.log('🔧 Creating new database pool for serverless environment');

    global._pool = new Pool(config);

    // Handle pool errors
    global._pool.on('error', (err) => {
      console.error('❌ Database pool error:', err);
      // Reset global pool on error to force recreation
      global._pool = undefined;
    });
  }
  
  return global._pool;
}

// Get a client from the pool - simple and fast
export async function getClient(): Promise<PoolClient> {
  const pool = getPool();
  
  try {
    const client = await pool.connect();
    return client;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    throw error;
  }
}

// Graceful shutdown
process.on('SIGINT', async () => {
  if (global._pool) {
    await global._pool.end();
  }
  process.exit(0);
});

process.on('SIGTERM', async () => {
  if (global._pool) {
    await global._pool.end();
  }
  process.exit(0);
});

// For backward compatibility
export default getPool;
