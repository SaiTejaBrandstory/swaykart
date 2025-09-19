import { Pool } from 'pg';

const config = {
  host: process.env.DB_HOST || 'swaykart-test.cd4ai80suo3k.ap-south-1.rds.amazonaws.com',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'swaykart',
  user: process.env.DB_USER || 'saiteja',
  password: String(process.env.DB_PASSWORD || 'Swaykart@123'),
  ssl: { rejectUnauthorized: false },
  // Optimize connection pool for better performance
  max: 20, // Maximum number of clients in the pool
  min: 2,  // Minimum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
};

const pool = new Pool(config);

export default pool;
