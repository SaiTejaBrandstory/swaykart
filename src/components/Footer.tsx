'use client'
import React from 'react'

const Footer = () => {
  return (
    <footer className="py-16 lg:py-20" style={{ background: 'linear-gradient(90deg, #14213D 0%, #1E3A8A 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Section - Company Info and Social */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center mb-6">
              <img 
                src="/images/logo/swaykart-footer-logo.svg" 
                alt="Swaykart Logo" 
                className="w-auto h-8"
              />
            </div>

            {/* Description */}
            <p className="mb-8" style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: 'clamp(14px, 2.5vw, 16px)',
              lineHeight: 'clamp(20px, 3.5vw, 24px)',
              letterSpacing: '0%',
              color: '#FFFFFF99'
            }}>
              Swaykart is an AI-driven influencer marketing platform that helps brands discover the right creators, launch campaigns faster, and measure results with complete transparency.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {/* X */}
              <a href="#" className="hover:opacity-80 transition-opacity duration-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: '#FFFFFF' }}>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="hover:opacity-80 transition-opacity duration-200">
                <i className="fab fa-linkedin text-white text-xl"></i>
              </a>

              {/* Instagram */}
              <a href="#" className="hover:opacity-80 transition-opacity duration-200">
                <i className="fab fa-instagram text-white text-xl"></i>
              </a>

              {/* Facebook */}
              <a href="#" className="hover:opacity-80 transition-opacity duration-200">
                <i className="fab fa-facebook text-white text-xl"></i>
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="mb-6" style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: 'clamp(16px, 3vw, 18px)',
              lineHeight: 'clamp(22px, 4vw, 28px)',
              letterSpacing: '0%',
              color: '#FFFFFF'
            }}>
              Product
            </h3>
            <ul className="space-y-4">
              {['Features', 'Pricing', 'Case Studies', 'Reviews', 'Updates'].map((item) => (
                <li key={item}>
                  <a 
                    href={item === 'Pricing' ? '/pricing' : '#'} 
                    className="hover:text-orange-400 transition-colors duration-200"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      fontSize: 'clamp(14px, 2.5vw, 16px)',
                      lineHeight: 'clamp(20px, 3.5vw, 24px)',
                      letterSpacing: '0%',
                      color: '#FFFFFF99'
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="mb-6" style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: 'clamp(16px, 3vw, 18px)',
              lineHeight: 'clamp(22px, 4vw, 28px)',
              letterSpacing: '0%',
              color: '#FFFFFF'
            }}>
              Company
            </h3>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Press', 'Contact', 'Partners'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="hover:text-orange-400 transition-colors duration-200"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      fontSize: 'clamp(14px, 2.5vw, 16px)',
                      lineHeight: 'clamp(20px, 3.5vw, 24px)',
                      letterSpacing: '0%',
                      color: '#FFFFFF99'
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="mb-6" style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: 'clamp(16px, 3vw, 18px)',
              lineHeight: 'clamp(22px, 4vw, 28px)',
              letterSpacing: '0%',
              color: '#FFFFFF'
            }}>
              Resources
            </h3>
            <ul className="space-y-4">
              {['Blog', 'Guides', 'Events', 'Help Center', 'API Docs'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="hover:text-orange-400 transition-colors duration-200"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      fontSize: 'clamp(14px, 2.5vw, 16px)',
                      lineHeight: 'clamp(20px, 3.5vw, 24px)',
                      letterSpacing: '0%',
                      color: '#FFFFFF99'
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright and Legal */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid #FFFFFF66' }}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: 'clamp(14px, 2vw, 16px)',
              lineHeight: 'clamp(16px, 3vw, 20px)',
              letterSpacing: '0%',
              color: '#FFFFFF',
              marginBottom: '8px'
            }}>
              © 2025 Swaykart. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="hover:text-orange-400 transition-colors duration-200"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    lineHeight: 'clamp(16px, 3vw, 20px)',
                    letterSpacing: '0%',
                    color: '#FFFFFF'
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
