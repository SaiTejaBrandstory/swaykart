'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import DatabaseTable from './DatabaseTable'

const TopCreatorsSection = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('All Categories')
  const [selectedLocation, setSelectedLocation] = useState('All Locations')
  const [selectedFollowersTier, setSelectedFollowersTier] = useState('All Tiers')
  const [sortBy, setSortBy] = useState('Ranking')
  const [totalCreators, setTotalCreators] = useState(0)
  const [loading, setLoading] = useState(true)
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('')
  const [categories, setCategories] = useState<string[]>([])
  const [locations, setLocations] = useState<string[]>([])
  const [allData, setAllData] = useState<any[]>([])
  const [categoriesCount, setCategoriesCount] = useState(0)
  const [locationsCount, setLocationsCount] = useState(0)

  // Fetch total count immediately on component mount
  useEffect(() => {
    const fetchTotalCount = async () => {
      try {
        console.log('🚀 Fetching total count...');
        const startTime = Date.now();
        
            const response = await fetch('/api/influencers?all=true');
        const data = await response.json();
        
        if (data.total) {
          setTotalCreators(data.total);
        }
        
        // Store all data and extract unique categories and locations
        if (data.data && Array.isArray(data.data)) {
          setAllData(data.data);
          
          // Extract ALL categories from ALL records
          const allCategories = new Set<string>();
          const allLocations = new Set<string>();
          
          // Process ALL records to get complete category and location list
          for (let i = 0; i < data.data.length; i++) {
            const influencer = data.data[i];
            
            // Extract categories
            if (influencer.categories_combined) {
              const categories = influencer.categories_combined.split(',');
              for (const cat of categories) {
                const trimmed = cat.trim();
                if (trimmed) allCategories.add(trimmed);
              }
            }
            
            // Extract locations
            if (influencer.location) {
              const trimmed = influencer.location.trim();
              if (trimmed) allLocations.add(trimmed);
            }
          }
          
          // Convert Sets to Arrays and sort
          const uniqueCategories = Array.from(allCategories).sort();
          const uniqueLocations = Array.from(allLocations).sort();
          
          setCategories(uniqueCategories);
          setLocations(uniqueLocations);
          setCategoriesCount(uniqueCategories.length);
          setLocationsCount(uniqueLocations.length);
          console.log(`✅ Found ${uniqueCategories.length} unique categories and ${uniqueLocations.length} unique locations from ALL ${data.data.length} records`);
        }
        
        const loadTime = Date.now() - startTime;
        console.log(`✅ Total count loaded in ${loadTime}ms: ${data.total} records`);
      } catch (error) {
        console.error('Error fetching total count:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTotalCount();
  }, [])

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
    setDebouncedSearchQuery(searchQuery);
  }, 300); // 300ms delay

  return () => clearTimeout(timer);
}, [searchQuery]);


  const creators = [
    {
      rank: 1,
      name: 'Sarah Chen',
      username: '@sarahchenbeauty',
      industries: ['Beauty & Fashion', 'Lifestyle', 'Travel', 'Fitness'],
      additionalIndustries: 3,
      followers: '2.4M',
      engagement: '8.2%',
      engagementTrend: 'up',
      credibilityScore: 9,
      verified: true,
      image: '/images/leaderboard/creator-icons/creator-1.svg',
    },
    {
      rank: 2,
      name: 'Mike Rodriguez',
      username: '@fitwithmike',
      industries: ['Food & Lifestyle', 'Tech & Gaming', 'Fitness', 'Travel'],
      additionalIndustries: 2,
      followers: '1.8M',
      engagement: '7.9%',
      engagementTrend: 'up',
      credibilityScore: 9,
      verified: false,
      image: '/images/leaderboard/creator-icons/creator-2.svg',
    },
    {
      rank: 3,
      name: 'Emma Wilson',
      username: '@emmafoodie',
      industries: ['Beauty & Fashion', 'Food & Lifestyle', 'Travel'],
      additionalIndustries: 2,
      followers: '950K',
      engagement: '9.1%',
      engagementTrend: 'up',
      credibilityScore: 9,
      verified: false,
      image: '/images/leaderboard/creator-icons/creator-3.svg',
    },
    {
      rank: 4,
      name: 'Jackquline',
      username: '@jackjack',
      industries: ['Beauty & Fashion', 'Lifestyle', 'Fashion'],
      additionalIndustries: 2,
      followers: '1.2M',
      engagement: '9.1%',
      engagementTrend: 'down',
      credibilityScore: 8,
      verified: false,
      image: '/images/leaderboard/creator-icons/creator-4.svg',
    },
    {
      rank: 5,
      name: 'Emilia Clarke',
      username: '@clarkeemilia',
      industries: ['Food & Lifestyle', 'Entertainment', 'Travel'],
      additionalIndustries: 2,
      followers: '1.2M',
      engagement: '9.1%',
      engagementTrend: 'down',
      credibilityScore: 7,
      verified: false,
      image: '/images/leaderboard/creator-icons/creator-5.svg',
    },
    {
      rank: 6,
      name: 'Brad pitt',
      username: '@bradishere',
      industries: ['Tech & Gaming', 'Entertainment', 'Sports'],
      additionalIndustries: 2,
      followers: '1.2M',
      engagement: '9.1%',
      engagementTrend: 'down',
      credibilityScore: 8,
      verified: false,
      image: '/images/leaderboard/creator-icons/creator-6.svg',
    },
    {
      rank: 7,
      name: 'Margot robbie',
      username: '@barbierobbie',
      industries: ['Food & Lifestyle', 'Entertainment', 'Fashion'],
      additionalIndustries: 2,
      followers: '1.2M',
      engagement: '9.1%',
      engagementTrend: 'down',
      credibilityScore: 8,
      verified: false,
      image: '/images/leaderboard/creator-icons/creator-7.svg',
    },
    {
      rank: 8,
      name: 'Chris hemsworth',
      username: '@imthorthethunder',
      industries: ['Beauty & Fashion', 'Fitness', 'Entertainment', 'Travel'],
      additionalIndustries: 3,
      followers: '1.2M',
      engagement: '9.1%',
      engagementTrend: 'down',
      credibilityScore: 7,
      verified: false,
      image: '/images/leaderboard/creator-icons/creator-8.svg',
    },
    {
      rank: 9,
      name: 'Liam evans',
      username: '@liamliam223454',
      industries: ['Food & Lifestyle', 'Travel', 'Fitness', 'Entertainment', 'Sports'],
      additionalIndustries: 4,
      followers: '1.2M',
      engagement: '9.1%',
      engagementTrend: 'down',
      credibilityScore: 7,
      verified: false,
      image: '/images/leaderboard/creator-icons/creator-9.svg',
    },
    {
      rank: 10,
      name: 'stuart broad',
      username: '@cricketerbroad',
      industries: ['Beauty & Fashion', 'Sports'],
      additionalIndustries: 1,
      followers: '1.2M',
      engagement: '9.1%',
      engagementTrend: 'down',
      credibilityScore: 7,
      verified: false,
      image: '/images/leaderboard/creator-icons/creator-10.svg',
    },
  ].sort((a, b) => a.rank - b.rank)
  return (
    <div className="py-12 sm:py-16 lg:py-20 xl:py-24" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header Section */}
        <div className="text-left mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-start">
            <Image 
              src="/images/leaderboard/trophy.svg" 
              alt="Trophy" 
              width={64}
              height={64}
              className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-0 sm:mr-6 flex-shrink-0"
            />
            <div>
              <h1 style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: 'clamp(24px, 4vw, 30px)',
                lineHeight: 'clamp(28px, 5vw, 36px)',
                letterSpacing: '0%',
                color: '#14213D',
                marginBottom: '8px'
              }}>
                Top Creators from India
              </h1>
              <p style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)',
                letterSpacing: '0%',
                color: '#4B5563'
              }}>
                Discover the most influential content creators across all platforms and categories
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="p-4 sm:p-6 rounded-lg flex flex-col items-center text-center" style={{ 
            backgroundColor: '#FFFFFF',
            border: '1px solid #E5E7EB'
          }}>
            <div className="mb-2 sm:mb-3">
              <Image 
                src="/images/leaderboard/active-creators.svg" 
                alt="Active Creators" 
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>
            <p style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: 'clamp(20px, 4vw, 24px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#14213D',
              marginBottom: '6px'
            }}>
              {loading ? '...' : totalCreators.toLocaleString()}
            </p>
            <p style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: 'clamp(14px, 2.5vw, 16px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#4B5563'
            }}>
              Active Creators
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-lg flex flex-col items-center text-center" style={{ 
            backgroundColor: '#FFFFFF',
            border: '1px solid #E5E7EB'
          }}>
            <div className="mb-2 sm:mb-3">
              <Image 
                src="/images/leaderboard/cities.svg" 
                alt="Cities" 
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>
            <p style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: 'clamp(20px, 4vw, 24px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#14213D',
              marginBottom: '6px'
            }}>
              {loading ? '...' : locationsCount}
            </p>
            <p style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: 'clamp(14px, 2.5vw, 16px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#4B5563'
            }}>
              Locations
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-lg flex flex-col items-center text-center" style={{ 
            backgroundColor: '#FFFFFF',
            border: '1px solid #E5E7EB'
          }}>
            <div className="mb-2 sm:mb-3">
              <Image 
                src="/images/leaderboard/industries.svg" 
                alt="Industries" 
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>
            <p style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: 'clamp(20px, 4vw, 24px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#14213D',
              marginBottom: '6px'
            }}>
              {loading ? '...' : categoriesCount}
            </p>
            <p style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: 'clamp(14px, 2.5vw, 16px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#4B5563'
            }}>
              Categories
            </p>
          </div>
        </div>

        {/* Filters and Search Section */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-white rounded-xl p-4 sm:p-6 mb-4 sm:mb-6" style={{ border: '1px solid #E5E7EB' }}>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                <i className="fa-solid fa-filter" style={{ color: '#FCA311', fontSize: 'clamp(14px, 2.5vw, 16px)' }}></i>
                  <p style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    lineHeight: 'clamp(20px, 3.5vw, 24px)',
                    letterSpacing: '0%',
                    color: '#14213D'
                  }}>
                    Filters:
                  </p>
                </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {/* Industry Dropdown */}
              <div className="relative">
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="block w-full px-3 sm:px-4 py-2 pr-8 text-sm text-[#14213D] bg-white border border-[#E5E7EB] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#FCA311] focus:border-[#FCA311] appearance-none"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                      fontSize: 'clamp(14px, 2vw, 16px)',
                      lineHeight: 'clamp(16px, 3vw, 20px)',
                    letterSpacing: '0%',
                  }}
                >
                  <option value="All Categories">All Categories</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              {/* Location Dropdown */}
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                    className="block w-full px-3 sm:px-4 py-2 pr-8 text-sm text-[#14213D] bg-white border border-[#E5E7EB] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#FCA311] focus:border-[#FCA311] appearance-none"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                      fontSize: 'clamp(14px, 2vw, 16px)',
                      lineHeight: 'clamp(16px, 3vw, 20px)',
                    letterSpacing: '0%',
                  }}
                >
                  <option value="All Locations">All Locations</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>


              {/* Followers Tier Dropdown */}
              <div className="relative">
                <select
                  value={selectedFollowersTier}
                  onChange={(e) => setSelectedFollowersTier(e.target.value)}
                  className="block w-full px-3 sm:px-4 py-2 pr-8 text-sm text-[#14213D] bg-white border border-[#E5E7EB] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#FCA311] focus:border-[#FCA311] appearance-none"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    lineHeight: 'clamp(16px, 3vw, 20px)',
                    letterSpacing: '0%',
                  }}
                >
                  <option value="All Tiers">All Tiers</option>
                  <option value="Nano (1K - 10K)">Nano (1K - 10K)</option>
                  <option value="Micro (10K - 100K)">Micro (10K - 100K)</option>
                  <option value="Macro (100K - 1M)">Macro (100K - 1M)</option>
                  <option value="Mega (1M+)">Mega (1M+)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              {/* Sort By */}
                <div className="relative">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-2">
                      <i className="fa-solid fa-sort" style={{ color: '#FCA311', fontSize: 'clamp(14px, 2.5vw, 16px)' }}></i>
                      <span style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        fontSize: 'clamp(14px, 2vw, 16px)',
                        lineHeight: 'clamp(16px, 3vw, 20px)',
                        letterSpacing: '0%',
                        color: '#14213D',
                        whiteSpace: 'nowrap'
                      }}>
                        Sort by:
                      </span>
                    </div>
                    <div className="relative flex-1">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="block w-full px-3 sm:px-4 py-2 pr-8 text-sm text-[#14213D] bg-white border border-[#E5E7EB] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#FCA311] focus:border-[#FCA311] appearance-none"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          fontSize: 'clamp(14px, 2vw, 16px)',
                          lineHeight: 'clamp(16px, 3vw, 20px)',
                          letterSpacing: '0%',
                        }}
                      >
                        <option value="Ranking">Ranking</option>
                        <option value="Followers">Followers</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4 pointer-events-none">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search Influencers, Categories ...."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 sm:pl-12 pr-4 sm:pr-6 py-3 sm:py-4 text-base text-[#14213D] bg-white border border-[#E5E7EB] rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-[#FCA311] focus:border-[#FCA311]"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)',
                letterSpacing: '0%',
              }}
            />
          </div>
        </div>

        {/* Database Table - Under search bar */}
        {allData.length > 0 ? (
          <DatabaseTable 
            searchQuery={debouncedSearchQuery} 
            allData={allData} 
            loading={loading}
            selectedCategory={selectedIndustry}
            selectedLocation={selectedLocation}
            selectedFollowersTier={selectedFollowersTier}
            sortBy={sortBy}
          />
        ) : (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FCA311] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading influencer data...</p>
          </div>
        )}

        {/* Search Result Table - HIDDEN */}
        <div className="hidden">
          <h2 style={{
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: 'clamp(18px, 3vw, 20px)',
            lineHeight: 'clamp(24px, 4vw, 28px)',
            letterSpacing: '0%',
            color: '#14213D'
          }} className="mb-6">
            Search result by : Ranking
          </h2>

          <div className="overflow-x-auto rounded-xl border border-[#E5E7EB] shadow-sm">
          <table className="min-w-full divide-y divide-[#E5E7EB]">
            <thead className="bg-[#F9FAFB]">
              <tr>
                <th scope="col" className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-sm font-medium text-[#374151] tracking-wider" style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}>
                  Rank
                </th>
                <th scope="col" className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-sm font-medium text-[#374151] tracking-wider" style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}>
                  Creator
                </th>
                <th scope="col" className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-sm font-medium text-[#374151] tracking-wider hidden sm:table-cell" style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}>
                  Platform
                </th>
                <th scope="col" className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-sm font-medium text-[#374151] tracking-wider" style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}>
                  Categories
                </th>
                <th scope="col" className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-sm font-medium text-[#374151] tracking-wider" style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}>
                  Followers
                </th>
                <th scope="col" className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-sm font-medium text-[#374151] tracking-wider" style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}>
                  Engagement
                </th>
                <th scope="col" className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-sm font-medium text-[#374151] tracking-wider" style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}>
                  Credibility score
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#E5E7EB]">
              {creators.map((creator, index) => (
                <tr key={index} className="bg-[#00000000] hover:bg-[#FCA3111A] transition-colors duration-200 cursor-pointer">
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <span style={{
                          fontFamily: 'Inter',
                          fontWeight: 700,
                          fontSize: 'clamp(16px, 3vw, 20px)',
                          lineHeight: 'clamp(24px, 4vw, 32px)',
                          letterSpacing: '0%',
                          color: creator.rank <= 3 ? '#FCA311' : '#14213D',
                        }}>
                          {creator.rank}
                        </span>
                      {creator.rank <= 3 && (
                          <i className="fa-solid fa-crown ml-1 sm:ml-2" style={{ color: '#FCA311', fontSize: 'clamp(14px, 2.5vw, 16px)' }}></i>
                      )}
                    </div>
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0" style={{ width: 'clamp(32px, 6vw, 40px)', height: 'clamp(32px, 6vw, 40px)' }}>
                        <Image 
                          src={creator.image} 
                          alt={creator.name}
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                          style={{ width: 'clamp(32px, 6vw, 40px)', height: 'clamp(32px, 6vw, 40px)' }}
                        />
                        </div>
                      <div className="ml-2 sm:ml-3 md:ml-4 min-w-0">
                        <div className="text-[#14213D] flex items-center" style={{
                          fontFamily: 'Inter',
                          fontWeight: 600,
                          fontSize: 'clamp(14px, 2.5vw, 16px)',
                          lineHeight: 'clamp(20px, 3.5vw, 24px)',
                          letterSpacing: '0%',
                        }}>
                          <span className="truncate">{creator.name}</span>
                          {creator.verified && (
                            <svg className="ml-1 flex-shrink-0" style={{ width: 'clamp(12px, 2.5vw, 16px)', height: 'clamp(12px, 2.5vw, 16px)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                              <polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"></polygon>
                              <polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"></polygon>
                            </svg>
                          )}
                        </div>
                        <div className="text-[#6B7280] truncate" style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          fontSize: 'clamp(14px, 2vw, 16px)',
                          lineHeight: 'clamp(16px, 3vw, 20px)',
                          letterSpacing: '0%',
                        }}>
                          {creator.username}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-[#14213D] hidden sm:table-cell">
                    <div className="flex items-center justify-center">
                      <Image 
                        src="/images/leaderboard/instagram-logo.svg" 
                        alt="Instagram" 
                        width={24}
                        height={24}
                        style={{ width: 'clamp(16px, 3vw, 24px)', height: 'clamp(16px, 3vw, 24px)' }}
                      />
                    </div>
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-[#14213D]">
                    <div className="flex items-center gap-1">
                      <span className="px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-sm font-medium" style={{
                        backgroundColor: '#DBEAFE',
                        color: '#14213D',
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        fontSize: 'clamp(14px, 2vw, 16px)',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        border: '1px solid #DBEAFE',
                      }}>
                        {creator.industries[0]}
                      </span>
                      {creator.industries.length > 1 && (
                        <div className="relative group">
                          <span className="px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-sm font-medium cursor-pointer" style={{
                            backgroundColor: '#DBEAFE',
                            color: '#14213D',
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            fontSize: 'clamp(14px, 2vw, 16px)',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            border: '1px solid #DBEAFE',
                          }}>
                            +{creator.industries.length - 1}
                          </span>
                           <div className="absolute bottom-full left-0 mb-2 p-2 sm:p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 min-w-max pointer-events-none" style={{
                             backgroundColor: '#FFFFFF',
                             border: '1px solid #14213D',
                             boxShadow: '0px 4px 19.1px -2px #00000014'
                           }}>
                             <div className="flex flex-wrap gap-1 sm:gap-2 max-w-xs">
                               {creator.industries.slice(1).map((industry, idx) => (
                                 <span key={idx} className="px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-sm font-medium text-center whitespace-nowrap" style={{
                                   backgroundColor: '#DBEAFE',
                                   color: '#14213D',
                                   fontFamily: 'Inter',
                                   fontWeight: 500,
                                   fontSize: 'clamp(14px, 2vw, 16px)',
                                   lineHeight: '100%',
                                   letterSpacing: '0%',
                                 }}>
                                   {industry}
                                 </span>
                               ))}
                             </div>
                             <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent" style={{ borderTopColor: '#14213D' }}></div>
                           </div>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 whitespace-nowrap text-[#000000]" style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    lineHeight: 'clamp(20px, 3.5vw, 24px)',
                    letterSpacing: '0%',
                  }}>
                    {creator.followers}
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span style={{
                        fontFamily: 'Inter',
                        fontWeight: 600,
                        fontSize: 'clamp(14px, 2.5vw, 16px)',
                        lineHeight: 'clamp(20px, 3.5vw, 24px)',
                        letterSpacing: '0%',
                        color: creator.engagementTrend === 'up' ? '#16A34A' : '#EF4444',
                      }}>
                        {creator.engagement}
                      </span>
                      {creator.engagementTrend === 'up' ? (
                        <i className="fa-solid fa-caret-up ml-1 sm:ml-2" style={{ color: '#16A34A', fontSize: 'clamp(14px, 2.5vw, 18px)' }}></i>
                      ) : (
                        <i className="fa-solid fa-caret-down ml-1 sm:ml-2" style={{ color: '#EF4444', fontSize: 'clamp(14px, 2.5vw, 18px)' }}></i>
                      )}
                    </div>
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 whitespace-nowrap text-[#000000]" style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    lineHeight: 'clamp(20px, 3.5vw, 24px)',
                    letterSpacing: '0%',
                  }}>
                    {creator.credibilityScore}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-sm text-[#4B5563] order-2 sm:order-1 text-center sm:text-left" style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: 'clamp(14px, 2vw, 16px)',
            lineHeight: 'clamp(16px, 3vw, 20px)',
            letterSpacing: '0%',
          }}>
            Showing 1 to 10 of {totalCreators.toLocaleString()} results
          </p>
          
          {/* Desktop Pagination */}
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px order-1 sm:order-2 hidden sm:flex" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-[#E5E7EB] bg-white text-sm font-medium text-[#4B5563] hover:bg-gray-50"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0%',
              }}
            >
              <span className="sr-only">Previous</span>
              <i className="fa-solid fa-chevron-left mr-1"></i>
              Previous
            </a>
            <a
              href="#"
              aria-current="page"
              className="z-10 bg-[#14213D] text-white relative inline-flex items-center px-4 py-2 border border-[#14213D] text-sm font-medium"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0%',
              }}
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-[#E5E7EB] bg-white text-sm font-medium text-[#14213D] hover:bg-gray-50"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0%',
              }}
            >
              2
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-[#E5E7EB] bg-white text-sm font-medium text-[#14213D] hover:bg-gray-50"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0%',
              }}
            >
              3
            </a>
            <span
              className="relative inline-flex items-center px-4 py-2 border border-[#E5E7EB] bg-white text-sm font-medium text-[#4B5563]"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0%',
              }}
            >
              ...
            </span>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-[#E5E7EB] bg-white text-sm font-medium text-[#14213D] hover:bg-gray-50"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0%',
              }}
            >
              1284
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-[#E5E7EB] bg-white text-sm font-medium text-[#14213D] hover:bg-gray-50"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0%',
              }}
            >
              1285
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-[#E5E7EB] bg-white text-sm font-medium text-[#4B5563] hover:bg-gray-50"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0%',
              }}
            >
              <span className="sr-only">Next</span>
              Next
              <i className="fa-solid fa-chevron-right ml-1"></i>
            </a>
          </nav>

          {/* Mobile Pagination - Simplified */}
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px order-1 sm:order-2 flex sm:hidden" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center px-2 sm:px-3 py-2 rounded-l-md border border-[#E5E7EB] bg-white text-sm font-medium text-[#4B5563] hover:bg-gray-50"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: 'clamp(14px, 2vw, 16px)',
                lineHeight: 'clamp(16px, 3vw, 20px)',
                letterSpacing: '0%',
              }}
            >
              <span className="sr-only">Previous</span>
              <i className="fa-solid fa-chevron-left mr-1" style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}></i>
              <span className="hidden xs:inline">Previous</span>
            </a>
            <a
              href="#"
              aria-current="page"
              className="z-10 bg-[#14213D] text-white relative inline-flex items-center px-3 py-2 border border-[#14213D] text-sm font-medium"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0%',
              }}
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-3 py-2 border border-[#E5E7EB] bg-white text-sm font-medium text-[#14213D] hover:bg-gray-50"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0%',
              }}
            >
              2
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-3 py-2 border border-[#E5E7EB] bg-white text-sm font-medium text-[#14213D] hover:bg-gray-50"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0%',
              }}
            >
              3
            </a>
            <span
              className="relative inline-flex items-center px-2 py-2 border border-[#E5E7EB] bg-white text-sm font-medium text-[#4B5563]"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0%',
              }}
            >
              ...
            </span>
            <a
              href="#"
              className="relative inline-flex items-center px-3 py-2 border border-[#E5E7EB] bg-white text-sm font-medium text-[#14213D] hover:bg-gray-50"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0%',
              }}
            >
              1285
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 sm:px-3 py-2 rounded-r-md border border-[#E5E7EB] bg-white text-sm font-medium text-[#4B5563] hover:bg-gray-50"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: 'clamp(14px, 2vw, 16px)',
                lineHeight: 'clamp(16px, 3vw, 20px)',
                letterSpacing: '0%',
              }}
            >
              <span className="sr-only">Next</span>
              <span className="hidden xs:inline">Next</span>
              <i className="fa-solid fa-chevron-right ml-1" style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}></i>
            </a>
          </nav>
        </div>
        </div> {/* End of hidden table section */}
      </div>
    </div>
  )
}

export default TopCreatorsSection
