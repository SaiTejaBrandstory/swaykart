'use client'
import React, { useState } from 'react'

const MeetOurInfluencers = () => {
  const [searchQuery, setSearchQuery] = useState('')

  // Sample influencer data - you can replace with actual data
  const influencers = [
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

  const handleSearch = () => {
    // Handle search functionality
    console.log('Searching for:', searchQuery)
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
                {[...influencers.slice(0, 4), ...influencers.slice(0, 4), ...influencers.slice(0, 4), ...influencers.slice(0, 4)].map((influencer, index) => (
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
                {[...influencers.slice(4, 8), ...influencers.slice(4, 8), ...influencers.slice(4, 8), ...influencers.slice(4, 8)].map((influencer, index) => (
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
                {[...influencers.slice(8, 12), ...influencers.slice(8, 12), ...influencers.slice(8, 12), ...influencers.slice(8, 12)].map((influencer, index) => (
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
                {[...influencers.slice(12, 16), ...influencers.slice(12, 16), ...influencers.slice(12, 16), ...influencers.slice(12, 16)].map((influencer, index) => (
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
              {/* Search Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                                 <input
                   type="text"
                   placeholder="Search influencers"
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full pl-12 pr-4 py-4 rounded-2xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                   style={{ 
                     fontSize: 'clamp(14px, 2.5vw, 18px)',
                     backgroundColor: '#FFFFFF',
                     border: '1px solid #E5E7EB'
                   }}
                 />
              </div>

                             {/* Search Button */}
               <div className="flex justify-center">
                 <button
                   onClick={handleSearch}
                   className="py-4 px-6 hover:opacity-90 transition-opacity duration-200"
                   style={{ 
                     borderRadius: '6px',
                     fontFamily: 'Inter',
                     fontWeight: 600,
                     fontSize: 'clamp(14px, 2.5vw, 18px)',
                     lineHeight: '100%',
                     letterSpacing: '0%',
                     textAlign: 'center',
                     color: '#FFFFFF',
                     backgroundColor: '#FCA311'
                   }}
                 >
                   Search Influencer
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
