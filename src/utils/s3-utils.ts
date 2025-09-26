import { S3Config } from '@/types/influencer'

export const s3Config: S3Config = {
  baseUrl: process.env.NEXT_PUBLIC_S3_BASE_URL || 'https://swaykart-vercel.s3.amazonaws.com/static/influencers',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
  }
}

export async function checkS3FileExists(username: string): Promise<boolean> {
  try {
    const url = `${s3Config.baseUrl}/${username.toLowerCase()}/index.html`
    const response = await fetch(url, {
      method: 'HEAD',
      headers: s3Config.headers,
    })
    return response.ok
  } catch (error) {
    console.error(`[S3] Error checking file for ${username}:`, error)
    return false
  }
}

export async function fetchS3Content(username: string): Promise<string | null> {
  const url = `${s3Config.baseUrl}/${username.toLowerCase()}/index.html`
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: s3Config.headers,
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`)
    }

    return await response.text()
  } catch (error) {
    console.error(`[S3] Error fetching content for ${username}:`, error)
    return null
  }
}