'use client'
import React from 'react'

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Smart Discovery",
      tag: "AI POWERED",
      description: "AI that actually understands your target audience. Find creators based on audience demographics, engagement rates, content quality, and brand alignment.",
      icon: "/images/home/feature-icon-1.svg",
      iconBg: "bg-orange-500",
      tagBg: "bg-orange-100",
      tagText: "text-orange-800",
      topRightDot: "#FCA311",
      bottomLeftDot: "#D1D5DB"
    },
    {
      id: 2,
      title: "Campaign Control",
      tag: "CENTRALIZED",
      description: "One dashboard for everything no scattered spreadsheets. Manage briefs, contracts, content approvals, and payments in a single, unified place.",
      icon: "/images/home/feature-icon-2.svg",
      iconBg: "bg-blue-900",
      tagBg: "bg-gray-100",
      tagText: "text-gray-800",
      topRightDot: "#14213D",
      bottomLeftDot: "#D1D5DB",
      tagColor: "#14213D",
      tagBackground: "#14213D1A"
    },
    {
      id: 3,
      title: "Money Sorted",
      tag: "SECURE",
      description: "Milestone payments that protect both sides. Set up escrow payments that release automatically when campaign goals and deliverables are met.",
      icon: "/images/home/feature-icon-3.svg",
      iconBg: "bg-blue-900",
      tagBg: "bg-gray-100",
      tagText: "text-gray-800",
      topRightDot: "#14213D",
      bottomLeftDot: "#D1D5DB",
      tagColor: "#14213D",
      tagBackground: "#14213D1A"
    },
    {
      id: 4,
      title: "Accurate Results",
      tag: "DATA DRIVEN",
      description: "See what's working, cut what's not, and scale what matters. Get real-time, cross-platform analytics on your campaign performance and overall ROI.",
      icon: "/images/home/feature-icon-4.svg",
      iconBg: "bg-orange-500",
      tagBg: "bg-orange-100",
      tagText: "text-orange-800",
      topRightDot: "#FCA311",
      bottomLeftDot: "#D1D5DB"
    }
  ]

  return (
    <section style={{ backgroundColor: '#FAFAFA' }}>
      <div className="pt-20 pb-20 lg:pt-24 lg:pb-24 px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="mb-4 lg:mb-6" style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: 'clamp(24px, 5vw, 36px)',
            lineHeight: 'clamp(28px, 6vw, 40px)',
            letterSpacing: '0%',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#14213D'
          }}>
            EVERYTHING YOU NEED TO RUN INFLUENCER MARKETING LIKE A PRO
          </h2>
          <p className="mb-6 lg:mb-8" style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: 'clamp(16px, 3vw, 18px)',
            lineHeight: 'clamp(24px, 4vw, 30px)',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#14213DCC'
          }}>
            Powerful tools that simplify every aspect of your influencer campaigns.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
                             className="bg-white px-3 py-6 lg:px-4 lg:py-8 relative flex items-start space-x-4 lg:space-x-6 hover:shadow-lg transition-shadow duration-300"
              style={{ borderRadius: '12px' }}
            >
                             {/* Decorative Dots */}
               <div className="absolute" style={{ top: '16px', right: '16px', zIndex: 10 }}>
                 <div className="rounded-full" style={{ backgroundColor: feature.topRightDot, width: '10px', height: '10px' }}></div>
               </div>
               <div className="absolute" style={{ bottom: '14px', left: '-10px', zIndex: 10 }}>
                 <div className="rounded-full" style={{ backgroundColor: feature.bottomLeftDot, width: '10px', height: '10px' }}></div>
               </div>

              {/* Icon - Left Side */}
              <div className="flex items-center justify-center flex-shrink-0">
                <img 
                  src={feature.icon} 
                  alt={`${feature.title} icon`}
                  style={{ 
                    width: 'clamp(36px, 8vw, 46px)', 
                    height: 'clamp(36px, 8vw, 46px)' 
                  }}
                />
              </div>

              {/* Content - Right Side */}
              <div className="flex-1">
                {/* Title */}
                <h3 className="mb-3 lg:mb-4" style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: 'clamp(16px, 3vw, 20px)',
                  lineHeight: 'clamp(22px, 4vw, 28px)',
                  letterSpacing: '0%',
                  color: '#14213D'
                }}>
                  {feature.title}
                </h3>

                {/* Tag */}
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-medium mb-4" style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: 'clamp(12px, 2.5vw, 14px)',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: feature.tagColor || '#FCA311',
                  backgroundColor: feature.tagBackground || '#FCA3111A',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '24px'
                }}>
                  {feature.tag}
                </div>

                {/* Description */}
                <p style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 2.5vw, 18px)',
                  lineHeight: 'clamp(20px, 3.5vw, 30px)',
                  color: '#00000099'
                }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
