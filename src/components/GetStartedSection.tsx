'use client'
import React, { useState } from 'react'

const GetStartedSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companySize: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <section className="py-20 lg:py-24" style={{ background: 'linear-gradient(90deg, #14213D 0%, #1E3A8A 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 min-h-[500px]">
            {/* Left Section - Marketing Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center items-center text-center" style={{ backgroundColor: '#FFFFFF' }}>
                             <h2 className="mb-6" style={{
                 fontFamily: 'Inter',
                 fontWeight: 700,
                 fontSize: 'clamp(24px, 5vw, 36px)',
                 lineHeight: 'clamp(28px, 6vw, 40px)',
                 letterSpacing: '0%',
                 textAlign: 'center',
                 textTransform: 'uppercase',
                 color: '#14213D'
               }}>
                 YOUR NEXT BIG GROWTH CHANNEL STARTS HERE
               </h2>
               
               <p className="mb-8" style={{
                 fontFamily: 'Inter',
                 fontWeight: 400,
                 fontSize: 'clamp(16px, 3vw, 18px)',
                 lineHeight: 'clamp(24px, 4vw, 30px)',
                 letterSpacing: '0%',
                 textAlign: 'center',
                 color: '#14213DCC'
               }}>
                 Join 2,000+ brands using Swaykart to discover creators, run campaigns, and measure results with complete clarity.
               </p>

               <button className="mb-4 px-8 py-4 rounded-lg transition-colors duration-200" style={{
                 fontFamily: 'Inter',
                 fontWeight: 600,
                 fontSize: 'clamp(14px, 2.5vw, 16px)',
                 lineHeight: '100%',
                 letterSpacing: '0%',
                 textAlign: 'center',
                 color: '#FFFFFF',
                 backgroundColor: '#FCA311',
                 border: 'none',
                 width: 'fit-content'
               }}>
                 Start Free Trial
               </button>

               <p style={{
                 fontFamily: 'Inter',
                 fontWeight: 400,
                 fontSize: 'clamp(12px, 2vw, 14px)',
                 lineHeight: 'clamp(16px, 3vw, 20px)',
                 letterSpacing: '0%',
                 textAlign: 'center',
                 color: '#6B7280'
               }}>
                 No credit card required. 14-day free trial.
               </p>
            </div>

            {/* Right Section - Signup Form */}
            <div className="p-8 lg:p-12 flex flex-col justify-center" style={{ backgroundColor: '#FFFFFF' }}>
              <div className="p-8 rounded-lg shadow-sm" style={{ backgroundColor: '#F9FAFB', border: '1px solid #F3F4F6' }}>
              {/* Form Header */}
              <div className="flex items-center mb-8">
                                 <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4">
                   <img 
                     src="/images/home/form-icon.svg" 
                     alt="Form icon" 
                     className="w-12 h-12"
                   />
                 </div>
                                 <h3 style={{
                   fontFamily: 'Inter',
                   fontWeight: 600,
                   fontSize: 'clamp(16px, 3vw, 20px)',
                   lineHeight: 'clamp(22px, 4vw, 28px)',
                   letterSpacing: '0%',
                   color: '#14213D'
                 }}>
                   Get started in minutes
                 </h3>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                                     <label htmlFor="fullName" className="block mb-2" style={{
                     fontFamily: 'Inter',
                     fontWeight: 500,
                     fontSize: 'clamp(12px, 2.5vw, 16px)',
                     lineHeight: 'clamp(18px, 3.5vw, 24px)',
                     letterSpacing: '0%',
                     color: '#374151'
                   }}>
                     Full Name
                   </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 'clamp(14px, 2.5vw, 16px)',
                      lineHeight: 'clamp(20px, 3.5vw, 24px)'
                    }}
                    required
                  />
                </div>

                {/* Work Email */}
                <div>
                                     <label htmlFor="workEmail" className="block mb-2" style={{
                     fontFamily: 'Inter',
                     fontWeight: 500,
                     fontSize: 'clamp(12px, 2.5vw, 16px)',
                     lineHeight: 'clamp(18px, 3.5vw, 24px)',
                     letterSpacing: '0%',
                     color: '#374151'
                   }}>
                     Work Email
                   </label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 'clamp(14px, 2.5vw, 16px)',
                      lineHeight: 'clamp(20px, 3.5vw, 24px)'
                    }}
                    required
                  />
                </div>

                {/* Company Size */}
                <div>
                                     <label htmlFor="companySize" className="block mb-2" style={{
                     fontFamily: 'Inter',
                     fontWeight: 500,
                     fontSize: 'clamp(12px, 2.5vw, 16px)',
                     lineHeight: 'clamp(18px, 3.5vw, 24px)',
                     letterSpacing: '0%',
                     color: '#374151'
                   }}>
                     Company Size
                   </label>
                  <div className="relative">
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none appearance-none bg-white cursor-pointer"
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 'clamp(14px, 2.5vw, 16px)',
                        lineHeight: 'clamp(20px, 3.5vw, 24px)',
                        color: formData.companySize ? '#1F2937' : '#9CA3AF',
                        backgroundColor: '#FFFFFF',
                        borderColor: '#D1D5DB',
                        transition: 'all 0.2s ease-in-out'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#FCA311';
                        e.target.style.boxShadow = '0 0 0 1px #FCA311';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#D1D5DB';
                        e.target.style.boxShadow = 'none';
                      }}
                      required
                    >
                      <option value="" disabled style={{ color: '#9CA3AF' }}>Select company size</option>
                      <option value="1-10" style={{ color: '#1F2937' }}>1-10 employees</option>
                      <option value="11-50" style={{ color: '#1F2937' }}>11-50 employees</option>
                      <option value="51-200" style={{ color: '#1F2937' }}>51-200 employees</option>
                      <option value="201-500" style={{ color: '#1F2937' }}>201-500 employees</option>
                      <option value="500+" style={{ color: '#1F2937' }}>500+ employees</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg 
                        className="w-5 h-5 transition-colors duration-200" 
                        style={{ color: '#6B7280' }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                                 <button
                   type="submit"
                   className="w-full py-4 rounded-lg transition-colors duration-200"
                   style={{
                     fontFamily: 'Inter',
                     fontWeight: 600,
                     fontSize: 'clamp(14px, 2.5vw, 18px)',
                     lineHeight: '100%',
                     textAlign: 'center',
                     color: '#FFFFFF',
                     backgroundColor: '#FCA311',
                     border: 'none'
                   }}
                 >
                   Get Started
                 </button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStartedSection
