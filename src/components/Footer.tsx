'use client'
import React from 'react'

const Footer = () => {
  return (
    <footer className="py-16 lg:py-20" style={{ background: 'linear-gradient(90deg, #14213D 0%, #1E3A8A 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Section - Company Info and Social */}
          <div>
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
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/swaykart/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-200">
                <i className="fab fa-linkedin text-white text-xl"></i>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/swaykart/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-200">
                <i className="fab fa-instagram text-white text-xl"></i>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="mb-6" style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: 'clamp(16px, 3vw, 18px)',
              lineHeight: 'clamp(22px, 4vw, 28px)',
              letterSpacing: '0%',
              color: '#FFFFFF'
            }}>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about-us' },
                { name: 'Brands', href: '/' },
                { name: 'Influencers', href: '/influencers' },
                { name: 'Leaderboard', href: '/leaderboard' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
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
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-6" style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: 'clamp(16px, 3vw, 18px)',
              lineHeight: 'clamp(22px, 4vw, 28px)',
              letterSpacing: '0%',
              color: '#FFFFFF'
            }}>
              Contact Us
            </h3>
            <div className="space-y-4">
              <div>
                <p style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  lineHeight: 'clamp(20px, 3.5vw, 24px)',
                  letterSpacing: '0%',
                  color: '#FFFFFF99'
                }}>
                  <strong style={{ color: '#FFFFFF' }}>Address:</strong><br />
                  FL NO. F-603, Meadow in the Sun(Apt),<br />
                  Carmelram, Bangalore South,<br />
                  Bangalore- 560035, Karnataka
                </p>
              </div>
              <div>
                <p style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  lineHeight: 'clamp(20px, 3.5vw, 24px)',
                  letterSpacing: '0%',
                  color: '#FFFFFF99'
                }}>
                  <strong style={{ color: '#FFFFFF' }}>Email:</strong><br />
                  <a href="mailto:support@swaykart.com" className="hover:text-orange-400 transition-colors duration-200">
                    support@swaykart.com
                  </a>
                </p>
              </div>
            </div>
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
              {[
                { name: 'Terms of Service', href: '/terms-of-service' },
                { name: 'Privacy Policy', href: '/privacy-policy' }
              ].map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
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
                  {item.name}
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
