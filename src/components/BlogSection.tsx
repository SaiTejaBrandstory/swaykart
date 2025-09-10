'use client'
import React from 'react'

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/images/home/blog-1.png",
      category: "Strategy",
      date: "June 12, 2023",
      title: "5 Ways to Measure Influencer Marketing ROI Beyond Engagement",
      description: "Learn how to track the metrics that actually matter for your business goals and prove the value of your influencer campaigns.",
      readMore: "Read More"
    },
    {
      id: 2,
      image: "/images/home/blog-2.png",
      category: "Trends",
      date: "May 28, 2023",
      title: "Micro vs. Macro Influencers: Which is Right for Your Brand?",
      description: "A data-driven comparison of working with micro and macro influencers, with actionable insights for different campaign goals.",
      readMore: "Read More"
    },
    {
      id: 3,
      image: "/images/home/blog-3.png",
      category: "Legal",
      date: "May 15, 2023",
      title: "The Complete Guide to Influencer Contracts: Protect Your Brand",
      description: "Everything you need to know about creating legally sound influencer contracts that protect your brand and set clear expectations.",
      readMore: "Read More"
    }
  ]

  return (
    <section className="py-20 lg:py-24" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-16">
          <div className="mb-6 sm:mb-0">
            <h2 className="mb-4" style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: 'clamp(20px, 5vw, 36px)',
              lineHeight: 'clamp(24px, 6vw, 40px)',
              letterSpacing: '0%',
              textTransform: 'uppercase',
              color: '#14213D'
            }}>
              LATEST FROM OUR BLOG
            </h2>
            <p style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: 'clamp(14px, 3vw, 18px)',
              lineHeight: 'clamp(20px, 4vw, 30px)',
              letterSpacing: '0%',
              color: '#14213DCC'
            }}>
              Tips, strategies, and insights to elevate your influencer marketing game.
            </p>
          </div>
          
          <button
            className="px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: 'clamp(14px, 2vw, 18px)',
              lineHeight: 'clamp(18px, 3vw, 24px)',
              letterSpacing: '0%',
              color: '#14213D',
              backgroundColor: '#FFFFFF',
              border: '1px solid #14213D'
            }}
          >
            View All
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              style={{ borderRadius: '12px' }}
            >
              {/* Image */}
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category and Date */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#FCA311',
                      backgroundColor: '#FCA3111A'
                    }}
                  >
                    {post.category}
                  </span>
                  <span style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 1.5vw, 16px)',
                    lineHeight: 'clamp(14px, 2vw, 16px)',
                    letterSpacing: '0%',
                    color: '#6B7280'
                  }}>
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-3" style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: 'clamp(16px, 3vw, 20px)',
                  lineHeight: 'clamp(22px, 4vw, 28px)',
                  letterSpacing: '0%',
                  color: '#000000'
                }}>
                  {post.title}
                </h3>

                {/* Description */}
                <p className="mb-4" style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  lineHeight: 'clamp(20px, 3.5vw, 24px)',
                  letterSpacing: '0%',
                  color: '#00000099'
                }}>
                  {post.description}
                </p>

                {/* Read More Link */}
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium hover:text-orange-600 transition-colors duration-200"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    lineHeight: 'clamp(20px, 3.5vw, 24px)',
                    letterSpacing: '0%',
                    color: '#FCA311'
                  }}
                >
                  {post.readMore}
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
