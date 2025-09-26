// /Users/tejasgulati/Desktop/SWAYKART/swaykart/src/app/influencer/[username]/page.tsx
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import StaticPageWrapper from './StaticPageWrapper'

const S3_BASE_URL = 'https://swaykart-vercel.s3.amazonaws.com/static/influencers'

const browserHeaders = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
}

async function staticFileExists(username: string): Promise<boolean> {
  try {
    const url = `${S3_BASE_URL}/${username.toLowerCase()}/index.html`
    const response = await fetch(url, {
      method: 'HEAD',
      headers: browserHeaders,
      cache: 'force-cache', 
    })
    console.log(`[S3 CHECK] ${url} → ${response.status}`)
    return response.ok
  } catch (error) {
    console.error(`[S3 ERROR] Checking file for ${username}:`, error)
    return false
  }
}

async function getRawStaticContent(username: string): Promise<string | null> {
  const url = `${S3_BASE_URL}/${username.toLowerCase()}/index.html`
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: browserHeaders,
      cache: 'force-cache', 
    })

    if (!response.ok) {
      console.warn(`[S3 FETCH FAILED] ${url} → ${response.status}`)
      throw new Error(`Failed to fetch: ${response.status}`)
    }

    console.log(`[S3 FETCH SUCCESS] ${url}`)
    return await response.text()
  } catch (error) {
    console.error(`[S3 ERROR] Reading file for ${username}:`, error)
    return null
  }
}

async function getInfluencerMetadata(username: string): Promise<{
  title: string
  description: string
} | null> {
  try {
    const htmlContent = await getRawStaticContent(username)

    if (htmlContent) {
      const titleMatch = htmlContent.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
      const descMatch = htmlContent.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i)
    
      return {
        title: titleMatch?.[1] || `@${username} Analytics | Influencer Dashboard`,
        description: descMatch?.[1] || `Analytics for @${username}. View engagement rates, content analysis, and brand safety metrics.`,
      }
    }

    return {
      title: `@${username} Analytics | Influencer Dashboard`,
      description: `View analytics and insights for @${username} on SwayKart.`,
    }
  } catch (error) {
    console.error(`[METADATA ERROR] for ${username}:`, error)
    return null
  }
}

export async function generateMetadata({ params }: { params: { username: string } }): Promise<Metadata> {
  const username = params.username?.toLowerCase()
  const metadata = await getInfluencerMetadata(username)

  if (!metadata) {
    return {
      title: 'Influencer Not Found',
      description: 'The requested influencer could not be found.',
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://swaykart.com'

  return {
    title: metadata.title,
    description: metadata.description,
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/influencer/${username}`,
      type: 'profile',
      siteName: 'SwayKart',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      site: '@swaykart',
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function InfluencerPage({ params }: { params: { username: string } }) {
  const username = params.username?.toLowerCase()
  console.log(`[PAGE REQUEST] /influencer/${username}`)

  const hasStaticFile = await staticFileExists(username)
  
  if (hasStaticFile) {
    const rawHtmlContent = await getRawStaticContent(username)
    if (rawHtmlContent) {
      console.log(`[RENDER] Showing static page for: ${username}`)
      return <StaticPageWrapper htmlContent={rawHtmlContent} username={username} />
    }
  }

  console.log(`[RENDER] No static file found for: ${username}`)
  notFound()
}

export const dynamic = 'force-static'
