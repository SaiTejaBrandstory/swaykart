'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  return (
            <header className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/images/logo/swaykart-logo.svg"
                alt="SwayKart Logo"
                className="h-8 w-auto hover:opacity-80 transition-opacity duration-200"
              />
            </a>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className={`transition-colors duration-200 font-medium ${
                isActive('/') ? '' : 'text-black hover:text-blue-900'
              }`}
              style={{
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)',
                color: isActive('/') ? '#FCA311' : undefined
              }}
            >
              Brands
            </a>
            <a
              href="/influencers"
              className={`transition-colors duration-200 font-medium ${
                isActive('/influencers') ? '' : 'text-black hover:text-blue-900'
              }`}
              style={{
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)',
                color: isActive('/influencers') ? '#FCA311' : undefined
              }}
            >
              Influencers
            </a>
            <a
              href="/leaderboard"
              className={`transition-colors duration-200 font-medium ${
                isActive('/leaderboard') ? '' : 'text-black hover:text-blue-900'
              }`}
              style={{
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)',
                color: isActive('/leaderboard') ? '#FCA311' : undefined
              }}
            >
              Leaderboard
            </a>
          </nav>

          {/* Action Button - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/#contact-us"
              className="px-6 py-2 rounded-lg transition-colors duration-200 font-medium hover:opacity-90"
              style={{
                backgroundColor: 'rgba(252, 163, 17, 1)',
                color: '#ffffff',
                border: '1px solid rgba(252, 163, 17, 1)',
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)',
                textDecoration: 'none'
              }}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-black hover:text-blue-900 p-2"
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) {
                  mobileMenu.classList.toggle('hidden');
                }
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div id="mobile-menu" className="hidden md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <a
              href="/"
              className={`block px-3 py-2 transition-colors duration-200 font-medium ${
                isActive('/') ? '' : 'text-black hover:text-blue-900'
              }`}
              style={{
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)',
                color: isActive('/') ? '#FCA311' : undefined
              }}
            >
              Brands
            </a>
            <a
              href="/influencers"
              className={`block px-3 py-2 transition-colors duration-200 font-medium ${
                isActive('/influencers') ? '' : 'text-black hover:text-blue-900'
              }`}
              style={{
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)',
                color: isActive('/influencers') ? '#FCA311' : undefined
              }}
            >
              Influencers
            </a>
            <a
              href="/leaderboard"
              className={`block px-3 py-2 transition-colors duration-200 font-medium ${
                isActive('/leaderboard') ? '' : 'text-black hover:text-blue-900'
              }`}
              style={{
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)',
                color: isActive('/leaderboard') ? '#FCA311' : undefined
              }}
            >
              Leaderboard
            </a>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex flex-col space-y-2 px-3">
                <a
                  href="/#contact-us"
                  className="px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-center w-32 hover:opacity-90"
                  style={{
                    backgroundColor: 'rgba(252, 163, 17, 1)',
                    color: '#ffffff',
                    border: '1px solid rgba(252, 163, 17, 1)',
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    lineHeight: 'clamp(20px, 3.5vw, 24px)',
                    textDecoration: 'none'
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
