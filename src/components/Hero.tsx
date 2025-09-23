'use client'

import React from 'react'

const Hero = () => {

  return (
    <section className="relative pt-20 pb-0 lg:py-20" style={{
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
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 54px)',
              lineHeight: 'clamp(40px, 5vw, 60px)',
              textAlign: 'center',
              textTransform: 'uppercase'
            }}>
              <div>
                <span style={{ color: 'rgba(252, 163, 17, 1)', fontSize: 'clamp(34px, 4.2vw, 56px)' }}>INFLUENCER MARKETING</span>
                <span style={{ color: '#14213D', fontSize: 'clamp(26px, 3.2vw, 40px)' }}> EVOLVED</span>
              </div>
              <div style={{ fontSize: 'clamp(26px, 3.2vw, 40px)', lineHeight: 'clamp(40px, 4vw, 60px)' }}>
                <span style={{ color: '#14213D' }}>WELCOME TO </span>
                <span style={{ color: 'rgba(252, 163, 17, 1)', fontSize: 'clamp(34px, 4.2vw, 56px)' }}>IMPACT MARKETING !</span>
              </div>
            </h1>
          
          
          {/* Description */}
          <div className="mt-4 max-w-4xl mx-auto">
            <p style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: 'clamp(16px, 3vw, 18px)',
              lineHeight: 'clamp(24px, 4vw, 28px)',
              textAlign: 'center',
              color: '#14213DCC',
              marginBottom: '16px'
            }}>
              Discover the right creators, launch campaigns faster, and watch your brand grow with clarity.
            </p>
            <p style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: 'clamp(16px, 3vw, 18px)',
              lineHeight: 'clamp(24px, 4vw, 28px)',
              textAlign: 'center',
              color: '#14213DCC'
            }}>
              Our AI-driven platform takes the guesswork out of influencer marketing.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center mt-8 mb-6">
            <a
              href="#contact-us"
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-all duration-200 h-12 sm:h-14 hover:shadow-lg"
              style={{
                background: 'rgba(252, 163, 17, 1)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(16px, 4vw, 18px)',
                lineHeight: '100%',
                textAlign: 'center',
                color: '#FFFFFF',
                border: '1px solid rgba(252, 163, 17, 1)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(230, 147, 15, 1)'
                e.currentTarget.style.borderColor = 'rgba(230, 147, 15, 1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(252, 163, 17, 1)'
                e.currentTarget.style.borderColor = 'rgba(252, 163, 17, 1)'
              }}
            >
              Contact Us
            </a>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <img
              src="/images/home/10000.svg"
              alt="10,000+ Influencers"
              className="w-auto h-auto"
            />
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 3vw, 18px)',
              lineHeight: 'clamp(24px, 4vw, 28px)',
              textAlign: 'center',
              color: '#00000099'
            }}>
              over 10,000 + Influencers from India
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Scroll Section */}
      <div className="relative overflow-hidden py-16" style={{ minHeight: '400px' }}>
        <div className="flex space-x-6" style={{
          animation: 'scroll 30s linear infinite',
          width: 'max-content'
        }}>
          {/* First set */}
          {Array.from({ length: 12 }, (_, i) => i + 1).map((personNumber, index) => {
            const imageName = `person-${personNumber}.${personNumber <= 6 ? 'png' : personNumber <= 8 ? 'jpg' : 'png'}`
            const rotationAngles = [0, -2, 0, 3, 0, -1.5, 0, 2.5, 0, -3, 0, 1.5]
            const translateY = [0, -20, 0, 15, 0, -25, 0, 10, 0, -15, 0, 20]
            const rotation = rotationAngles[index % rotationAngles.length]
            
            return (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-48 h-60 sm:w-56 sm:h-70 md:w-64 md:h-80 rounded-2xl overflow-hidden transform hover:rotate-0 transition-transform duration-300"
                style={{
                  transform: `rotate(${rotation}deg) translateY(${translateY[index % translateY.length]}px)`,
                  background: `linear-gradient(135deg, 
                    ${index % 4 === 0 ? '#3B82F6, #1E40AF' : 
                      index % 4 === 1 ? '#EC4899, #BE185D' : 
                      index % 4 === 2 ? '#10B981, #047857' : 
                      '#F59E0B, #D97706'})`
                }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={`/images/home/${imageName}`}
                    alt={`Influencer ${personNumber}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            )
          })}
          
          {/* Second set - exact duplicate */}
          {Array.from({ length: 12 }, (_, i) => i + 1).map((personNumber, index) => {
            const imageName = `person-${personNumber}.${personNumber <= 6 ? 'png' : personNumber <= 8 ? 'jpg' : 'png'}`
            const rotationAngles = [0, -2, 0, 3, 0, -1.5, 0, 2.5, 0, -3, 0, 1.5]
            const translateY = [0, -20, 0, 15, 0, -25, 0, 10, 0, -15, 0, 20]
            const rotation = rotationAngles[index % rotationAngles.length]
            
            return (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 h-60 sm:w-56 sm:h-70 md:w-64 md:h-80 rounded-2xl overflow-hidden transform hover:rotate-0 transition-transform duration-300"
                style={{
                  transform: `rotate(${rotation}deg) translateY(${translateY[index % translateY.length]}px)`,
                  background: `linear-gradient(135deg, 
                    ${index % 4 === 0 ? '#3B82F6, #1E40AF' : 
                      index % 4 === 1 ? '#EC4899, #BE185D' : 
                      index % 4 === 2 ? '#10B981, #047857' : 
                      '#F59E0B, #D97706'})`
                }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={`/images/home/${imageName}`}
                    alt={`Influencer ${personNumber}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero
