'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface InfluencerData {
  id: number;
  username: string;
  followers_count: number;
  verified: boolean;
  upper: string;
  posts_count: number;
  engagement_rate: number;
  top_hashtag: string;
  total_unique_hashtags: number;
  hashtag_diversity: number;
  avg_hashtags_per_post: number;
  category: string;
  categories_combined: string;
  location: string;
  locations_combined: string;
  confidence_level: number;
  credibility_score: number;
  risk_level_value: string;
  risk_level_explanation: string;
  consistency_score: string;
  consistency_evidence: string;
  brand_safety_verification_score: number;
  brand_safety_verification_evidence: string;
  risk_advisory: string;
  pn_content_themes: string;
  pn_engagement_context: string;
  pn_overall_recommendation: string;
  value_proposition: string;
  average_days_between_posts: number;
  influencer_rank: number;
}

export default function InfluencerProfile() {
  const params = useParams()
  const [influencer, setInfluencer] = useState<InfluencerData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    const fetchInfluencer = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/influencer/${params.username}`)
        const data = await response.json()
        
        if (!response.ok) {
          throw new Error(data.details || 'Failed to fetch influencer')
        }
        
        setInfluencer(data.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    if (params.username) {
      fetchInfluencer()
    }
  }, [params.username])

  // All static data removed - only database fields are used

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading influencer profile...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (error || !influencer) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Not Found</h2>
              <p className="text-gray-600">{error || 'This influencer profile could not be found.'}</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Influencer Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8" style={{ border: '1px solid #E5E7EB' }}>
          {/* Main Profile Section */}
          <div className="flex items-start gap-6">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src="/images/leaderboard/creator-icons/creator-1.svg"
                alt={influencer.username}
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            
            {/* Profile Details */}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                {/* Left Side - Profile Details and Rank Badge side by side */}
                <div className="flex items-start gap-8">
                  <div className="flex-3">
                    <h1 style={{
                      fontFamily: 'Inter',
                      fontWeight: 600,
                      fontSize: '30px',
                      lineHeight: '40px',
                      color: '#14213D',
                      marginBottom: '8px'
                    }}>{influencer.username}</h1>
                    
                    <p style={{
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      fontSize: '18px',
                      lineHeight: '28px',
                      color: '#14213D99',
                      marginBottom: '12px'
                    }}>@{influencer.username}</p>
                    
                    {/* Location and Join Date */}
                    <div className="space-y-1 mb-4">
                      <div className="flex items-center gap-2" style={{ color: '#14213D' }}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#14213D' }}>
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '20px',
                          letterSpacing: '0%'
                        }}>{influencer.location || 'Location not specified'}</span>
                      </div>
                      <div className="flex items-center gap-2" style={{ color: '#14213D' }}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#14213D' }}>
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '20px',
                          letterSpacing: '0%'
                        }}>Ranked #{influencer.influencer_rank}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rank Badge - Side by side with profile details */}
                  <div className="bg-gray-100 rounded-lg text-center" style={{ padding: '16px' }}>
                    <div className="flex flex-col items-center">
                      <i className="fas fa-crown w-6 h-6 mb-2" style={{ color: '#FCA311' }}></i>
                      <div style={{
                        fontFamily: 'Inter',
                        fontWeight: 700,
                        fontSize: '18px',
                        lineHeight: '100%',
                        color: '#14213D',
                        textAlign: 'center',
                        marginBottom: '4px'
                      }}>#{influencer.influencer_rank}</div>
                      <div style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '100%',
                        color: '#6B7280',
                        textAlign: 'center'
                      }}>Ranked</div>
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Last Updated and Action Buttons */}
                <div className="flex flex-col items-end gap-4">
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 hover:opacity-90" style={{ backgroundColor: '#FCA311' }}>
                      <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contact
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Save
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bio Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '26px',
              color: '#374151'
            }}>
              {influencer.value_proposition || `Content creator in ${influencer.category} with ${influencer.followers_count?.toLocaleString()} followers. 
              Specializing in ${influencer.categories_combined || influencer.category} content with ${influencer.engagement_rate}% engagement rate.`}
            </p>
          </div>
        </div>

        {/* Social Media Links - Outside the profile card */}
        <div className="flex gap-4 mb-8">
          <button className="flex items-center gap-2 px-3 py-2 transition-colors" style={{ 
            backgroundColor: '#FCA3111A', 
            border: '1.5px solid #FCA311',
            color: '#14213D',
            borderRadius: '50px'
          }}>
            <svg className="w-4 h-4" viewBox="0 0 102 102">
              <defs>
                <radialGradient id="instagram-gradient-a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse">
                  <stop offset=".09" stopColor="#fa8f21"></stop>
                  <stop offset=".78" stopColor="#d82d7e"></stop>
                </radialGradient>
                <radialGradient id="instagram-gradient-b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse">
                  <stop offset=".64" stopColor="#8c3aaa" stopOpacity="0"></stop>
                  <stop offset="1" stopColor="#8c3aaa"></stop>
                </radialGradient>
              </defs>
              <path fill="url(#instagram-gradient-a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path>
              <path fill="url(#instagram-gradient-b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path>
              <path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" transform="translate(-422.637 -426.196)"></path>
            </svg>
            <span style={{ 
              fontFamily: 'Inter', 
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '20px'
            }}>Instagram</span>
          </button>
          
        </div>

        {/* Profile Analytics Dashboard */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Inter' }}>Profile Analytics</h2>
          
          {/* Top Section - Two main metrics side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Followers Metric */}
            <div className="text-center p-6 rounded-lg" style={{ 
              backgroundColor: '#F9FAFB',
              border: '1px solid #E5E7EB'
            }}>
              <div className="text-5xl font-bold mb-2" style={{ 
                fontFamily: 'Inter', 
                color: '#14213D' 
              }}>{influencer.followers_count?.toLocaleString() || 'N/A'}</div>
              <div className="text-lg mb-2" style={{ 
                fontFamily: 'Inter', 
                color: '#6B7280' 
              }}>Followers</div>
            </div>
            
            {/* Engagement Metric */}
            <div className="text-center p-6 rounded-lg" style={{ 
              backgroundColor: '#F9FAFB',
              border: '1px solid #E5E7EB'
            }}>
              <div className="text-5xl font-bold mb-2" style={{ 
                fontFamily: 'Inter', 
                color: '#EC4899' 
              }}>{influencer.engagement_rate}%</div>
              <div className="text-lg mb-2" style={{ 
                fontFamily: 'Inter', 
                color: '#6B7280' 
              }}>Engagement</div>
            </div>
          </div>
          
          {/* Bottom Section - Six additional metrics in a row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Posts Count */}
            <div className="text-center">
              <div className="text-2xl font-bold mb-1" style={{ 
                fontFamily: 'Inter', 
                color: '#14213D' 
              }}>{influencer.posts_count?.toLocaleString() || 'N/A'}</div>
              <div className="text-sm" style={{ 
                fontFamily: 'Inter', 
                color: '#6B7280' 
              }}>Posts</div>
            </div>
            
            {/* Credibility Score */}
            <div className="text-center">
              <div className="text-2xl font-bold mb-1" style={{ 
                fontFamily: 'Inter', 
                color: '#F59E0B' 
              }}>{influencer.credibility_score || 'N/A'}</div>
              <div className="text-sm" style={{ 
                fontFamily: 'Inter', 
                color: '#6B7280' 
              }}>Credibility</div>
            </div>
            
            {/* Category */}
            <div className="text-center">
              <div className="text-2xl font-bold mb-1" style={{ 
                fontFamily: 'Inter', 
                color: '#14213D' 
              }}>{influencer.category || 'N/A'}</div>
              <div className="text-sm" style={{ 
                fontFamily: 'Inter', 
                color: '#6B7280' 
              }}>Category</div>
            </div>
            
            {/* Hashtag Diversity */}
            <div className="text-center">
              <div className="text-2xl font-bold mb-1" style={{ 
                fontFamily: 'Inter', 
                color: '#F59E0B' 
              }}>{influencer.hashtag_diversity || 'N/A'}</div>
              <div className="text-sm" style={{ 
                fontFamily: 'Inter', 
                color: '#6B7280' 
              }}>Hashtag Diversity</div>
            </div>
            
            {/* Avg Days Between Posts */}
            <div className="text-center">
              <div className="text-2xl font-bold mb-1" style={{ 
                fontFamily: 'Inter', 
                color: '#14213D' 
              }}>{influencer.average_days_between_posts || 'N/A'}</div>
              <div className="text-sm" style={{ 
                fontFamily: 'Inter', 
                color: '#6B7280' 
              }}>Days Between Posts</div>
            </div>
            
            {/* Risk Level */}
            <div className="text-center">
              <div className="text-2xl font-bold mb-1" style={{ 
                fontFamily: 'Inter', 
                color: '#F59E0B' 
              }}>{influencer.risk_level_value || 'N/A'}</div>
              <div className="text-sm" style={{ 
                fontFamily: 'Inter', 
                color: '#6B7280' 
              }}>Risk Level</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex space-x-4">
            {/* Overview */}
            <button 
              onClick={() => setActiveTab('overview')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-md" 
              style={{ 
                backgroundColor: activeTab === 'overview' ? '#FCA311' : 'transparent',
                color: activeTab === 'overview' ? 'white' : '#14213D',
                fontFamily: 'Inter'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'overview') {
                  e.currentTarget.style.backgroundColor = '#F9FAFB'
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'overview') {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }
              }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <span>Overview</span>
            </button>
            
            {/* Content */}
            <button 
              onClick={() => setActiveTab('content')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-md" 
              style={{ 
                backgroundColor: activeTab === 'content' ? '#FCA311' : 'transparent',
                color: activeTab === 'content' ? 'white' : '#14213D',
                fontFamily: 'Inter'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'content') {
                  e.currentTarget.style.backgroundColor = '#F9FAFB'
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'content') {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }
              }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <span>Content</span>
            </button>
            
            {/* Brand Safety */}
            <button 
              onClick={() => setActiveTab('brand-safety')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-md" 
              style={{ 
                backgroundColor: activeTab === 'brand-safety' ? '#FCA311' : 'transparent',
                color: activeTab === 'brand-safety' ? 'white' : '#14213D',
                fontFamily: 'Inter'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'brand-safety') {
                  e.currentTarget.style.backgroundColor = '#F9FAFB'
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'brand-safety') {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }
              }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Brand Safety</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Followers */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{influencer.followers_count?.toLocaleString() || 'N/A'}</div>
                <div className="text-sm text-gray-600">Followers</div>
              </div>

              {/* Engagement Rate */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{influencer.engagement_rate || 'N/A'}%</div>
                <div className="text-sm text-gray-600">Engagement Rate</div>
              </div>

              {/* Posts Count */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{influencer.posts_count?.toLocaleString() || 'N/A'}</div>
                <div className="text-sm text-gray-600">Total Posts</div>
              </div>

              {/* Credibility Score */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{influencer.credibility_score || 'N/A'}</div>
                <div className="text-sm text-gray-600">Credibility Score</div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Basic Information */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Category</span>
                    <span className="font-medium">{influencer.category || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Location</span>
                    <span className="font-medium">{influencer.location || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Verified</span>
                    <span className="font-medium">{influencer.verified ? 'Yes' : 'No'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Influencer Rank</span>
                    <span className="font-medium">#{influencer.influencer_rank || 'N/A'}</span>
                  </div>
                </div>
              </div>

              {/* Content Performance */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Days Between Posts</span>
                    <span className="font-medium">{influencer.average_days_between_posts || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Hashtag Diversity</span>
                    <span className="font-medium">{influencer.hashtag_diversity || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Total Hashtags</span>
                    <span className="font-medium">{influencer.total_unique_hashtags || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Avg Hashtags/Post</span>
                    <span className="font-medium">{influencer.avg_hashtags_per_post || 'N/A'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Insights Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Insights & Analysis</h3>
              <div className="space-y-4">
                {influencer.pn_engagement_context && (
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-gray-700">
                          <span className="font-semibold text-gray-900">Engagement Analysis:</span> {influencer.pn_engagement_context}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {influencer.consistency_evidence && (
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-gray-700">
                          <span className="font-semibold text-gray-900">Consistency Analysis:</span> {influencer.consistency_evidence}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {influencer.pn_overall_recommendation && (
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-gray-700">
                          <span className="font-semibold text-gray-900">Overall Recommendation:</span> {influencer.pn_overall_recommendation}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Content Tab Content */}
        {activeTab === 'content' && (
          <div className="space-y-8">
            {/* Content Categories */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Categories</h3>
              <div className="flex flex-wrap gap-3">
                {influencer.categories_combined ? influencer.categories_combined.split(',').map((category, index) => (
                  <span key={index} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {category.trim()}
                  </span>
                )) : (
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                    {influencer.category || 'General'}
                  </span>
                )}
              </div>
            </div>

            {/* Hashtag Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">#{influencer.top_hashtag || 'N/A'}</div>
                <div className="text-sm text-gray-600">Top Hashtag</div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{influencer.total_unique_hashtags || 'N/A'}</div>
                <div className="text-sm text-gray-600">Total Hashtags</div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{influencer.hashtag_diversity || 'N/A'}</div>
                <div className="text-sm text-gray-600">Hashtag Diversity</div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{influencer.avg_hashtags_per_post || 'N/A'}</div>
                <div className="text-sm text-gray-600">Avg Hashtags/Post</div>
              </div>
            </div>

            {/* Content Themes */}
            {influencer.pn_content_themes && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Themes</h3>
                <p className="text-gray-700 leading-relaxed">{influencer.pn_content_themes}</p>
              </div>
            )}
          </div>
        )}

        {/* Brand Safety Tab Content */}
        {activeTab === 'brand-safety' && (
          <div className="space-y-8">
            {/* Safety Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-sm border border-green-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-green-500 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="text-3xl font-bold text-green-700 mb-1">{influencer.brand_safety_verification_score || 'N/A'}</div>
                <div className="text-sm font-medium text-green-600">Safety Score</div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl shadow-sm border border-red-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-red-500 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                </div>
                <div className="text-3xl font-bold text-red-700 mb-1">{influencer.risk_level_value || 'N/A'}</div>
                <div className="text-sm font-medium text-red-600">Risk Level</div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-sm border border-blue-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-500 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div className="text-3xl font-bold text-blue-700 mb-1">{influencer.confidence_level || 'N/A'}</div>
                <div className="text-sm font-medium text-blue-600">Confidence Level</div>
              </div>
            </div>

            {/* Safety Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Safety Score Details */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-sm border border-green-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500 rounded-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-green-800">Safety Analysis</h3>
                </div>
                {influencer.brand_safety_verification_evidence ? (
                  <p className="text-gray-700 leading-relaxed">{influencer.brand_safety_verification_evidence}</p>
                ) : (
                  <p className="text-gray-500 italic">No safety analysis available</p>
                )}
              </div>

              {/* Risk Assessment */}
              <div className="bg-gradient-to-br from-red-50 to-white rounded-xl shadow-sm border border-red-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-500 rounded-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-red-800">Risk Assessment</h3>
                </div>
                {influencer.risk_level_explanation ? (
                  <p className="text-gray-700 leading-relaxed">{influencer.risk_level_explanation}</p>
                ) : (
                  <p className="text-gray-500 italic">No risk assessment available</p>
                )}
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              {/* Basic Details */}
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-sm border border-purple-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500 rounded-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-800">Basic Details</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                    <div className="text-sm font-medium text-blue-600 mb-1">Verified</div>
                    <div className="font-bold text-blue-800 text-lg">{influencer.verified ? 'Yes' : 'No'}</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                    <div className="text-sm font-medium text-orange-600 mb-1">Tier</div>
                    <div className="font-bold text-orange-800 text-lg">{influencer.upper || 'N/A'}</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                    <div className="text-sm font-medium text-green-600 mb-1">Consistency</div>
                    <div className="font-bold text-green-800 text-lg">{influencer.consistency_score || 'N/A'}</div>
                  </div>
                </div>
              </div>

              {/* Value Proposition */}
              {influencer.value_proposition && (
                <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl shadow-sm border border-emerald-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-500 rounded-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-emerald-800">Value Proposition</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{influencer.value_proposition}</p>
                </div>
              )}

              {/* Risk Advisory */}
              {influencer.risk_advisory && (
                <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl shadow-sm border border-amber-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-amber-500 rounded-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-amber-800">Risk Advisory</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{influencer.risk_advisory}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}
