import pool from './db';

export interface Influencer {
  id: number;
  name: string;
  username: string;
  followers: number;
  engagement_rate: number;
  location: string;
  category: string;
  verified: boolean;
  created_at: string;
  // Add more fields based on your actual database schema
}

export async function getInfluencers(): Promise<Influencer[]> {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM scrapped.influencer_ui ORDER BY followers DESC');
    client.release();
    return result.rows;
  } catch (error) {
    console.error('Error fetching influencers:', error);
    throw error;
  }
}

export async function getInfluencerById(id: number): Promise<Influencer | null> {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM scrapped.influencer_ui WHERE id = $1', [id]);
    client.release();
    return result.rows[0] || null;
  } catch (error) {
    console.error('Error fetching influencer:', error);
    throw error;
  }
}
