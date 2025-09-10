'use client'
import React from 'react'

const PartnerInGrowth = () => {
  const features = [
    {
      id: 1,
      title: "Smarter Performance Tracking",
      description: "Go beyond vanity metrics with attribution models that show the real impact of your influencer campaigns on sales and brand awareness.",
      icon: "/images/home/partner/partner-icon-1.svg"
    },
    {
      id: 2,
      title: "Growth That Scales With Data",
      description: "Our AI learns from your campaigns to continuously improve creator recommendations and audience targeting over time.",
      icon: "/images/home/partner/partner-icon-2.svg"
    },
    {
      id: 3,
      title: "Creators That Truly Fit Your Brand",
      description: "Our matching algorithm considers content style, audience demographics, engagement quality, and brand values alignment.",
      icon: "/images/home/partner/partner-icon-3.svg"
    },
    {
      id: 4,
      title: "Campaigns You Can Count On",
      description: "Our milestone-based contracts and clear deliverables ensure creators deliver what they promise, when they promise it.",
      icon: "/images/home/partner/partner-icon-4.svg"
    },
    {
      id: 5,
      title: "Security That Never Sleeps",
      description: "Enterprise-grade security protocols protect your campaign data, creative assets, and payment information around the clock.",
      icon: "/images/home/partner/partner-icon-5.svg"
    },
    {
      id: 6,
      title: "Everything in One Place",
      description: "From discovery to reporting, manage your entire influencer marketing strategy in a single, intuitive platform.",
      icon: "/images/home/partner/partner-icon-6.svg"
    }
  ]

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="mb-6" style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: 'clamp(24px, 5vw, 36px)',
            lineHeight: 'clamp(28px, 6vw, 40px)',
            letterSpacing: '0%',
            textAlign: 'center',
            textTransform: 'uppercase'
          }}>
            <span style={{ color: '#14213D' }}>BEYOND A PLATFORM,</span>
            <span style={{ color: '#FCA311' }}> A PARTNER IN GROWTH</span>
          </h2>
          <p style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: 'clamp(14px, 2.5vw, 18px)',
            lineHeight: 'clamp(20px, 3.5vw, 30px)',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#4B5563'
          }}>
            We&apos;re not just another influencer platform. We&apos;re your strategic partner for growth.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-8 hover:shadow-lg transition-shadow duration-300"
              style={{ backgroundColor: '#FAFAFA', borderRadius: '12px' }}
            >
              {/* Icon */}
              <div className="mb-6">
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  style={{
                    width: '48px',
                    height: '48px'
                  }}
                />
              </div>

              {/* Title */}
              <h3 className="mb-4" style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: 'clamp(16px, 3vw, 20px)',
                lineHeight: 'clamp(20px, 4vw, 100%)',
                letterSpacing: '0%',
                color: '#000000'
              }}>
                {feature.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: 'clamp(14px, 2.5vw, 18px)',
                lineHeight: 'clamp(20px, 3.5vw, 30px)',
                letterSpacing: '0%',
                color: '#00000099'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerInGrowth
