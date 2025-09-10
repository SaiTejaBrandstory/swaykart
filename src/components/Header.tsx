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
            <header className="bg-white shadow-sm">
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
              href="#brands"
              className={`transition-colors duration-200 font-medium ${
                isActive('/brands') ? '' : 'text-black hover:text-blue-900'
              }`}
              style={{
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)',
                color: isActive('/brands') ? '#FCA311' : undefined
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
            <a
              href="/pricing"
              className={`transition-colors duration-200 font-medium ${
                isActive('/pricing') ? '' : 'text-black hover:text-blue-900'
              }`}
              style={{
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)',
                color: isActive('/pricing') ? '#FCA311' : undefined
              }}
            >
              Pricing
            </a>
            <a
              href="#blog"
              className={`transition-colors duration-200 font-medium ${
                isActive('/blog') ? '' : 'text-black hover:text-blue-900'
              }`}
              style={{
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)',
                color: isActive('/blog') ? '#FCA311' : undefined
              }}
            >
              Blog
            </a>
          </nav>

          {/* Action Buttons - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
              style={{
                border: '1px solid rgba(20, 33, 61, 1)',
                color: '#000000',
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)'
              }}
            >
              Login
            </button>
            <button 
              className="px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
              style={{
                backgroundColor: 'rgba(252, 163, 17, 1)',
                color: '#ffffff',
                border: '1px solid rgba(252, 163, 17, 1)',
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)'
              }}
            >
              Get Started
            </button>
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
              href="#brands"
              className={`block px-3 py-2 transition-colors duration-200 font-medium ${
                isActive('/brands') ? '' : 'text-black hover:text-blue-900'
              }`}
              style={{
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)',
                color: isActive('/brands') ? '#FCA311' : undefined
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
            <a
              href="/pricing"
              className={`block px-3 py-2 transition-colors duration-200 font-medium ${
                isActive('/pricing') ? '' : 'text-black hover:text-blue-900'
              }`}
              style={{
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)',
                color: isActive('/pricing') ? '#FCA311' : undefined
              }}
            >
              Pricing
            </a>
            <a
              href="#blog"
              className={`block px-3 py-2 transition-colors duration-200 font-medium ${
                isActive('/blog') ? '' : 'text-black hover:text-blue-900'
              }`}
              style={{
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3.5vw, 24px)',
                color: isActive('/blog') ? '#FCA311' : undefined
              }}
            >
              Blog
            </a>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex flex-col space-y-2 px-3">
                <button 
                  className="px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-center w-32"
                  style={{
                    border: '1px solid rgba(20, 33, 61, 1)',
                    color: '#000000',
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    lineHeight: 'clamp(20px, 3.5vw, 24px)'
                  }}
                >
                  Login
                </button>
                <button 
                  className="px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-center w-32"
                  style={{
                    backgroundColor: 'rgba(252, 163, 17, 1)',
                    color: '#ffffff',
                    border: '1px solid rgba(252, 163, 17, 1)',
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    lineHeight: 'clamp(20px, 3.5vw, 24px)'
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
