'use client'
import React, { useState, useEffect, useRef } from 'react'

interface Influencer {
  id: number;
  username: string;
  followers_count: number;
  verified: boolean;
  categories_combined: string;
  engagement_rate: number;
  credibility_score: number;
  location?: string;
}

const MeetOurInfluencers = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('')
  const [allInfluencers, setAllInfluencers] = useState<Influencer[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestionSelected, setSuggestionSelected] = useState(false)

  // Simple debounced search like leaderboard
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Show/hide suggestions based on debounced query
  useEffect(() => {
    if (debouncedSearchQuery.trim().length >= 2 && !suggestionSelected) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [debouncedSearchQuery, suggestionSelected]);

  // Sample influencer data for the scrolling animation
  const sampleInfluencers = [
    { id: 1, name: 'Influencer 1', image: '/images/home/influencers/influencers-1.png', verified: true },
    { id: 2, name: 'Influencer 2', image: '/images/home/influencers/influencers-2.png', verified: false },
    { id: 3, name: 'Influencer 3', image: '/images/home/influencers/influencers-3.png', verified: true },
    { id: 4, name: 'Influencer 4', image: '/images/home/influencers/influencers-4.png', verified: false },
    { id: 5, name: 'Influencer 5', image: '/images/home/influencers/influencers-5.png', verified: true },
    { id: 6, name: 'Influencer 6', image: '/images/home/influencers/influencers-6.png', verified: false },
    { id: 7, name: 'Influencer 7', image: '/images/home/influencers/influencers-7.png', verified: true },
    { id: 8, name: 'Influencer 8', image: '/images/home/influencers/influencers-8.png', verified: false },
    { id: 9, name: 'Influencer 9', image: '/images/home/influencers/influencers-9.png', verified: true },
    { id: 10, name: 'Influencer 10', image: '/images/home/influencers/influencers-10.png', verified: false },
    { id: 11, name: 'Influencer 11', image: '/images/home/influencers/influencers-11.png', verified: true },
    { id: 12, name: 'Influencer 12', image: '/images/home/influencers/influencers-12.png', verified: false },
    { id: 13, name: 'Influencer 13', image: '/images/home/influencers/influencers-13.png', verified: true },
    { id: 14, name: 'Influencer 14', image: '/images/home/influencers/influencers-14.png', verified: false },
    { id: 15, name: 'Influencer 15', image: '/images/home/influencers/influencers-15.png', verified: true },
    { id: 16, name: 'Influencer 16', image: '/images/home/influencers/influencers-16.png', verified: false }
  ]

  // Fetch influencers with same approach as leaderboard
  useEffect(() => {
    const fetchInfluencers = async () => {
      try {
        console.log('🚀 MeetOurInfluencers: Fetching data...');
        const startTime = Date.now();
        
        const response = await fetch('/api/influencers?all=true');
        const data = await response.json();
        
        const loadTime = Date.now() - startTime;
        console.log(`✅ MeetOurInfluencers: Loaded in ${loadTime}ms`);
        
        if (data.data && Array.isArray(data.data)) {
          setAllInfluencers(data.data);
          console.log('✅ MeetOurInfluencers: Set influencers:', data.data.length);
        } else {
          console.log('❌ MeetOurInfluencers: No data found in response');
          console.log('❌ MeetOurInfluencers: Response data:', data);
        }
      } catch (error) {
        console.error('❌ MeetOurInfluencers: Error fetching influencers:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    // Always fetch data on component mount
    fetchInfluencers();
  }, [])

  // Enhanced search function (same as leaderboard)
  const getFilteredInfluencers = () => {
    if (!debouncedSearchQuery.trim()) return []
    
    console.log('🔍 MeetOurInfluencers: Searching for:', debouncedSearchQuery)
    console.log('📊 MeetOurInfluencers: Total influencers available:', allInfluencers.length)
    console.log('📊 MeetOurInfluencers: Sample influencer data:', allInfluencers.slice(0, 2))
    
    const queryLower = debouncedSearchQuery.toLowerCase()
    const filtered = allInfluencers.filter(influencer => {
      const username = influencer.username?.toLowerCase() || ''
      
      // Only search by username, not categories or location
      const matches = username.includes(queryLower)
      
      if (matches) {
        console.log('✅ Username match found:', { username, query: queryLower })
      }
      
      return matches
    }).slice(0, 20) // Limit to 20 results
    
    console.log('✅ MeetOurInfluencers: Filtered results:', filtered.length)
    return filtered
  }

  // Simple search change handler
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    // Reset suggestion selected flag when user starts typing
    setSuggestionSelected(false)
  }

  const handleSuggestionClick = (influencer: Influencer) => {
    setSearchQuery(influencer.username)
    setShowSuggestions(false)
    setSuggestionSelected(true)
    // Only select the influencer, don't navigate yet
  }

  const handleSearchButtonClick = () => {
    const filteredInfluencers = getFilteredInfluencers()
    if (filteredInfluencers.length > 0) {
      // Navigate to first matching influencer
      window.location.href = `/influencer/${filteredInfluencers[0].username}`
    }
  }

  return (
                 <section className="py-20 lg:py-24 relative">
          {/* Background for right half of section */}
          <div
            className="absolute inset-y-0 right-0 w-full lg:w-1/2"
            style={{
              backgroundImage: 'url(/images/home/influencers.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-white bg-opacity-80"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                 <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Section - Infinite Scroll with 2.5 Cards Visible */}
          <div className="relative h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] overflow-hidden w-[20rem] sm:w-[24rem] md:w-[28rem] lg:w-[32rem] mx-auto rounded-3xl flex items-center">
            <div className="w-full">
              {/* Row 1 - Scroll Left - Images 1-4 */}
              <div className="flex mb-2 sm:mb-3 lg:mb-4" style={{
                animation: 'scroll-left 20s linear infinite',
                width: 'max-content'
              }}>
                {[...sampleInfluencers.slice(0, 4), ...sampleInfluencers.slice(0, 4), ...sampleInfluencers.slice(0, 4), ...sampleInfluencers.slice(0, 4)].map((influencer, index) => (
                  <div key={`row1-${index}`} className="flex-shrink-0 mx-1">
                    <div 
                      className="relative overflow-hidden rounded-2xl shadow-lg w-[5rem] h-[5rem] sm:w-[6rem] sm:h-[6rem] md:w-[7rem] md:h-[7rem] lg:w-[9rem] lg:h-[9rem] hover:scale-105 transition-transform duration-300"
                      style={{
                        transform: `skewX(15deg)`,
                        zIndex: 4 - (index % 4)
                      }}
                    >
                      <img
                        src={influencer.image}
                        alt={influencer.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2 - Scroll Right - Images 5-8 */}
              <div className="flex mb-2 sm:mb-3 lg:mb-4" style={{
                animation: 'scroll-right 20s linear infinite',
                width: 'max-content'
              }}>
                {[...sampleInfluencers.slice(4, 8), ...sampleInfluencers.slice(4, 8), ...sampleInfluencers.slice(4, 8), ...sampleInfluencers.slice(4, 8)].map((influencer, index) => (
                  <div key={`row2-${index}`} className="flex-shrink-0 mx-1">
                    <div 
                      className="relative overflow-hidden rounded-2xl shadow-lg w-[5rem] h-[5rem] sm:w-[6rem] sm:h-[6rem] md:w-[7rem] md:h-[7rem] lg:w-[9rem] lg:h-[9rem] hover:scale-105 transition-transform duration-300"
                      style={{
                        transform: `skewX(15deg)`,
                        zIndex: 4 - (index % 4)
                      }}
                    >
                      <img
                        src={influencer.image}
                        alt={influencer.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 3 - Scroll Left - Images 9-12 */}
              <div className="flex mb-2 sm:mb-3 lg:mb-4" style={{
                animation: 'scroll-left 20s linear infinite',
                width: 'max-content'
              }}>
                {[...sampleInfluencers.slice(8, 12), ...sampleInfluencers.slice(8, 12), ...sampleInfluencers.slice(8, 12), ...sampleInfluencers.slice(8, 12)].map((influencer, index) => (
                  <div key={`row3-${index}`} className="flex-shrink-0 mx-1">
                    <div 
                      className="relative overflow-hidden rounded-2xl shadow-lg w-[5rem] h-[5rem] sm:w-[6rem] sm:h-[6rem] md:w-[7rem] md:h-[7rem] lg:w-[9rem] lg:h-[9rem] hover:scale-105 transition-transform duration-300"
                      style={{
                        transform: `skewX(15deg)`,
                        zIndex: 4 - (index % 4)
                      }}
                    >
                      <img
                        src={influencer.image}
                        alt={influencer.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 4 - Scroll Right - Images 13-16 */}
              <div className="flex" style={{
                animation: 'scroll-right 20s linear infinite',
                width: 'max-content'
              }}>
                {[...sampleInfluencers.slice(12, 16), ...sampleInfluencers.slice(12, 16), ...sampleInfluencers.slice(12, 16), ...sampleInfluencers.slice(12, 16)].map((influencer, index) => (
                  <div key={`row4-${index}`} className="flex-shrink-0 mx-1">
                    <div 
                      className="relative overflow-hidden rounded-2xl shadow-lg w-[5rem] h-[5rem] sm:w-[6rem] sm:h-[6rem] md:w-[7rem] md:h-[7rem] lg:w-[9rem] lg:h-[9rem] hover:scale-105 transition-transform duration-300"
                      style={{
                        transform: `skewX(15deg)`,
                        zIndex: 4 - (index % 4)
                      }}
                    >
                      <img
                        src={influencer.image}
                        alt={influencer.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

                     {/* Right Section - Search and CTA */}
           <div className="relative p-8 lg:p-12 rounded-3xl">
                         {/* 10000 Image */}
             <div className="flex justify-center mb-6">
               <img
                 src="/images/home/10000.svg"
                 alt="10,000+ Influencers"
                 className="w-auto h-auto"
               />
             </div>

             {/* Main Heading */}
            <div className="flex items-center justify-center mb-6">
              <h2 className="mr-2" style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: 'clamp(24px, 5vw, 36px)',
                lineHeight: 'clamp(28px, 6vw, 40px)',
                letterSpacing: '0%',
                textAlign: 'center',
                textTransform: 'uppercase',
                color: '#FCA311'
              }}>
                MEET OUR INFLUENCERS
              </h2>
              <svg 
                width="clamp(20px, 4vw, 28px)" 
                height="clamp(20px, 4vw, 28px)" 
                viewBox="0 0 24 24" 
                fill="none" 
                style={{ color: '#FCA311' }}
              >
                <path 
                  d="M7 17L17 7M17 7H7M17 7V17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>

                         {/* Description */}
             <p className="mb-8" style={{
               fontFamily: 'Inter',
               fontWeight: 400,
               fontSize: 'clamp(14px, 2.5vw, 18px)',
               lineHeight: 'clamp(20px, 3.5vw, 30px)',
               letterSpacing: '0%',
               textAlign: 'center',
               color: '#00000099'
             }}>
               Thousands of authentic Influencer ready to amplify your brand story across every niche and platform.
             </p>

            {/* Search Section */}
            <div className="space-y-4">
              {/* Search Input with Suggestions */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder={isLoading ? "Loading influencers..." : "Search by username..."}
                  value={searchQuery}
                  onChange={handleSearchChange}
                  disabled={isLoading}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none disabled:opacity-50"
                  style={{ 
                    fontSize: 'clamp(14px, 2.5vw, 18px)',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E5E7EB'
                  }}
                  autoComplete="off"
                />
                
                {/* Loading indicator */}
                {isLoading && (
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                    <div className="w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                
                {/* Suggestions Dropdown */}
                {showSuggestions && debouncedSearchQuery.trim().length >= 2 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
                    {(() => {
                      const filteredInfluencers = getFilteredInfluencers()
                      return filteredInfluencers.length > 0 ? (
                        <>
                          <div className="p-2 text-sm text-gray-600 border-b border-gray-100">
                            Showing {filteredInfluencers.length} results
                          </div>
                          {filteredInfluencers.map((influencer) => (
                            <div
                              key={influencer.id}
                              onClick={() => handleSuggestionClick(influencer)}
                              className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center flex-shrink-0">
                                  <span className="text-orange-600 font-bold text-sm">
                                    {influencer.username.charAt(0).toUpperCase()}
                                  </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2">
                                    <span className="font-medium text-gray-900 truncate">
                                      {influencer.username}
                                    </span>
                                    {influencer.verified && (
                                      <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                      </svg>
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-500 truncate">
                                    {influencer.followers_count?.toLocaleString()} followers
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        <div className="p-8 text-center">
                          <div className="text-gray-400 mb-2">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">No influencers found</h3>
                          <p className="text-gray-600">Try searching with different keywords or check the spelling.</p>
                        </div>
                      )
                    })()}
                  </div>
                )}
               </div>
              
              {/* Search Button */}
              <div className="flex flex-col items-center space-y-3">
                <button
                  onClick={handleSearchButtonClick}
                  disabled={isLoading || !searchQuery.trim()}
                  className="px-8 py-3 rounded-xl font-semibold text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: '#FCA311',
                    fontSize: 'clamp(14px, 2.5vw, 18px)',
                    boxShadow: '0 4px 15px rgba(252, 163, 17, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isLoading) {
                      e.currentTarget.style.backgroundColor = '#E6930F'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isLoading) {
                      e.currentTarget.style.backgroundColor = '#FCA311'
                    }
                  }}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Loading...</span>
                    </div>
                  ) : (
                    'Search Influencer'
                  )}
                </button>
              </div>
             </div>
           </div>
         </div>
       </div>
     </section>
  )
}

export default MeetOurInfluencers