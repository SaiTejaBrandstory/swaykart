'use client'
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-24" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 30px',
          backgroundColor: '#ffffff'
        }}>
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: 'clamp(32px, 4vw, 54px)',
                lineHeight: 'clamp(40px, 5vw, 60px)',
                color: '#14213D'
              }}>
                About Us
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8" style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: 'clamp(16px, 2vw, 20px)',
                lineHeight: 'clamp(24px, 3vw, 30px)'
              }}>
                Building the future of influencer marketing through technology and transparency
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#FAFAFA' }}>
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  color: '#14213D'
                }}>
                  Vision
                </h2>
                <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed text-center" style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: 'clamp(16px, 2vw, 18px)',
                lineHeight: 'clamp(24px, 3vw, 28px)'
              }}>
                Swaykart was born out of a passion for solving challenges in the influencer marketing space. Founders Nidhi Nanda and Akshay Anand, with their combined experience of over 20 years in tech and marketing, recognized a key issue: the lack of accessibility, accountability, and fair opportunities in influencer campaigns, especially for small to mid-level brands.
              </p>
            </div>
          </div>
        </section>

        {/* Origin Story Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  color: '#14213D'
                }}>
                  Origin Story
                </h2>
                <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed text-center" style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: 'clamp(16px, 2vw, 18px)',
                lineHeight: 'clamp(24px, 3vw, 28px)'
              }}>
                Having witnessed a friend&apos;s struggle to promote her brand due to unreliable influencers and the high costs of marketing agencies, Akshay and Nidhi were inspired to create a tech-driven solution. Leveraging AI and data, Swaykart bridges the gap between brands and influencers by providing a platform that ensures trust, transparency, and effective campaign management.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#FAFAFA' }}>
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  color: '#14213D'
                }}>
                  Mission
                </h2>
                <div className="w-16 h-1 bg-green-500 mx-auto rounded-full"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed text-center" style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: 'clamp(16px, 2vw, 18px)',
                lineHeight: 'clamp(24px, 3vw, 28px)'
              }}>
                Our mission extends beyond efficiency; we&apos;re driven by a desire to create a fair and transparent marketplace for both brands and micro-influencers. With innovations like AI engines, data analytics, and LLM models, Swaykart offers equal opportunities for MSMEs and ensures fair compensation for micro-influencers.
              </p>
            </div>
          </div>
        </section>

        {/* Innovation Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  color: '#14213D'
                }}>
                  Innovation Meets Purpose
                </h2>
                <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed text-center" style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: 'clamp(16px, 2vw, 18px)',
                lineHeight: 'clamp(24px, 3vw, 28px)'
              }}>
                In a competitive market, Swaykart&apos;s ability to pivot and innovate keeps us at the forefront, driven by a commitment to combat exploitation and streamline the industry. Our goal is to empower brands and influencers alike. &ldquo;Swaykart&rdquo; embodies our vision—&ldquo;Sway&rdquo; represents influence, while &ldquo;Kart&rdquo; reflects fast-moving opportunities—symbolizing our dedication to driving growth and creating a more transparent, trustworthy space for influencer marketing. Our platform makes it simpler for brands to connect with the right influencers and for influencers to thrive.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#FAFAFA' }}>
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  color: '#14213D'
                }}>
                  Our Team
                </h2>
                <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full shadow-lg">
                    <img 
                      src="/images/about-us/nidhi-nanda.webp" 
                      alt="Nidhi Nanda - Co-Founder & CEO" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={{
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    color: '#14213D'
                  }}>
                    Nidhi Nanda
                  </h3>
                  <p className="text-orange-500 font-semibold" style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    color: '#FCA311'
                  }}>
                    Co-Founder & CEO
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full shadow-lg">
                    <img 
                      src="/images/about-us/akshay-anand.webp" 
                      alt="Akshay Anand - Co-Founder & CTO" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={{
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    color: '#14213D'
                  }}>
                    Akshay Anand
                  </h3>
                  <p className="text-blue-500 font-semibold" style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    color: '#3B82F6'
                  }}>
                    Co-Founder & CTO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
