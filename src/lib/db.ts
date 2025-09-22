import { Pool } from 'pg';

// Database configuration optimized for both local and Vercel
const isProduction = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

const config = {
  connectionString: process.env.DATABASE_URL,
  // Fallback to individual variables if DATABASE_URL is not available
  ...(process.env.DATABASE_URL ? {} : {
    host: process.env.DB_HOST || 'swaykart-test.cd4ai80suo3k.ap-south-1.rds.amazonaws.com',
    port: parseInt(process.env.DB_PORT || '5432'),
    database: process.env.DB_NAME || 'swaykart',
    user: process.env.DB_USER || 'saiteja',
    password: process.env.DB_PASSWORD || 'Swaykart@123',
    // Always use SSL for AWS RDS
    ssl: {
      rejectUnauthorized: false,
      require: true
    },
  }),
  // Environment-specific settings
  max: isVercel ? 10 : 15, // Reduced for serverless
  min: isVercel ? 1 : 5,   // Reduced for serverless
  idleTimeoutMillis: 30000, // 30 seconds
  connectionTimeoutMillis: isVercel ? 10000 : 5000, // Longer for Vercel cold starts
  statement_timeout: 25000, // 25 seconds - increased for complex queries
  query_timeout: 25000, // 25 seconds
  keepAlive: true,
  keepAliveInitialDelayMillis: 0,
  allowExitOnIdle: isVercel, // Important for serverless
  maxUses: isVercel ? 7500 : 10000 // Reduced for serverless
};

const pool = new Pool(config);

// Debug connection info
console.log('🔧 Database Config:', {
  host: config.host || 'from connectionString',
  port: config.port || 'from connectionString',
  database: config.database || 'from connectionString',
  user: config.user || 'from connectionString',
  ssl: config.ssl,
  isProduction,
  isVercel
});

// Handle pool errors
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

// Test connection on startup
pool.connect()
  .then(client => {
    console.log('✅ Database connection test successful');
    client.release();
  })
  .catch(err => {
    console.error('❌ Database connection test failed:', err);
  });

// Graceful shutdown
process.on('SIGINT', async () => {
  await pool.end();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await pool.end();
  process.exit(0);
});

export default pool;
