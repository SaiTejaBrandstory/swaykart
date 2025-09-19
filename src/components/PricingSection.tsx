'use client'

import React from 'react'

const PricingSection = () => {
  return (
    <div>
      {/* Pricing Section with Grid Background */}
      <div className="relative pt-20 pb-16 lg:py-20" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: '60px 30px',
        backgroundColor: '#ffffff'
      }}>
        {/* Cloud fade effect on all sides */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 h-10 sm:h-16 md:h-20" style={{ 
            zIndex: 10,
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 15%, rgba(255, 255, 255, 0.8) 35%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0.2) 80%, rgba(255, 255, 255, 0) 100%)'
          }}></div>
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-16 md:h-20" style={{ 
            zIndex: 10,
            background: 'linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 15%, rgba(255, 255, 255, 0.8) 35%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0.2) 80%, rgba(255, 255, 255, 0) 100%)'
          }}></div>
          {/* Left fade */}
          <div className="absolute top-0 bottom-0 left-0 w-10 sm:w-16 md:w-20" style={{ 
            zIndex: 10,
            background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 15%, rgba(255, 255, 255, 0.8) 35%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0.2) 80%, rgba(255, 255, 255, 0) 100%)'
          }}></div>
          {/* Right fade */}
          <div className="absolute top-0 bottom-0 right-0 w-10 sm:w-16 md:w-20" style={{ 
            zIndex: 10,
            background: 'linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 15%, rgba(255, 255, 255, 0.8) 35%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0.2) 80%, rgba(255, 255, 255, 0) 100%)'
          }}></div>
        </div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16" style={{ position: 'relative', zIndex: 20 }}>
          {/* Header Banner */}
          <div className="text-center mb-16">
            <div className="inline-block rounded-lg">
              <h1 className="mb-6" style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: 'clamp(32px, 6vw, 54px)',
                lineHeight: 'clamp(40px, 7vw, 64px)',
                letterSpacing: '0%',
                textAlign: 'center',
                textTransform: 'uppercase',
                color: '#14213D'
              }}>
                <div>SIMPLE, TRANSPARENT <span style={{ color: '#FCA311' }}>PLANS</span></div>
                <div>FOR EVERY BRAND.</div>
              </h1>
              <p className="mb-8" style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: 'clamp(16px, 3vw, 20px)',
                lineHeight: 'clamp(22px, 4vw, 28px)',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#4B5563'
              }}>
                Start free, grow with flexible packages designed for MSMEs, startups, and enterprises.
              </p>
              <button className="px-8 py-4 rounded-md font-semibold transition-colors duration-200" style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: 'clamp(16px, 3vw, 18px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#FFFFFF',
                backgroundColor: '#FCA311',
                borderRadius: '6px'
              }}>
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {/* Free Trial Card */}
            <div className="bg-white p-6 transition-shadow duration-300" style={{
              border: '1px solid #E5E7EB',
              borderRadius: '16px',
              boxShadow: '0px 1px 2px 0px #0000000D'
            }}>
              <div className="space-y-4">
                <h3 className="mb-2" style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: 'clamp(16px, 3vw, 20px)',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#14213D'
                }}>
                  Free Trial
                </h3>
                
                <p className="mb-4" style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  lineHeight: 'clamp(14px, 2.5vw, 16px)',
                  letterSpacing: '0%',
                  color: '#6B7280'
                }}>
                  For brands testing the waters of influencer marketing.
                </p>
              </div>

              <button className="w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 mt-6 mb-6" style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#14213D',
                backgroundColor: '#FFFFFF',
                border: '1px solid #14213D'
              }}>
                Start Free Trial
              </button>

              <div>
                <h4 className="mb-4" style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  lineHeight: 'clamp(20px, 3.5vw, 24px)',
                  color: '#14213D'
                }}>
                  Includes:
                </h4>
                
                <ul className="space-y-3">
                  {['1 Campaign', 'View 5 Influencers', 'Hire 1 Influencer', 'In-app messaging', 'In-app payments', 'Basic reports'].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="#FCA311" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        fontSize: 'clamp(14px, 2.5vw, 16px)',
                        lineHeight: 'clamp(20px, 3.5vw, 24px)',
                        color: '#14213D'
                      }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* MSME Package Card */}
            <div className="bg-white px-6 py-8 transition-shadow duration-300" style={{
              border: '2px solid #14213D',
              borderRadius: '16px',
              boxShadow: '0px 1px 2px 0px #0000000D',
              transform: 'scaleY(1.05)'
            }}>
              <div className="space-y-4">
                <h3 className="mb-2" style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: 'clamp(16px, 3vw, 20px)',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#14213D'
                }}>
                  MSME Package
                </h3>
                
                <p className="mb-4" style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  lineHeight: 'clamp(14px, 2.5vw, 16px)',
                  letterSpacing: '0%',
                  color: '#6B7280'
                }}>
                  Ideal for growing brands ready to scale their impact.
                </p>

                <div className="mb-6">
                  <span style={{
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    fontSize: 'clamp(28px, 6vw, 36px)',
                    lineHeight: 'clamp(32px, 7vw, 40px)',
                    letterSpacing: '0%',
                    color: '#14213D'
                  }}>
                    ₹6,000
                  </span>
                  <span style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    lineHeight: 'clamp(20px, 3.5vw, 24px)',
                    letterSpacing: '0%',
                    color: '#6B7280'
                  }}>
                    / month
                  </span>
                </div>
              </div>

              <button className="w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 mt-6 mb-6" style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#FFFFFF',
                backgroundColor: '#14213D',
                border: '1px solid #E5E7EB'
              }}>
                Get MSME Package
              </button>

              <div>
                <h4 className="mb-4" style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  lineHeight: 'clamp(20px, 3.5vw, 24px)',
                  color: '#14213D'
                }}>
                  Includes:
                </h4>
                
                <ul className="space-y-3">
                  {['2 Campaigns', 'View 12 Influencers', 'Hire 4 Influencers', 'AI Recommendations'].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="#FCA311" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        fontSize: 'clamp(14px, 2.5vw, 16px)',
                        lineHeight: 'clamp(20px, 3.5vw, 24px)',
                        color: '#14213D'
                      }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mid Package Card */}
            <div className="bg-white p-6 transition-shadow duration-300" style={{
              border: '1px solid #E5E7EB',
              borderRadius: '16px',
              boxShadow: '0px 1px 2px 0px #0000000D'
            }}>
              <div className="space-y-4">
                <h3 className="mb-2" style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: 'clamp(16px, 3vw, 20px)',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#14213D'
                }}>
                  Mid Package
                </h3>
                
                <p className="mb-4" style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  lineHeight: 'clamp(14px, 2.5vw, 16px)',
                  letterSpacing: '0%',
                  color: '#6B7280'
                }}>
                  Advanced tools for data-driven campaign optimization.
                </p>

                <div className="mb-6">
                  <span style={{
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    fontSize: 'clamp(28px, 6vw, 36px)',
                    lineHeight: 'clamp(32px, 7vw, 40px)',
                    letterSpacing: '0%',
                    color: '#14213D'
                  }}>
                    ₹25,000
                  </span>
                  <span style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    lineHeight: 'clamp(20px, 3.5vw, 24px)',
                    letterSpacing: '0%',
                    color: '#6B7280'
                  }}>
                    / month
                  </span>
                </div>
              </div>

              <button className="w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 mt-6 mb-6" style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#14213D',
                backgroundColor: '#FFFFFF',
                border: '1px solid #14213D'
              }}>
                Choose Mid Package
              </button>

              <div>
                <h4 className="mb-4" style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  lineHeight: 'clamp(20px, 3.5vw, 24px)',
                  color: '#14213D'
                }}>
                  Includes:
                </h4>
                
                <ul className="space-y-3">
                  {['10 Campaigns', 'View 60 Influencers', 'Hire 25 Influencers', 'Advanced Reporting', 'Click Tracking', 'Report Downloads'].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="#FCA311" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        fontSize: 'clamp(14px, 2.5vw, 16px)',
                        lineHeight: 'clamp(20px, 3.5vw, 24px)',
                        color: '#14213D'
                      }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Enterprise Card */}
            <div className="p-6 transition-shadow duration-300" style={{
              backgroundColor: '#FFF8ED',
              borderRadius: '16px',
              boxShadow: '0px 1px 2px 0px #0000000D'
            }}>
              <div className="space-y-4">
                <h3 className="mb-2" style={{
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  fontSize: 'clamp(18px, 3vw, 20px)',
                  lineHeight: 'clamp(22px, 4vw, 28px)',
                  color: '#14213D'
                }}>
                  Enterprise
                </h3>
                
                <p className="mb-4" style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  lineHeight: 'clamp(14px, 2.5vw, 16px)',
                  letterSpacing: '0%',
                  color: '#6B7280'
                }}>
                  Unlimited scale with dedicated support and custom solutions.
                </p>

                <div>
                  <h4 className="mb-2" style={{
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    fontSize: 'clamp(28px, 6vw, 36px)',
                    lineHeight: 'clamp(32px, 7vw, 40px)',
                    letterSpacing: '0%',
                    color: '#14213D'
                  }}>
                    Custom
                  </h4>
                  <p className="mb-6" style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    lineHeight: 'clamp(14px, 2.5vw, 16px)',
                    letterSpacing: '0%',
                    color: '#6B7280'
                  }}>
                    Let&apos;s talk about your needs.
                  </p>
                </div>

                <button className="w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 mt-6 mb-6" style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#14213D',
                  backgroundColor: '#FFF8ED',
                  border: '1px solid #14213D'
                }}>
                  Contact Sales
                </button>

                <div>
                  <h4 className="mb-4" style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    lineHeight: 'clamp(20px, 3.5vw, 24px)',
                    color: '#14213D'
                  }}>
                    Includes:
                  </h4>
                  
                  <ul className="space-y-3">
                    {['Unlimited Campaigns', 'Unlimited Influencers', 'Sentiment Analysis', 'Dedicated Account manager'].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center mt-0.5">
                          <svg className="w-4 h-4" fill="none" stroke="#FCA311" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          fontSize: 'clamp(14px, 2.5vw, 16px)',
                          lineHeight: 'clamp(20px, 3.5vw, 24px)',
                          color: '#14213D'
                        }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription End Section - Clean Background */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-8">
            <h2 className="mb-4" style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: 'clamp(24px, 4vw, 32px)',
              lineHeight: 'clamp(32px, 5vw, 40px)',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#14213D'
            }}>
              What Happens When Your Subscription Ends?
            </h2>
            <p style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: 'clamp(16px, 3vw, 18px)',
              lineHeight: 'clamp(24px, 4vw, 28px)',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#6B7280'
            }}>
              We keep your data safe and accessible for 3 months after your plan expires.
            </p>
          </div>

          <div>
            <div className="bg-white rounded-lg p-8 shadow-sm" style={{
              border: '1px solid #E5E7EB',
              boxShadow: '0px 1px 2px 0px #0000000D'
            }}>
              <h3 className="mb-6" style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: 'clamp(18px, 3vw, 20px)',
                lineHeight: 'clamp(24px, 4vw, 28px)',
                letterSpacing: '0%',
                color: '#14213D'
              }}>
                During this period, you&apos;ll have read-only access to:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Previous Messaging */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="#14213D" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <span style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    lineHeight: 'clamp(20px, 3.5vw, 24px)',
                    letterSpacing: '0%',
                    color: '#14213D'
                  }}>
                    Previous Messaging
                  </span>
                </div>

                {/* Previous Payments */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="#14213D" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <span style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    lineHeight: 'clamp(20px, 3.5vw, 24px)',
                    letterSpacing: '0%',
                    color: '#14213D'
                  }}>
                    Previous Payments
                  </span>
                </div>

                {/* Previous Reports */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="#14213D" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    lineHeight: 'clamp(20px, 3.5vw, 24px)',
                    letterSpacing: '0%',
                    color: '#14213D'
                  }}>
                    Previous Reports
                  </span>
                </div>
              </div>

              {/* Warning Box */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="#DC2626" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    lineHeight: 'clamp(20px, 3.5vw, 24px)',
                    letterSpacing: '0%',
                    color: '#DC2626'
                  }}>
                    Valid for next 3 months only
                  </p>
                  <p style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    lineHeight: 'clamp(18px, 3vw, 20px)',
                    letterSpacing: '0%',
                    color: '#DC2626'
                  }}>
                    Account will be deactivated if not upgraded within this period
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Comparison Section */}
      <div className="py-20" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-12">
            <h2 style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: 'clamp(24px, 4vw, 32px)',
              lineHeight: 'clamp(32px, 5vw, 40px)',
              letterSpacing: '0%',
              textAlign: 'center',
              textTransform: 'uppercase',
              color: '#14213D'
            }}>
              Compare All Features
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ backgroundColor: '#FFFFFF' }}>
                  <th style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    lineHeight: 'clamp(20px, 3.5vw, 24px)',
                    letterSpacing: '0%',
                    textAlign: 'left',
                    color: '#14213D',
                    padding: '16px',
                    borderBottom: '1px solid #E5E7EB'
                  }}>
                    Features
                  </th>
                  <th style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    lineHeight: 'clamp(20px, 3.5vw, 24px)',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    color: '#14213D',
                    padding: '16px',
                    borderBottom: '1px solid #E5E7EB'
                  }}>
                    Free Trial
                  </th>
                  <th style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    lineHeight: 'clamp(20px, 3.5vw, 24px)',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    color: '#FFFFFF',
                    backgroundColor: '#14213D',
                    padding: '16px',
                    borderBottom: '1px solid #E5E7EB'
                  }}>
                    MSME
                  </th>
                  <th style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    lineHeight: 'clamp(20px, 3.5vw, 24px)',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    color: '#14213D',
                    padding: '16px',
                    borderBottom: '1px solid #E5E7EB'
                  }}>
                    Mid
                  </th>
                  <th style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    lineHeight: 'clamp(20px, 3.5vw, 24px)',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    color: '#14213D',
                    padding: '16px',
                    borderBottom: '1px solid #E5E7EB'
                  }}>
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Core Platform Section */}
                <tr>
                  <td colSpan={5} style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: 'clamp(16px, 3vw, 18px)',
                    lineHeight: 'clamp(24px, 4vw, 28px)',
                    letterSpacing: '0%',
                    textAlign: 'left',
                    color: '#14213D',
                    backgroundColor: '#FFFFFF',
                    padding: '16px',
                    borderBottom: '1px solid #E5E7EB'
                  }}>
                    Core Platform
                  </td>
                </tr>
                {[
                  'In-App Messaging',
                  'In-App Payment',
                  'In-App Contract Management',
                  'AI Recommendations'
                ].map((feature, index) => (
                  <tr key={index}>
                    <td style={{
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      fontSize: 'clamp(14px, 2.5vw, 16px)',
                      lineHeight: 'clamp(20px, 3.5vw, 24px)',
                      letterSpacing: '0%',
                      textAlign: 'left',
                      color: '#14213D',
                      backgroundColor: '#FFFFFF',
                      padding: '16px',
                      borderBottom: '1px solid #E5E7EB'
                    }}>
                      {feature}
                    </td>
                    {['Free Trial', 'MSME', 'Mid', 'Enterprise'].map((plan, planIndex) => (
                      <td key={planIndex} style={{
                        textAlign: 'center',
                        padding: '16px',
                        borderBottom: '1px solid #E5E7EB',
                        backgroundColor: planIndex === 1 ? '#14213D0D' : '#FFFFFF'
                      }}>
                        <span style={{ color: '#10B981', fontSize: '18px', fontWeight: 'bold' }}>✓</span>
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Reporting & Analytics Section */}
                <tr>
                  <td colSpan={5} style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: 'clamp(16px, 3vw, 18px)',
                    lineHeight: 'clamp(24px, 4vw, 28px)',
                    letterSpacing: '0%',
                    textAlign: 'left',
                    color: '#14213D',
                    backgroundColor: '#FFFFFF',
                    padding: '16px',
                    borderBottom: '1px solid #E5E7EB'
                  }}>
                    Reporting & Analytics
                  </td>
                </tr>
                {[
                  { name: 'Report – Vanity Metric', availability: [true, true, true, true] },
                  { name: 'Click Tracking', availability: [false, true, true, true] },
                  { name: 'Report – Deep Tracking', availability: [false, false, true, true] },
                  { name: 'Report – Cost Analysis', availability: [false, false, true, true] },
                  { name: 'Report – Download', availability: [false, true, true, true] },
                  { name: 'Report – Sentiment Analysis', availability: [false, false, false, true] }
                ].map((feature, index) => (
                  <tr key={index}>
                    <td style={{
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      fontSize: 'clamp(14px, 2.5vw, 16px)',
                      lineHeight: 'clamp(20px, 3.5vw, 24px)',
                      letterSpacing: '0%',
                      textAlign: 'left',
                      color: '#14213D',
                      backgroundColor: '#FFFFFF',
                      padding: '16px',
                      borderBottom: '1px solid #E5E7EB'
                    }}>
                      {feature.name}
                    </td>
                    {feature.availability.map((available, planIndex) => (
                      <td key={planIndex} style={{
                        textAlign: 'center',
                        padding: '16px',
                        borderBottom: '1px solid #E5E7EB',
                        backgroundColor: planIndex === 1 ? '#14213D0D' : '#FFFFFF'
                      }}>
                        <span style={{ 
                          color: available ? '#10B981' : '#EF4444', 
                          fontSize: '18px', 
                          fontWeight: 'bold' 
                        }}>
                          {available ? '✓' : '✗'}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingSection