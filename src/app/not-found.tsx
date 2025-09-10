'use client'

import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const NotFound = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingTop: '80px',
        paddingBottom: '80px'
      }}>
        <div className="text-center max-w-md mx-auto px-6">
          {/* 404 Text */}
          <h1 className="mb-4" style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: 'clamp(32px, 6vw, 48px)',
            lineHeight: 'clamp(40px, 7vw, 56px)',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#14213D'
          }}>
            404 Page Not Found
          </h1>

          <p className="mb-8" style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: 'clamp(16px, 3vw, 18px)',
            lineHeight: 'clamp(24px, 4vw, 28px)',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#6B7280'
          }}>
            The page you're looking for doesn't exist.
          </p>

          {/* Back to Home Button */}
          <Link 
            href="/"
            className="inline-block px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: 'clamp(16px, 3vw, 18px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#FFFFFF',
              backgroundColor: '#FCA311',
              borderRadius: '6px',
              textDecoration: 'none'
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default NotFound
