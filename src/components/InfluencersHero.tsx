'use client'

import React from 'react'
import type { JSX } from 'react'

// Add keyframe animation for infinite scroll
const scrollStyles = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`

const InfluencersHero = (): JSX.Element => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: scrollStyles }} />
      <div className="relative pt-20 pb-0 lg:py-20" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px)',
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
        <div className="text-center mx-auto">
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
              <span style={{ color: '#14213D', fontSize: 'clamp(26px, 3.2vw, 40px)' }}> YOUR </span>
              <span style={{ color: 'rgba(252, 163, 17, 1)', fontSize: 'clamp(34px, 4.2vw, 56px)' }}>INFLUENCE</span>
            </div>
            <div style={{ fontSize: 'clamp(26px, 3.2vw, 40px)', lineHeight: 'clamp(40px, 4vw, 60px)' }}>
              <span style={{ color: '#14213D' }}>INTO YOUR </span>
              <span style={{ color: 'rgba(252, 163, 17, 1)', fontSize: 'clamp(34px, 4.2vw, 56px)' }}>INCOME</span>
            </div>
          </h1>

          {/* Description */}
          <div className="mt-4 max-w-4xl mx-auto">
            <p style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'Regular',
              fontSize: 'clamp(16px, 3vw, 20px)',
              lineHeight: 'clamp(24px, 4vw, 33px)',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#14213D99',
              marginBottom: '16px'
            }}>
              Join India's AI-powered creator platform where top brands meet authentic voices. Get discovered, collaborate with trusted brands, and grow your influence, all in one app.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-6">
            <button
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              style={{
                background: 'rgba(252, 163, 17, 1)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(14px, 3vw, 18px)',
                lineHeight: '100%',
                textAlign: 'center',
                color: '#FFFFFF',
                border: '1px solid rgba(252, 163, 17, 1)',
                minHeight: 'clamp(40px, 6vw, 56px)',
                padding: 'clamp(8px, 1.5vw, 16px) clamp(16px, 3vw, 32px)'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30" style={{ width: 'clamp(18px, 3vw, 20px)', height: 'clamp(18px, 3vw, 20px)' }}>
                <path fill="#FFFFFF" d="M 7.6230469 3.2109375 L 18 13.585938 L 20.677734 10.908203 C 17.018734 8.6882031 12.118063 5.7100938 9.9140625 4.3710938 L 8.4375 3.4765625 C 8.1765 3.3175625 7.8970469 3.2319375 7.6230469 3.2109375 z M 6.0390625 4.453125 C 6.0180625 4.567125 6 4.6816875 6 4.8046875 L 6 25.308594 C 6 25.394594 6.0172969 25.474641 6.0292969 25.556641 L 16.585938 15 L 6.0390625 4.453125 z M 22.4375 11.976562 L 19.414062 15 L 22.384766 17.970703 C 23.958766 17.016703 25.048922 16.35425 25.169922 16.28125 C 25.704922 15.95425 26.007047 15.460875 25.998047 14.921875 C 25.990047 14.392875 25.687828 13.919906 25.173828 13.628906 C 25.058828 13.562906 23.9835 12.913563 22.4375 11.976562 z M 18 16.414062 L 7.6542969 26.759766 C 7.8552969 26.724766 8.0560469 26.664828 8.2480469 26.548828 C 8.5140469 26.386828 15.7 22.027062 20.625 19.039062 L 18 16.414062 z"></path>
              </svg>
              Get it on Google Play
            </button>
            <button
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid rgba(20, 33, 61, 1)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(14px, 3vw, 18px)',
                textAlign: 'center',
                color: '#14213D',
                minHeight: 'clamp(40px, 6vw, 56px)',
                padding: 'clamp(8px, 1.5vw, 16px) clamp(16px, 3vw, 32px)'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30" style={{ width: 'clamp(18px, 3vw, 20px)', height: 'clamp(18px, 3vw, 20px)' }}>
                <path fill="#14213D" d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
              </svg>
              Download on App Store
            </button>
          </div>

            {/* Infinite Scroll Section with Centered iPhone */}
            <div className="relative overflow-hidden py-16" style={{ minHeight: '400px' }}>
              {/* Side fade effects */}
              <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
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

              {/* Center iPhone Image - Absolute Positioned */}
              <div style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'clamp(280px, 30vw, 450px)',
                height: 'clamp(220px, 25vw, 350px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                zIndex: 20,
                top: '0'
              }}>
                <img
                  src="/images/influencers/iphone.png"
                  alt="iPhone App Preview"
                  style={{
                    width: '100%',
                    height: 'auto',
                    transform: 'translateY(0%)',
                    maxWidth: '450px'
                  }}
                />
              </div>
              {/* First Row - Moving Left */}
              <div className="flex space-x-6 mb-6" style={{
                animation: 'scroll 30s linear infinite',
                width: 'max-content'
              }}>
                {Array.from({ length: 8 }, (_, i) => i + 1).map((num, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 rounded-lg overflow-hidden"
                    style={{
                      width: '150px',
                      height: '150px'
                    }}
                  >
                    <img
                      src={`/images/influencers/app/app-${num}.png`}
                      alt={`Creator ${num}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {Array.from({ length: 8 }, (_, i) => i + 1).map((num, index) => (
                  <div
                    key={`first-dup-${index}`}
                    className="flex-shrink-0 rounded-lg overflow-hidden"
                    style={{
                      width: '150px',
                      height: '150px'
                    }}
                  >
                    <img
                      src={`/images/influencers/app/app-${num}.png`}
                      alt={`Creator ${num}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Second Row - Moving Right */}
              <div className="flex space-x-6" style={{
                animation: 'scroll 30s linear infinite reverse',
                width: 'max-content'
              }}>
                {Array.from({ length: 8 }, (_, i) => i + 9).map((num, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 rounded-lg overflow-hidden"
                    style={{
                      width: '150px',
                      height: '150px'
                    }}
                  >
                    <img
                      src={`/images/influencers/app/app-${num}.png`}
                      alt={`Creator ${num}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {Array.from({ length: 8 }, (_, i) => i + 9).map((num, index) => (
                  <div
                    key={`second-dup-${index}`}
                    className="flex-shrink-0 rounded-lg overflow-hidden"
                    style={{
                      width: '150px',
                      height: '150px'
                    }}
                  >
                    <img
                      src={`/images/influencers/app/app-${num}.png`}
                      alt={`Creator ${num}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default InfluencersHero