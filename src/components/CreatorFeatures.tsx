'use client'

import React from 'react'

const CreatorFeatures = () => {
  return (
    <section>
      {/* Main Heading */}
      <div className="px-4 sm:px-6 lg:px-12 xl:px-16 pb-16">
        <div className="text-center mb-16 mt-10">
          <h2 style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: 'clamp(24px, 5vw, 36px)',
            lineHeight: 'clamp(28px, 6vw, 40px)',
            letterSpacing: '0%',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#14213D'
          }}>
            Made for Creators Who Want More Than Likes
          </h2>
          <p style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: 'clamp(14px, 2.5vw, 16px)',
            lineHeight: 'clamp(20px, 3.5vw, 24px)',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#14213D99',
            marginTop: '16px'
          }}>
            Transform your passion into profit with tools designed specifically for creators like you.
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-6 lg:space-y-8">
          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-7/12 rounded-2xl overflow-hidden flex flex-col lg:flex-row hover:shadow-lg transition-shadow duration-300" style={{
              background: 'linear-gradient(90deg, #14213D 0%, #1E3A8A 100%)'
            }}>
              <div className="p-8 lg:w-7/12 flex flex-col justify-center">
                <h3 className="mb-4" style={{
                  color: '#FFFFFF',
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: 'clamp(16px, 3vw, 20px)',
                  lineHeight: 'clamp(22px, 4vw, 28px)',
                  letterSpacing: '0%',
                  textTransform: 'uppercase'
                }}>FAST, INCLUSIVE COLLABS WITH BRANDS</h3>
                <p style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 2.5vw, 18px)',
                  lineHeight: 'clamp(20px, 3.5vw, 30px)',
                  letterSpacing: '0%',
                  color: '#FFFFFFCC'
                }}>
                  From nano to mega Influencers, Connect with brands across all industries, AI driven matching, direct brand contact, and control over your contract terms, fast, fun, and flexible.
                </p>
              </div>
              <div className="h-full mx-auto">
                <img 
                  src="/images/influencers/iphone-2.png" 
                  alt="iPhone Interface" 
                  className="h-full object-cover"
                  style={{ padding: '30px 30px 0 30px', width: '350px' }}
                />
              </div>
            </div>
            <div className="lg:w-5/12 bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 relative">
              <div className="mb-4">
                <img 
                  src="/images/influencers/campaigns.svg" 
                  alt="Campaigns Icon" 
                  style={{ 
                    width: 'clamp(36px, 6vw, 48px)', 
                    height: 'clamp(36px, 6vw, 48px)' 
                  }}
                />
              </div>
              <h3 className="mb-4" style={{
                color: '#000000',
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: 'clamp(16px, 3vw, 20px)',
                lineHeight: 'clamp(22px, 4vw, 28px)',
                letterSpacing: '0%',
                textTransform: 'uppercase'
              }}>EFFORTLESSLY MANAGE CAMPAIGNS</h3>
              <p style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: 'clamp(14px, 2.5vw, 18px)',
                lineHeight: 'clamp(20px, 3.5vw, 30px)',
                letterSpacing: '0%',
                color: '#00000099'
              }}>
                Unlock the freedom of adaptable contract terms, automated task reminders and seamless brand connectivity, gain full visibility of your campaigns for a streamlined and efficient workflow that keeps you effortlessly in control.
              </p>
              {/* Dot at right corner */}
              <div style={{
                position: 'absolute',
                top: '25px',
                right: '25px',
                width: '10px',
                height: '10px',
                backgroundColor: '#14213D',
                borderRadius: '50%'
              }}></div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            <div className="lg:w-7/12 rounded-2xl overflow-hidden flex flex-col lg:flex-row hover:shadow-lg transition-shadow duration-300" style={{
              background: 'linear-gradient(90deg, #FACC15 0%, #FCA311 100%)'
            }}>
              <div className="h-full mx-auto">
                <img 
                  src="/images/influencers/iphone-3.png" 
                  alt="iPhone Interface" 
                  className="h-full object-cover"
                  style={{ padding: '30px 30px 0 30px', width: '350px' }}
                />
              </div>
              <div className="p-8 lg:w-7/12 flex flex-col justify-center">
                <h3 className="mb-4" style={{
                  color: '#FFFFFF',
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: 'clamp(16px, 3vw, 20px)',
                  lineHeight: 'clamp(22px, 4vw, 28px)',
                  letterSpacing: '0%',
                  textTransform: 'uppercase'
                }}>BOOST IMPACT WITH SMART METRICS</h3>
                <p style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 2.5vw, 18px)',
                  lineHeight: 'clamp(20px, 3.5vw, 30px)',
                  letterSpacing: '0%',
                  color: '#FFFFFFCC'
                }}>
                  Track performance effortlessly across social media with credible data. Leverage AI powered insights to enhance your brand reach and make informed partnership decisions
                </p>
              </div>
            </div>
            <div className="lg:w-5/12 bg-[#FFFFFF] rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 relative">
              <div className="mb-4">
                <img 
                  src="/images/influencers/payments.svg" 
                  alt="Payments Icon" 
                  style={{ 
                    width: 'clamp(36px, 6vw, 48px)', 
                    height: 'clamp(36px, 6vw, 48px)' 
                  }}
                />
              </div>
              <h3 className="mb-4" style={{
                color: '#000000',
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: 'clamp(16px, 3vw, 20px)',
                lineHeight: 'clamp(22px, 4vw, 28px)',
                letterSpacing: '0%',
                textTransform: 'uppercase'
              }}>TRANSPARENT AND SECURE PAYMENTS</h3>
              <p style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: 'clamp(14px, 2.5vw, 18px)',
                lineHeight: 'clamp(20px, 3.5vw, 30px)',
                letterSpacing: '0%',
                color: '#00000099'
              }}>
                Fast setup, secure payments, and clear terms, manage and negotiate with creators, set payment schedule for up to 90 days and only pay when set milestones are met, Trust and transparency, easy peasy!
              </p>
              {/* Orange dot at right corner */}
              <div style={{
                position: 'absolute',
                top: '25px',
                right: '25px',
                width: '10px',
                height: '10px',
                backgroundColor: '#FCA311',
                borderRadius: '50%'
              }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* What Do We Offer Section */}
      <div className="py-16" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: 'clamp(24px, 5vw, 36px)',
              lineHeight: 'clamp(28px, 6vw, 40px)',
              letterSpacing: '0%',
              textAlign: 'center',
              textTransform: 'uppercase',
              color: '#14213D',
              marginBottom: '16px'
            }}>
              WHAT DO WE OFFER?
            </h2>
            <p style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: 'clamp(16px, 3vw, 20px)',
              lineHeight: 'clamp(24px, 4vw, 28px)',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#14213DCC'
            }}>
              Powerful tools and features designed to accelerate your creator journey and maximize your earning potential.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI-Powered Discovery Card */}
            <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 relative mt-8" style={{ border: '1px solid #F3F4F6' }}>
              <img 
                src="/images/influencers/offer/offer-1.svg" 
                alt="AI-Powered Discovery Icon" 
                className="absolute" 
                style={{ 
                  top: 'clamp(-20px, -3vw, -30px)', 
                  left: 'clamp(16px, 3vw, 24px)', 
                  width: 'clamp(40px, 6vw, 64px)', 
                  height: 'clamp(40px, 6vw, 64px)' 
                }}
              />
              <h3 className="font-semibold text-gray-900 mb-3 mt-6" style={{
                fontFamily: 'Inter',
                fontSize: 'clamp(16px, 3vw, 18px)',
                lineHeight: 'clamp(22px, 4vw, 28px)'
              }}>AI-Powered Discovery</h3>
              <p style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 26px)',
                letterSpacing: '0%',
                color: '#4B5563',
                marginBottom: '16px'
              }}>Get matched with campaigns that fit your audience and content style perfectly.</p>
              <ul className="space-y-2">
                <li className="flex items-center" style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  lineHeight: 'clamp(16px, 3vw, 20px)',
                  letterSpacing: '0%',
                  color: '#374151'
                }}>
                  <svg className="mr-2" fill="#FCA311" viewBox="0 0 20 20" style={{ 
                    width: 'clamp(14px, 2.5vw, 16px)', 
                    height: 'clamp(14px, 2.5vw, 16px)' 
                  }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Smart audience analysis
                </li>
                <li className="flex items-center" style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  lineHeight: 'clamp(16px, 3vw, 20px)',
                  letterSpacing: '0%',
                  color: '#374151'
                }}>
                  <svg className="mr-2" fill="#FCA311" viewBox="0 0 20 20" style={{ 
                    width: 'clamp(14px, 2.5vw, 16px)', 
                    height: 'clamp(14px, 2.5vw, 16px)' 
                  }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Content style matching
                </li>
                <li className="flex items-center" style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  lineHeight: 'clamp(16px, 3vw, 20px)',
                  letterSpacing: '0%',
                  color: '#374151'
                }}>
                  <svg className="mr-2" fill="#FCA311" viewBox="0 0 20 20" style={{ 
                    width: 'clamp(14px, 2.5vw, 16px)', 
                    height: 'clamp(14px, 2.5vw, 16px)' 
                  }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Brand compatibility scoring
                </li>
              </ul>
            </div>

            {/* Boost Your Earnings Card */}
            <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 relative mt-8" style={{ border: '1px solid #F3F4F6' }}>
              <img 
                src="/images/influencers/offer/offer-2.svg" 
                alt="Boost Your Earnings Icon" 
                className="absolute" 
                style={{ 
                  top: 'clamp(-20px, -3vw, -30px)', 
                  left: 'clamp(16px, 3vw, 24px)', 
                  width: 'clamp(40px, 6vw, 64px)', 
                  height: 'clamp(40px, 6vw, 64px)' 
                }}
              />
              <h3 className="font-semibold text-gray-900 mb-3 mt-6" style={{
                fontFamily: 'Inter',
                fontSize: 'clamp(16px, 3vw, 18px)',
                lineHeight: 'clamp(22px, 4vw, 28px)'
              }}>Boost Your Earnings</h3>
              <p className="text-gray-600 mb-4" style={{
                fontFamily: 'Inter',
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)'
              }}>Get paid for content you already create with fair, transparent pricing.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="mr-2" fill="#FCA311" viewBox="0 0 20 20" style={{ 
                    width: 'clamp(14px, 2.5vw, 16px)', 
                    height: 'clamp(14px, 2.5vw, 16px)' 
                  }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Instant payment release
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="mr-2" fill="#FCA311" viewBox="0 0 20 20" style={{ 
                    width: 'clamp(14px, 2.5vw, 16px)', 
                    height: 'clamp(14px, 2.5vw, 16px)' 
                  }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Milestone-based security
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="mr-2" fill="#FCA311" viewBox="0 0 20 20" style={{ 
                    width: 'clamp(14px, 2.5vw, 16px)', 
                    height: 'clamp(14px, 2.5vw, 16px)' 
                  }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Zero hidden fees
                </li>
              </ul>
            </div>

            {/* Actionable Insights Card */}
            <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 relative mt-8" style={{ border: '1px solid #F3F4F6' }}>
              <img 
                src="/images/influencers/offer/offer-3.svg" 
                alt="Actionable Insights Icon" 
                className="absolute" 
                style={{ 
                  top: 'clamp(-20px, -3vw, -30px)', 
                  left: 'clamp(16px, 3vw, 24px)', 
                  width: 'clamp(40px, 6vw, 64px)', 
                  height: 'clamp(40px, 6vw, 64px)' 
                }}
              />
              <h3 className="font-semibold text-gray-900 mb-3 mt-6" style={{
                fontFamily: 'Inter',
                fontSize: 'clamp(16px, 3vw, 18px)',
                lineHeight: 'clamp(22px, 4vw, 28px)'
              }}>Actionable Insights</h3>
              <p className="text-gray-600 mb-4" style={{
                fontFamily: 'Inter',
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)'
              }}>Learn what works and grow smarter with detailed performance analytics.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="mr-2" fill="#FCA311" viewBox="0 0 20 20" style={{ 
                    width: 'clamp(14px, 2.5vw, 16px)', 
                    height: 'clamp(14px, 2.5vw, 16px)' 
                  }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real-time performance tracking
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="mr-2" fill="#FCA311" viewBox="0 0 20 20" style={{ 
                    width: 'clamp(14px, 2.5vw, 16px)', 
                    height: 'clamp(14px, 2.5vw, 16px)' 
                  }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Audience engagement metrics
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="mr-2" fill="#FCA311" viewBox="0 0 20 20" style={{ 
                    width: 'clamp(14px, 2.5vw, 16px)', 
                    height: 'clamp(14px, 2.5vw, 16px)' 
                  }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Growth recommendations
                </li>
              </ul>
            </div>

            {/* For Every Creator Card */}
            <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 relative mt-8" style={{ border: '1px solid #F3F4F6' }}>
              <img 
                src="/images/influencers/offer/offer-4.svg" 
                alt="For Every Creator Icon" 
                className="absolute" 
                style={{ 
                  top: 'clamp(-20px, -3vw, -30px)', 
                  left: 'clamp(16px, 3vw, 24px)', 
                  width: 'clamp(40px, 6vw, 64px)', 
                  height: 'clamp(40px, 6vw, 64px)' 
                }}
              />
              <h3 className="font-semibold text-gray-900 mb-3 mt-6" style={{
                fontFamily: 'Inter',
                fontSize: 'clamp(16px, 3vw, 18px)',
                lineHeight: 'clamp(22px, 4vw, 28px)'
              }}>For Every Creator</h3>
              <p className="text-gray-600 mb-4" style={{
                fontFamily: 'Inter',
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)'
              }}>Whether nano or mega, there&apos;s a place for you in our creator ecosystem.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="mr-2" fill="#FCA311" viewBox="0 0 20 20" style={{ 
                    width: 'clamp(14px, 2.5vw, 16px)', 
                    height: 'clamp(14px, 2.5vw, 16px)' 
                  }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Nano to mega influencers
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="mr-2" fill="#FCA311" viewBox="0 0 20 20" style={{ 
                    width: 'clamp(14px, 2.5vw, 16px)', 
                    height: 'clamp(14px, 2.5vw, 16px)' 
                  }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All content categories
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="mr-2" fill="#FCA311" viewBox="0 0 20 20" style={{ 
                    width: 'clamp(14px, 2.5vw, 16px)', 
                    height: 'clamp(14px, 2.5vw, 16px)' 
                  }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Multi-platform support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Earn in 3 Simple Steps Section */}
      <div className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: 'clamp(24px, 5vw, 36px)',
              lineHeight: 'clamp(28px, 6vw, 40px)',
              letterSpacing: '0%',
              textAlign: 'center',
              textTransform: 'uppercase',
              color: '#14213D',
              marginBottom: '16px'
            }}>
              EARN IN 3 SIMPLE STEPS
            </h2>
            <p style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: 'clamp(16px, 3vw, 20px)',
              lineHeight: 'clamp(24px, 4vw, 28px)',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#14213DCC'
            }}>
              Start monetizing your content today with our simple, creator-friendly process.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute h-0 border-t-2 border-dashed border-gray-300" style={{ 
              width: '50%', 
              left: '25%', 
              top: 'clamp(36px, 6vw, 48px)' 
            }}></div>
            
            {/* Step 1 */}
            <div className="text-center relative z-10">
              <div className="rounded-full flex items-center justify-center mx-auto mb-6" style={{ 
                backgroundColor: '#FACC15',
                width: 'clamp(72px, 12vw, 96px)',
                height: 'clamp(72px, 12vw, 96px)'
              }}>
                <img 
                  src="/images/influencers/steps-1.svg" 
                  alt="Download & Create Profile" 
                  style={{ 
                    width: 'clamp(72px, 12vw, 96px)', 
                    height: 'clamp(72px, 12vw, 96px)' 
                  }}
                />
              </div>
              <h3 style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: 'clamp(16px, 3vw, 20px)',
                lineHeight: 'clamp(22px, 4vw, 28px)',
                letterSpacing: '0%',
                color: '#14213D',
                marginBottom: '12px'
              }}>
                Download & Create Profile
              </h3>
              <p style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)',
                letterSpacing: '0%',
                color: '#14213DCC'
              }}>
                Download the app and set up your creator profile. Showcase your content style, audience, and interests.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <div className="rounded-full flex items-center justify-center mx-auto mb-6" style={{ 
                backgroundColor: '#14213D',
                width: 'clamp(72px, 12vw, 96px)',
                height: 'clamp(72px, 12vw, 96px)'
              }}>
                <img 
                  src="/images/influencers/steps-2.svg" 
                  alt="Get Campaign Matches" 
                  style={{ 
                    width: 'clamp(72px, 12vw, 96px)', 
                    height: 'clamp(72px, 12vw, 96px)' 
                  }}
                />
              </div>
              <h3 style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: 'clamp(16px, 3vw, 20px)',
                lineHeight: 'clamp(22px, 4vw, 28px)',
                letterSpacing: '0%',
                color: '#14213D',
                marginBottom: '12px'
              }}>
                Get Campaign Matches
              </h3>
              <p style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)',
                letterSpacing: '0%',
                color: '#14213DCC'
              }}>
                Our AI matches you with brands that align with your content and audience. Receive direct campaign invites.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <div className="rounded-full flex items-center justify-center mx-auto mb-6" style={{ 
                backgroundColor: '#FACC15',
                width: 'clamp(72px, 12vw, 96px)',
                height: 'clamp(72px, 12vw, 96px)'
              }}>
                <img 
                  src="/images/influencers/steps-3.svg" 
                  alt="Create, Deliver & Get Paid" 
                  style={{ 
                    width: 'clamp(72px, 12vw, 96px)', 
                    height: 'clamp(72px, 12vw, 96px)' 
                  }}
                />
              </div>
              <h3 style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: 'clamp(16px, 3vw, 20px)',
                lineHeight: 'clamp(22px, 4vw, 28px)',
                letterSpacing: '0%',
                color: '#14213D',
                marginBottom: '12px'
              }}>
                Create, Deliver & Get Paid
              </h3>
              <p style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)',
                letterSpacing: '0%',
                color: '#14213DCC'
              }}>
                Create amazing content, deliver on time, and get paid instantly. Build long-term relationships with brands.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* App Download Section */}
      <div 
        className="relative py-16 sm:py-20 lg:py-24"
        style={{
          backgroundImage: 'url(/images/influencers/apps.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: '#14213DDE' }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-16 text-center">
          <h2 
            className="text-white font-bold mb-6"
            style={{
              fontFamily: 'Inter',
              fontSize: 'clamp(28px, 6vw, 48px)',
              lineHeight: 'clamp(36px, 7vw, 56px)',
              letterSpacing: '0%'
            }}
          >
            Start Turning Influence Into Income Today
          </h2>
          
          <p 
            className="text-gray-300 mb-8"
            style={{
              fontFamily: 'Inter',
              fontSize: 'clamp(16px, 3vw, 18px)',
              lineHeight: 'clamp(24px, 4vw, 28px)',
              letterSpacing: '0%'
            }}
          >
            Download the app and unlock your next brand collaboration. Join thousands of creators to earn with Swaykart.
          </p>
          
          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Google Play Button */}
            <a 
              href="https://play.google.com/store/apps/details?id=com.swaykart.app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white rounded-lg transition-all duration-200 hover:shadow-lg"
              style={{ 
                backgroundColor: '#FCA311',
                minWidth: 'clamp(140px, 20vw, 180px)',
                minHeight: 'clamp(40px, 6vw, 56px)',
                padding: 'clamp(8px, 1.5vw, 16px) clamp(16px, 2.5vw, 24px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E6930F'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FCA311'
              }}
            >
              <svg className="mr-3" viewBox="0 0 24 24" fill="currentColor" style={{ width: 'clamp(20px, 3vw, 24px)', height: 'clamp(20px, 3vw, 24px)' }}>
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 'clamp(16px, 2.5vw, 18px)' }}>Get it on</div>
                <div style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', fontWeight: 600, lineHeight: 'clamp(16px, 3vw, 20px)' }}>Google Play</div>
              </div>
            </a>
            
            {/* App Store Button */}
            <button 
              className="flex items-center bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              style={{ 
                minWidth: 'clamp(140px, 20vw, 180px)',
                minHeight: 'clamp(40px, 6vw, 56px)',
                padding: 'clamp(8px, 1.5vw, 16px) clamp(16px, 2.5vw, 24px)'
              }}
            >
              <svg className="mr-3" viewBox="0 0 24 24" fill="currentColor" style={{ width: 'clamp(20px, 3vw, 24px)', height: 'clamp(20px, 3vw, 24px)' }}>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 'clamp(16px, 2.5vw, 18px)' }}>Download on the</div>
                <div style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', fontWeight: 600, lineHeight: 'clamp(16px, 3vw, 20px)' }}>App Store</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreatorFeatures