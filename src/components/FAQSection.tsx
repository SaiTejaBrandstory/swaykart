'use client'
import React, { useState } from 'react'

const FAQSection = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(0) // First item expanded by default
  const [showAll, setShowAll] = useState(false)

  const faqData = [
    {
      id: 1,
      question: "How does Swaykart find the right influencers for my brand?",
      answer: "Our AI analyzes your brand values, target audience, and campaign goals to match you with creators who have the right audience demographics, engagement rates, and content style. We go beyond follower counts to find creators who will drive real results for your brand."
    },
    {
      id: 2,
      question: "What types of campaigns can I run on Swaykart?",
      answer: "You can run various types of influencer marketing campaigns including product launches, brand awareness, seasonal promotions, user-generated content, and long-term partnerships. Our platform supports both one-time collaborations and ongoing brand ambassador programs."
    },
    {
      id: 3,
      question: "How do I track the performance of my campaigns?",
      answer: "Swaykart provides comprehensive analytics including reach, engagement, clicks, conversions, and ROI metrics. You'll get real-time dashboards, detailed reports, and insights to measure campaign success and optimize future strategies."
    },
    {
      id: 4,
      question: "What payment methods do you support?",
      answer: "We support multiple payment methods including credit cards, bank transfers, and digital wallets. All payments are processed securely through our escrow system, ensuring both brands and creators are protected throughout the collaboration process."
    },
    {
      id: 5,
      question: "Can I work with micro-influencers on Swaykart?",
      answer: "Absolutely! Our platform includes influencers of all sizes, from nano-influencers (1K-10K followers) to mega-influencers (1M+ followers). We believe in the power of authentic engagement, which often comes from micro and nano-influencers who have highly engaged audiences."
    },
    {
      id: 6,
      question: "How do I get started with Swaykart?",
      answer: "Getting started is simple! Sign up for a free account, complete your brand profile, set your campaign goals and budget, and our AI will start matching you with relevant influencers. You can launch your first campaign within minutes of signing up."
    }
  ]

  const visibleItems = showAll ? faqData : faqData.slice(0, 4)

  const toggleItem = (id: number) => {
    setExpandedItem(prev => prev === id ? null : id)
  }

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="mb-6" style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: 'clamp(20px, 5vw, 36px)',
            lineHeight: 'clamp(24px, 6vw, 40px)',
            letterSpacing: '0%',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#14213D'
          }}>
            YOU&apos;RE NOT THE FIRST ONE TO ASK
          </h2>
          <p style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: 'clamp(14px, 3vw, 18px)',
            lineHeight: 'clamp(20px, 4vw, 30px)',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#14213DCC'
          }}>
            Find answers to the most common questions about Swaykart.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <span style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: 'clamp(14px, 2.5vw, 20px)',
                  lineHeight: 'clamp(18px, 3.5vw, 28px)',
                  letterSpacing: '0%',
                  color: '#000000'
                }}>
                  {item.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      expandedItem === item.id ? 'rotate-180' : ''
                    }`}
                    style={{ color: '#6B7280' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              {expandedItem === item.id && (
                <div className="px-6 pb-4">
                  <p style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: 'clamp(12px, 2vw, 16px)',
                    lineHeight: 'clamp(18px, 3vw, 24px)',
                    letterSpacing: '0%',
                    color: '#00000099'
                  }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-8">
          <button
            onClick={toggleShowAll}
            className="px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: 'clamp(12px, 2vw, 16px)',
              lineHeight: 'clamp(18px, 3vw, 24px)',
              letterSpacing: '0%',
              color: '#14213D',
              backgroundColor: '#FFFFFF',
              border: '1px solid #14213D'
            }}
          >
            {showAll ? 'Show less' : 'Show more'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
