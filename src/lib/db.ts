import { Pool } from 'pg';

// Ultra-fast database configuration
const config = {
  host: 'swaykart-test.cd4ai80suo3k.ap-south-1.rds.amazonaws.com',
  port: 5432,
  database: 'swaykart',
  user: 'saiteja',
  password: 'Swaykart@123',
  ssl: { rejectUnauthorized: false },
  // Ultra-optimized for maximum speed
  max: 15,
  min: 5,
  idleTimeoutMillis: 5000,
  connectionTimeoutMillis: 1000,
  statement_timeout: 5000,
  query_timeout: 5000,
  keepAlive: true,
  keepAliveInitialDelayMillis: 0,
  // Additional speed optimizations
  allowExitOnIdle: false,
  maxUses: 10000
};

const pool = new Pool(config);

export default pool;
