import { Pool } from 'pg';

// Vercel-optimized database configuration
const config = {
  host: 'swaykart-test.cd4ai80suo3k.ap-south-1.rds.amazonaws.com',
  port: 5432,
  database: 'swaykart',
  user: 'saiteja',
  password: 'Swaykart@123',
  ssl: { rejectUnauthorized: false },
  // Vercel serverless-optimized settings
  max: 1, // Single connection for serverless
  min: 0,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 5000,
  statement_timeout: 10000,
  query_timeout: 10000,
  keepAlive: false, // Disable keepAlive for serverless
  // Serverless-specific settings
  allowExitOnIdle: true,
  maxUses: 1 // Single use per connection
};

const pool = new Pool(config);

export default pool;
