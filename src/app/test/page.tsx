'use client'

import React, { useState } from 'react'
import { Doughnut, Line, Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  BarElement,
} from 'chart.js'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Filler, BarElement)

export default function TestPage() {
  const [activeTab, setActiveTab] = useState('overview')

  // Chart data for Audience Gender
  const genderChartData = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [51, 49],
        backgroundColor: ['#FCA311', '#14213D'],
        borderColor: ['#FCA311', '#14213D'],
        borderWidth: 0,
        cutout: '60%',
      },
    ],
  }

  const genderChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // We'll use custom legend
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.parsed}%`
          }
        }
      }
    },
  }

  // Chart data for Growth History
  const growthChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: 'Followers',
        data: [1200000, 1250000, 1300000, 1350000, 1400000, 1450000, 1500000, 1550000, 1800000],
        borderColor: '#FCA311',
        backgroundColor: (context: any) => {
          const canvas = context.chart.ctx
          const gradient = canvas.createLinearGradient(0, 0, 0, 400)
          gradient.addColorStop(0, 'rgba(252, 163, 17, 0.8)')
          gradient.addColorStop(0.17, 'rgba(252, 163, 17, 0.8)')
          gradient.addColorStop(1, 'rgba(252, 163, 17, 0)')
          return gradient
        },
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#14213D',
        pointBorderColor: '#14213D',
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
      },
    ],
  }

  const growthChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'white',
        titleColor: '#14213D',
        bodyColor: '#14213D',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          title: function(context: any) {
            return `${context[0].parsed.y.toLocaleString()} Followers`
          },
          label: function(context: any) {
            return '3 July, 2025'
          }
        }
      }
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      point: {
        hoverBackgroundColor: '#14213D',
      },
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
    },
  }

  // Chart data for Audience Age Group
  const ageGroupChartData = {
    labels: ['18-24', '25-35', '35-45', 'Above 45'],
    datasets: [
      {
        label: 'Percentage',
        data: [25, 12, 18, 5],
        backgroundColor: (context: any) => {
          const canvas = context.chart.ctx
          const gradient = canvas.createLinearGradient(0, 0, 0, 400)
          gradient.addColorStop(0, 'rgba(252, 163, 17, 0.8)')
          gradient.addColorStop(1, 'rgba(252, 163, 17, 0)')
          return gradient
        },
        borderColor: '#FCA311',
        borderWidth: 0,
        borderRadius: {
          topLeft: 8,
          topRight: 8,
          bottomLeft: 0,
          bottomRight: 0,
        },
        borderSkipped: false,
      },
    ],
  }

  const ageGroupChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'white',
        titleColor: '#14213D',
        bodyColor: '#14213D',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          title: function(context: any) {
            return `${context[0].parsed.y}%`
          },
          label: function(context: any) {
            return context.label
          }
        }
      }
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280',
          font: {
            family: 'Inter',
            size: 14,
            weight: 400,
          },
        },
        title: {
          display: true,
          text: 'Age',
          color: '#6B7280',
          font: {
            family: 'Inter',
            size: 14,
            weight: 400,
          },
        },
      },
      y: {
        display: false,
      },
    },
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Influencer Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8" style={{ border: '1px solid #E5E7EB' }}>
          {/* Main Profile Section */}
          <div className="flex items-start gap-6">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src="/images/leaderboard/creator-icons/creator-1.svg"
                alt="Sarah Chen"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            
            {/* Profile Details */}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                {/* Left Side - Profile Details and Rank Badge side by side */}
                <div className="flex items-start gap-8">
                  <div className="flex-3">
                    <h1 style={{
                      fontFamily: 'Inter',
                      fontWeight: 600,
                      fontSize: '30px',
                      lineHeight: '40px',
                      color: '#14213D',
                      marginBottom: '8px'
                    }}>Sarah Chen</h1>
                    
                    <p style={{
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      fontSize: '18px',
                      lineHeight: '28px',
                      color: '#14213D99',
                      marginBottom: '12px'
                    }}>@sarahchenbeauty</p>
                    
                    {/* Location and Join Date */}
                    <div className="space-y-1 mb-4">
                      <div className="flex items-center gap-2" style={{ color: '#14213D' }}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#14213D' }}>
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '20px',
                          letterSpacing: '0%'
                        }}>Los Angeles, CA</span>
                      </div>
                      <div className="flex items-center gap-2" style={{ color: '#14213D' }}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#14213D' }}>
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '20px',
                          letterSpacing: '0%'
                        }}>Joined March 2022</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rank Badge - Side by side with profile details */}
                  <div className="bg-gray-100 rounded-lg text-center" style={{ padding: '16px' }}>
                    <div className="flex flex-col items-center">
                      <i className="fas fa-crown w-6 h-6 mb-2" style={{ color: '#FCA311' }}></i>
                      <div style={{
                        fontFamily: 'Inter',
                        fontWeight: 700,
                        fontSize: '18px',
                        lineHeight: '100%',
                        color: '#14213D',
                        textAlign: 'center',
                        marginBottom: '4px'
                      }}>#1</div>
                      <div style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '100%',
                        color: '#6B7280',
                        textAlign: 'center'
                      }}>Ranked</div>
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Last Updated and Action Buttons */}
                <div className="flex flex-col items-end gap-4">
                  {/* Last Updated */}
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Last updated 21 hours ago</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                      <button className="text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 hover:opacity-90" style={{ backgroundColor: '#FCA311' }}>
                      <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contact
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Save
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bio Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '26px',
              color: '#374151'
            }}>
              I&apos;m a beauty and lifestyle content creator passionate about clean beauty, skincare routines, and sustainable fashion. 
              Through honest reviews, practical tips, and mindful fashion choices, I aim to inspire women to embrace natural beauty, 
              care for their skin with confidence, and make conscious style decisions. My content blends authenticity with creativity — 
              helping women not only look good, but also feel empowered in their own skin.
            </p>
          </div>
        </div>

        {/* Social Media Links - Outside the profile card */}
        <div className="flex gap-4 mb-8">
          <button className="flex items-center gap-2 px-3 py-2 transition-colors" style={{ 
            backgroundColor: '#FCA3111A', 
            border: '1.5px solid #FCA311',
            color: '#14213D',
            borderRadius: '50px'
          }}>
            <svg className="w-4 h-4" viewBox="0 0 102 102">
              <defs>
                <radialGradient id="instagram-gradient-a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse">
                  <stop offset=".09" stopColor="#fa8f21"></stop>
                  <stop offset=".78" stopColor="#d82d7e"></stop>
                </radialGradient>
                <radialGradient id="instagram-gradient-b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse">
                  <stop offset=".64" stopColor="#8c3aaa" stopOpacity="0"></stop>
                  <stop offset="1" stopColor="#8c3aaa"></stop>
                </radialGradient>
              </defs>
              <path fill="url(#instagram-gradient-a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path>
              <path fill="url(#instagram-gradient-b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path>
              <path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" transform="translate(-422.637 -426.196)"></path>
            </svg>
            <span style={{ 
              fontFamily: 'Inter', 
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '20px'
            }}>Instagram</span>
          </button>
          
          <button className="flex items-center gap-2 px-3 py-2 transition-colors" style={{ 
            backgroundColor: '#FFFFFF', 
            border: '1.5px solid #E5E7EB',
            color: '#14213D',
            borderRadius: '50px'
          }}>
            <svg className="w-4 h-4" viewBox="0 0 48 48">
              <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path>
              <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
            </svg>
            <span style={{ 
              fontFamily: 'Inter', 
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '20px'
            }}>Youtube</span>
          </button>
        </div>

        {/* Profile Analytics Dashboard */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Inter' }}>Profile Analytics</h2>
          
          {/* Top Section - Two main metrics side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Followers Metric */}
            <div className="text-center p-6 rounded-lg" style={{ 
              backgroundColor: '#F9FAFB',
              border: '1px solid #E5E7EB'
            }}>
              <div className="text-5xl font-bold mb-2" style={{ 
                fontFamily: 'Inter', 
                color: '#14213D' 
              }}>1.8M</div>
              <div className="text-lg mb-2" style={{ 
                fontFamily: 'Inter', 
                color: '#6B7280' 
              }}>Followers</div>
              <div className="flex items-center justify-center gap-1 text-green-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">+12%</span>
              </div>
            </div>
            
            {/* Engagement Metric */}
            <div className="text-center p-6 rounded-lg" style={{ 
              backgroundColor: '#F9FAFB',
              border: '1px solid #E5E7EB'
            }}>
              <div className="text-5xl font-bold mb-2" style={{ 
                fontFamily: 'Inter', 
                color: '#EC4899' 
              }}>8.5%</div>
              <div className="text-lg mb-2" style={{ 
                fontFamily: 'Inter', 
                color: '#6B7280' 
              }}>Engagement</div>
              <div className="flex items-center justify-center gap-1 text-green-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">+2.1%</span>
              </div>
            </div>
          </div>
          
          {/* Bottom Section - Six additional metrics in a row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Avg Likes */}
            <div className="text-center">
              <div className="text-2xl font-bold mb-1" style={{ 
                fontFamily: 'Inter', 
                color: '#14213D' 
              }}>156K</div>
              <div className="text-sm" style={{ 
                fontFamily: 'Inter', 
                color: '#6B7280' 
              }}>Avg Likes</div>
            </div>
            
            {/* Comments */}
            <div className="text-center">
              <div className="text-2xl font-bold mb-1" style={{ 
                fontFamily: 'Inter', 
                color: '#14213D' 
              }}>2.4K</div>
              <div className="text-sm" style={{ 
                fontFamily: 'Inter', 
                color: '#6B7280' 
              }}>Comments</div>
            </div>
            
            {/* Post Rate */}
            <div className="text-center">
              <div className="text-2xl font-bold mb-1" style={{ 
                fontFamily: 'Inter', 
                color: '#F59E0B' 
              }}>$1.2K</div>
              <div className="text-sm" style={{ 
                fontFamily: 'Inter', 
                color: '#6B7280' 
              }}>Post Rate</div>
            </div>
            
            {/* Campaigns */}
            <div className="text-center">
              <div className="text-2xl font-bold mb-1" style={{ 
                fontFamily: 'Inter', 
                color: '#14213D' 
              }}>156</div>
              <div className="text-sm" style={{ 
                fontFamily: 'Inter', 
                color: '#6B7280' 
              }}>Campaigns</div>
            </div>
            
            {/* Sway Score */}
            <div className="text-center">
              <div className="text-2xl font-bold mb-1" style={{ 
                fontFamily: 'Inter', 
                color: '#F59E0B' 
              }}>98</div>
              <div className="text-sm" style={{ 
                fontFamily: 'Inter', 
                color: '#6B7280' 
              }}>Sway Score</div>
            </div>
            
            {/* Avg Rate */}
            <div className="text-center">
              <div className="text-2xl font-bold mb-1" style={{ 
                fontFamily: 'Inter', 
                color: '#14213D' 
              }}>$2.5K</div>
              <div className="text-sm" style={{ 
                fontFamily: 'Inter', 
                color: '#6B7280' 
              }}>Avg Rate</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex space-x-4">
            {/* Overview */}
            <button 
              onClick={() => setActiveTab('overview')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-md" 
              style={{ 
                backgroundColor: activeTab === 'overview' ? '#FCA311' : 'transparent',
                color: activeTab === 'overview' ? 'white' : '#14213D',
                fontFamily: 'Inter'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'overview') {
                  e.currentTarget.style.backgroundColor = '#F9FAFB'
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'overview') {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }
              }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <span>Overview</span>
            </button>
            
            {/* Content */}
            <button 
              onClick={() => setActiveTab('content')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-md" 
              style={{ 
                backgroundColor: activeTab === 'content' ? '#FCA311' : 'transparent',
                color: activeTab === 'content' ? 'white' : '#14213D',
                fontFamily: 'Inter'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'content') {
                  e.currentTarget.style.backgroundColor = '#F9FAFB'
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'content') {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }
              }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <span>Content</span>
            </button>
            
            {/* Brand Safety */}
            <button 
              onClick={() => setActiveTab('brand-safety')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-md" 
              style={{ 
                backgroundColor: activeTab === 'brand-safety' ? '#FCA311' : 'transparent',
                color: activeTab === 'brand-safety' ? 'white' : '#14213D',
                fontFamily: 'Inter'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'brand-safety') {
                  e.currentTarget.style.backgroundColor = '#F9FAFB'
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'brand-safety') {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }
              }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Brand Safety</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
          {/* Top Row - 2 Boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Insights Box */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Insights</h3>
              <div className="space-y-4">
                <div 
                  className="p-4 rounded-lg"
                  style={{
                    backgroundColor: '#F9FAFB',
                    border: '1px solid #E5E7EB'
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#22C55E' }}></div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-semibold" style={{ color: '#14213D' }}>Audience Engagement:</span> This creator sees strong interaction, with followers responding well to recipe-driven and transformation content.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div 
                  className="p-4 rounded-lg"
                  style={{
                    backgroundColor: '#F9FAFB',
                    border: '1px solid #E5E7EB'
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#22C55E' }}></div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-semibold" style={{ color: '#14213D' }}>Follower Base:</span> This creator&apos;s follower base has Increased by +0.3% in the last 30 days.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div 
                  className="p-4 rounded-lg"
                  style={{
                    backgroundColor: '#F9FAFB',
                    border: '1px solid #E5E7EB'
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#EF4444' }}></div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-semibold" style={{ color: '#14213D' }}>Posting Frequency:</span> Posting frequency is inconsistent, which may affect reach and visibility. Collaboration campaigns should include structured posting timelines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Audience Age Group Box */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Audience Age Group</h3>
              <div className="h-64">
                <Bar data={ageGroupChartData} options={ageGroupChartOptions} />
              </div>
            </div>
          </div>

          {/* Middle Row - 2 Boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Audience Gender Box */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Audience Gender</h3>
              <div className="flex items-center justify-center">
                <div className="w-48 h-48">
                  <Doughnut data={genderChartData} options={genderChartOptions} />
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-6">
                <div 
                  className="flex items-center gap-2 px-3 py-2 rounded-lg"
                  style={{
                    backgroundColor: '#F9FAFB',
                    border: '1px solid #E5E7EB'
                  }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FCA311' }}></div>
                  <span className="text-sm text-gray-700 font-medium">51% Male</span>
                </div>
                <div 
                  className="flex items-center gap-2 px-3 py-2 rounded-lg"
                  style={{
                    backgroundColor: '#F9FAFB',
                    border: '1px solid #E5E7EB'
                  }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#14213D' }}></div>
                  <span className="text-sm text-gray-700 font-medium">49% Female</span>
                </div>
              </div>
            </div>

            {/* Recent Campaigns Box */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Campaigns via Swaykart</h3>
              <div className="space-y-4">
                {[
                  { 
                    name: 'Glossier Skincare Launch', 
                    category: 'Beauty', 
                    status: 'Completed Dec 2024', 
                    engagement: '8.9%', 
                    rate: '$3,200',
                    thumbnail: 'skincare-products'
                  },
                  { 
                    name: 'Sustainable Fashion Week', 
                    category: 'Fashion', 
                    status: 'Completed Nov 2024', 
                    engagement: '8.9%', 
                    rate: '$3,200',
                    thumbnail: 'fashion-model'
                  },
                  { 
                    name: 'Gym week', 
                    category: 'Wellness', 
                    status: 'Completed Oct 2024', 
                    engagement: '8.9%', 
                    rate: '$3,200',
                    thumbnail: 'gym-dumbbells'
                  }
                ].map((campaign, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                    {/* Thumbnail */}
                    <div className="w-16 h-16 rounded-lg flex-shrink-0 overflow-hidden">
                      {campaign.thumbnail === 'skincare-products' && (
                        <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                          <div className="flex space-x-1">
                            <div className="w-3 h-8 bg-pink-300 rounded-sm"></div>
                            <div className="w-3 h-6 bg-pink-400 rounded-sm"></div>
                            <div className="w-3 h-7 bg-pink-300 rounded-sm"></div>
                          </div>
                        </div>
                      )}
                      {campaign.thumbnail === 'fashion-model' && (
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                        </div>
                      )}
                      {campaign.thumbnail === 'gym-dumbbells' && (
                        <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                          <div className="flex space-x-1">
                            <div className="w-2 h-6 bg-orange-400 rounded-sm"></div>
                            <div className="w-2 h-6 bg-orange-400 rounded-sm"></div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Campaign Details */}
                    <div className="flex-1">
                      <h4 
                        className="font-bold text-gray-900 mb-1"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 700,
                          fontSize: '16px'
                        }}
                      >
                        {campaign.name}
                      </h4>
                      <p 
                        className="text-sm text-gray-600"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          fontSize: '14px',
                          color: '#6B7280'
                        }}
                      >
                        {campaign.category} • {campaign.status}
                      </p>
                    </div>
                    
                    {/* Performance Metrics */}
                    <div className="text-right">
                      <div 
                        className="font-bold mb-1"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 700,
                          fontSize: '14px',
                          color: '#22C55E'
                        }}
                      >
                        {campaign.engagement} Engagement
                      </div>
                      <div 
                        className="font-medium"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 500,
                          fontSize: '14px',
                          color: '#1F2937'
                        }}
                      >
                        {campaign.rate}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row - 1 Full Width Box */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ 
                    color: '#14213D',
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    fontSize: '20px'
                  }}
                >
                  Growth History
                </h3>
                <div 
                  className="text-sm font-medium"
                  style={{ 
                    color: '#22C55E',
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    fontSize: '24px'
                  }}
                >
                  +0.2%
                </div>
                <div 
                  className="text-sm"
                  style={{ 
                    color: '#6B7280',
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '14px'
                  }}
                >
                  Followers Growth rate in last 30 Days
                </div>
              </div>
              <div className="text-right">
                <div 
                  className="text-sm font-bold"
                  style={{ 
                    color: '#14213D',
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    fontSize: '24px'
                  }}
                >
                  2.4M
                </div>
                <div 
                  className="text-sm"
                  style={{ 
                    color: '#6B7280',
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '14px'
                  }}
                >
                  sept 3 2025
                </div>
              </div>
            </div>
            
            {/* Growth Chart with Chart.js */}
            <div className="relative h-64 mb-4">
              <div className="h-full">
                <Line data={growthChartData} options={growthChartOptions} />
              </div>
            </div>
            
            {/* Bottom Metric */}
            <div className="flex items-center">
              <div 
                className="text-sm"
                style={{ 
                  color: '#6B7280',
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '14px'
                }}
              >
                Last 30 days: 
              </div>
              <div 
                className="text-sm font-medium ml-1"
                style={{ 
                  color: '#22C55E',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '14px'
                }}
              >
                +150K (+6.7%)↑
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Content Tab Content */}
        {activeTab === 'content' && (
          <div className="space-y-8">
            {/* Half-Half Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Primary Categories - Left Side */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Primary Categories</h3>
                <div className="grid grid-cols-2 gap-4 flex-1">
                  {/* Beauty */}
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#FEF2F2' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#FEF2F2' }}>
                      <svg className="w-6 h-6" fill="#EF4444" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-gray-900">Beauty</div>
                  </div>

                  {/* Fitness */}
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#FDF2F8' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#FDF2F8' }}>
                      <svg className="w-6 h-6" fill="#EC4899" viewBox="0 0 640 640">
                        <path d="M96 176C96 149.5 117.5 128 144 128C170.5 128 192 149.5 192 176L192 288L448 288L448 176C448 149.5 469.5 128 496 128C522.5 128 544 149.5 544 176L544 192L560 192C586.5 192 608 213.5 608 240L608 288C625.7 288 640 302.3 640 320C640 337.7 625.7 352 608 352L608 400C608 426.5 586.5 448 560 448L544 448L544 464C544 490.5 522.5 512 496 512C469.5 512 448 490.5 448 464L448 352L192 352L192 464C192 490.5 170.5 512 144 512C117.5 512 96 490.5 96 464L96 448L80 448C53.5 448 32 426.5 32 400L32 352C14.3 352 0 337.7 0 320C0 302.3 14.3 288 32 288L32 240C32 213.5 53.5 192 80 192L96 192L96 176z"/>
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-gray-900">Fitness</div>
                  </div>

                  {/* Food */}
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#F0FDF4' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#F0FDF4' }}>
                      <svg className="w-6 h-6" fill="#22C55E" viewBox="0 0 640 640">
                        <path d="M127.9 78.4C127.1 70.2 120.2 64 112 64C103.8 64 96.9 70.2 96 78.3L81.9 213.7C80.6 219.7 80 225.8 80 231.9C80 277.8 115.1 315.5 160 319.6L160 544C160 561.7 174.3 576 192 576C209.7 576 224 561.7 224 544L224 319.6C268.9 315.5 304 277.8 304 231.9C304 225.8 303.4 219.7 302.1 213.7L287.9 78.3C287.1 70.2 280.2 64 272 64C263.8 64 256.9 70.2 256.1 78.4L242.5 213.9C241.9 219.6 237.1 224 231.4 224C225.6 224 220.8 219.6 220.2 213.8L207.9 78.6C207.2 70.3 200.3 64 192 64C183.7 64 176.8 70.3 176.1 78.6L163.8 213.8C163.3 219.6 158.4 224 152.6 224C146.8 224 142 219.6 141.5 213.9L127.9 78.4zM512 64C496 64 384 96 384 240L384 352C384 387.3 412.7 416 448 416L480 416L480 544C480 561.7 494.3 576 512 576C529.7 576 544 561.7 544 544L544 96C544 78.3 529.7 64 512 64z"/>
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-gray-900">Food</div>
                  </div>

                  {/* Fashion */}
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#EFF6FF' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#EFF6FF' }}>
                      <svg className="w-6 h-6" fill="#3B82F6" viewBox="0 0 640 640">
                        <path d="M320.2 176C364.4 176 400.2 140.2 400.2 96L453.7 96C470.7 96 487 102.7 499 114.7L617.6 233.4C630.1 245.9 630.1 266.2 617.6 278.7L566.9 329.4C554.4 341.9 534.1 341.9 521.6 329.4L480.2 288L480.2 512C480.2 547.3 451.5 576 416.2 576L224.2 576C188.9 576 160.2 547.3 160.2 512L160.2 288L118.8 329.4C106.3 341.9 86 341.9 73.5 329.4L22.9 278.6C10.4 266.1 10.4 245.8 22.9 233.3L141.5 114.7C153.5 102.7 169.8 96 186.8 96L240.3 96C240.3 140.2 276.1 176 320.3 176z"/>
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-gray-900">Fashion</div>
                  </div>
                </div>
              </div>

              {/* Hashtag Analysis - Right Side */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Hashtag Analysis</h3>
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <div 
                    className="p-4 rounded-lg"
                    style={{
                      backgroundColor: '#F9FAFB',
                      border: '1px solid #E5E7EB'
                    }}
                  >
                    <div className="text-sm text-gray-600 mb-1">Top Hashtag</div>
                    <div 
                      style={{ 
                        color: '#F59E0B',
                        fontWeight: 700,
                        fontSize: '24px'
                      }}
                    >#skincare</div>
                  </div>
                  <div 
                    className="p-4 rounded-lg"
                    style={{
                      backgroundColor: '#F9FAFB',
                      border: '1px solid #E5E7EB'
                    }}
                  >
                    <div className="text-sm text-gray-600 mb-1">Total Unique Hashtags</div>
                    <div 
                      style={{ 
                        color: '#1F2937',
                        fontWeight: 700,
                        fontSize: '24px'
                      }}
                    >115</div>
                  </div>
                  <div 
                    className="p-4 rounded-lg"
                    style={{
                      backgroundColor: '#F9FAFB',
                      border: '1px solid #E5E7EB'
                    }}
                  >
                    <div className="text-sm text-gray-600 mb-1">Hashtag Diversity</div>
                    <div 
                      style={{ 
                        color: '#1F2937',
                        fontWeight: 700,
                        fontSize: '24px'
                      }}
                    >7.18</div>
                  </div>
                  <div 
                    className="p-4 rounded-lg"
                    style={{
                      backgroundColor: '#F9FAFB',
                      border: '1px solid #E5E7EB'
                    }}
                  >
                    <div className="text-sm text-gray-600 mb-1">Avg Hashtags Per Post</div>
                    <div 
                      style={{ 
                        color: '#1F2937',
                        fontWeight: 700,
                        fontSize: '24px'
                      }}
                    >8.1</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Performing Contents */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Top performing contents</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Content Card 1 */}
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-pink-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600">Makeup & Beauty Products</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Post</span>
                      <span className="text-xs text-gray-500">15 Aug 2025</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">My new favorite morning routine! ✨ So refreshing.</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-gray-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        <span>245K</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span>15.2K</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                        <span>1.8K</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Card 2 */}
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-pink-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600">Glow Cosmetics Unboxing</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Reels</span>
                      <span className="text-xs text-gray-500">02 Aug 2025</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">Unboxing the latest from Glow Cosmetics! 💕</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-gray-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        <span>198K</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span>12.1K</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                        <span>1.1K</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Card 3 */}
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600">Self Love Portrait</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Post</span>
                      <span className="text-xs text-gray-500">25 Jul 2025</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">Feeling confident in my own skin today. #selflove</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-gray-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        <span>176K</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span>10.5K</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                        <span>980</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Engagement Mix - Single Left Half Box */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Side - All 4 Engagement Cards */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Content Engagement Mix</h3>
                <div className="grid grid-cols-2 gap-4">
                  {/* Likes Card */}
                  <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#FEF2F2' }}>
                    <div className="flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">65%</div>
                    <div className="text-sm text-gray-600">Likes</div>
                  </div>

                  {/* Comments Card */}
                  <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#EFF6FF' }}>
                    <div className="flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">20%</div>
                    <div className="text-sm text-gray-600">Comments</div>
                  </div>

                  {/* Shares Card */}
                  <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#F0FDF4' }}>
                    <div className="flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">8%</div>
                    <div className="text-sm text-gray-600">Shares</div>
                  </div>

                  {/* Saves Card */}
                  <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#FAF5FF' }}>
                    <div className="flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">7%</div>
                    <div className="text-sm text-gray-600">Saves</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Empty for now */}
              <div></div>
            </div>
          </div>
        )}

        {/* Brand Safety Tab Content */}
        {activeTab === 'brand-safety' && (
          <div className="space-y-8">
            {/* Top Row - 2 Boxes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Overall Safety Score */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Overall Safety Score</h3>
                <div 
                  className="p-6 rounded-lg flex-1 flex flex-col"
                  style={{
                    background: '#EFF6FF',
                    border: '1px solid #BFDBFE'
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      style={{
                        color: '#14213D',
                        fontFamily: 'Inter',
                        fontWeight: 700,
                        fontSize: '18px'
                      }}
                    >
                      Overall Safety Score :
                    </span>
                    <div 
                      className="px-4 py-2 rounded-full text-white font-bold text-sm"
                      style={{
                        background: '#10B981'
                      }}
                    >
                      EXCELLENT
                    </div>
                  </div>
                  <p 
                    className="flex-1"
                    style={{
                      color: '#14213DCC',
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '14px'
                    }}
                  >
                    A comprehensive analysis highlights strong brand safety standards, consistently high-quality content, authentic audience engagement, and reliable collaboration practices.
                  </p>
                </div>
              </div>

              {/* Risk Assessment */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Risk Assessment</h3>
                <div 
                  className="p-6 rounded-lg flex-1 flex flex-col"
                  style={{
                    background: '#F0FDF4',
                    border: '1px solid #BBF7D0'
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      style={{
                        color: '#14213D',
                        fontFamily: 'Inter',
                        fontWeight: 700,
                        fontSize: '18px'
                      }}
                    >
                      Risk Level :
                    </span>
                    <div 
                      className="px-4 py-2 rounded-full text-white font-bold text-sm"
                      style={{
                        background: '#10B981'
                      }}
                    >
                      LOW
                    </div>
                  </div>
                  <p 
                    className="flex-1"
                    style={{
                      color: '#14213DCC',
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '14px'
                    }}
                  >
                    The influencer maintains a consistent journalistic tone, even in personal updates. The content remains positive and avoids any overtly controversial or unsafe material. Engagement levels are strong, reflecting a receptive and trusting audience.
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Row - 2 Boxes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Verification Status */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Verification Status</h3>
                <div className="space-y-3">
                  <div 
                    className="flex items-center justify-between p-4 rounded-lg"
                    style={{
                      border: '1px solid #E5E7EB',
                      background: '#F9FAFB'
                    }}
                  >
                    <div className="font-medium text-gray-900">Verified Account</div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-green-600">Verified</span>
                    </div>
                  </div>
                  
                  <div 
                    className="flex items-center justify-between p-4 rounded-lg"
                    style={{
                      border: '1px solid #E5E7EB',
                      background: '#F9FAFB'
                    }}
                  >
                    <div className="font-medium text-gray-900">Identity Confirmed</div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-green-600">Confirmed</span>
                    </div>
                  </div>
                  
                  <div 
                    className="flex items-center justify-between p-4 rounded-lg"
                    style={{
                      border: '1px solid #E5E7EB',
                      background: '#F9FAFB'
                    }}
                  >
                    <div className="font-medium text-gray-900">Account Age</div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-blue-600">2+ Years</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Posting Consistency */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <h3 
                  className="mb-6"
                  style={{
                    color: '#14213D',
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    fontSize: '20px'
                  }}
                >
                  Posting Consistency
                </h3>
                <div 
                  className="rounded-lg p-6"
                  style={{
                    border: '1px solid #FEF08A',
                    background: '#FEFCE8'
                  }}
                >
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div 
                        className="mb-1"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 700,
                          fontSize: '30px',
                          color: '#2563EB'
                        }}
                      >
                        2.8 days
                      </div>
                      <div 
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '20px',
                          color: '#4B5563'
                        }}
                      >
                        Average Days Between Posts
                      </div>
                    </div>
                    <div className="text-center">
                      <div 
                        className="mb-1"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 700,
                          fontSize: '30px',
                          color: '#16A34A'
                        }}
                      >
                        MEDIUM
                      </div>
                      <div 
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '20px',
                          color: '#4B5563'
                        }}
                      >
                        Consistency Score
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - 1 Full Width Box */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Credibility Score</h3>
              <div 
                className="rounded-lg p-12 text-center"
                style={{ 
                  background: 'linear-gradient(91.33deg, #3B61B3 0.52%, #14213D 100%)'
                }}
              >
                <div 
                  className="mb-2"
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    fontSize: '60px',
                    textAlign: 'center'
                  }}
                >
                  7.0
                </div>
                <div 
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    fontSize: '20px',
                    textAlign: 'center'
                  }}
                >
                  Credibility Score
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}
