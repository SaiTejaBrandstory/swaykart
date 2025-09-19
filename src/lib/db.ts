import { Pool } from 'pg';

// Vercel-optimized database configuration
const config = {
  host: 'swaykart-test.cd4ai80suo3k.ap-south-1.rds.amazonaws.com',
  port: 5432,
  database: 'swaykart',
  user: 'saiteja',
  password: 'Swaykart@123',
  ssl: { rejectUnauthorized: false },
  // Minimal connection settings to avoid connection limit
  max: 1, // Single connection
  min: 0,
  idleTimeoutMillis: 5000, // Shorter idle timeout
  connectionTimeoutMillis: 10000, // Longer connection timeout
  statement_timeout: 15000,
  query_timeout: 15000,
  keepAlive: false,
  // Force connection cleanup
  allowExitOnIdle: true,
  maxUses: 1,
  // Additional cleanup settings
  application_name: 'swaykart-vercel'
};

const pool = new Pool(config);

export default pool;
