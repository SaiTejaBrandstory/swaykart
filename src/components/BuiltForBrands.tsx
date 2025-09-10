'use client'
import React from 'react'

interface Feature {
  id: number
  title: string
  description: string
  icon: string
  type: 'text' | 'text-right-icon' | 'image'
  image?: string
  tag?: string
}

const BuiltForBrands = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: "INFLUENCERS THAT DELIVER",
      description: "Work with creators who drive real engagement, not just vanity metrics like follower count.",
      icon: "/images/home/built-for-brands/bfb-icon-1.svg",
      type: "text-right-icon"
    },
    {
      id: 2,
      title: "TRANSPARENCY",
      description: "Pay less than agencies while getting complete visibility into campaign performance.",
      icon: "/images/home/built-for-brands/bfb-icon-2.svg",
      type: "image",
      image: "/images/home/built-for-brands/bfb-1.png"
    },
    {
      id: 3,
      title: "TRANSPARENCY",
      description: "Pay less than agencies while getting complete visibility into campaign performance.",
      icon: "/images/home/built-for-brands/bfb-icon-2.svg",
      type: "text-right-icon"
    },
    {
      id: 4,
      title: "AI POWERED AUTOMATION",
      description: "Our AI handles the grunt work of campaign setup, letting you focus on strategy and growth.",
      icon: "/images/home/built-for-brands/bfb-icon-3.svg",
      type: "text-right-icon"
    },
    {
      id: 5,
      title: "PERFECT FOR GROWTH STAGE BRANDS",
      description: "Designed specifically for MSMEs and growth-stage companies looking to scale efficiently.",
      icon: "/images/home/built-for-brands/bfb-icon-4.svg",
      type: "text-right-icon"
    },
    {
      id: 6,
      title: "SCALABLE SOLUTIONS",
      description: "Grow your influencer marketing efforts as your brand expands with our flexible platform.",
      icon: "/images/home/built-for-brands/bfb-icon-2.svg",
      type: "image",
      image: "/images/home/built-for-brands/bfb-2.png"
    }
  ]

  return (
    <section className="py-20 lg:py-24" style={{ backgroundColor: '#FAFAFA' }}>
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
             textTransform: 'uppercase',
             color: '#14213D'
           }}>
             BUILT FOR BRANDS THAT MOVE FAST
           </h2>
           <p style={{
             fontFamily: 'Inter',
             fontWeight: 400,
             fontSize: 'clamp(14px, 2.5vw, 18px)',
             lineHeight: 'clamp(20px, 3.5vw, 30px)',
             letterSpacing: '0%',
             textAlign: 'center',
             color: '#14213DCC'
           }}>
             Perfect for MSMEs and growth-stage brands looking to scale their influencer marketing efforts.
           </p>
        </div>

        {/* Features Grid - 2 rows x 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative hover:shadow-lg transition-shadow duration-300"
              style={{ 
                backgroundColor: '#FFFFFF', 
                borderRadius: '12px',
                minHeight: '300px'
              }}
            >

                             {feature.type === 'text' ? (
                 /* Text Card Layout with Vertically Centered Content */
                 <div className="p-6 lg:p-8 h-full flex flex-col">
                   {/* Icon */}
                   <div className="mb-6">
                     <img
                       src={feature.icon}
                       alt={`${feature.title} icon`}
                       style={{
                         width: 'clamp(36px, 8vw, 46px)',
                         height: 'clamp(36px, 8vw, 46px)'
                       }}
                     />
                   </div>

                   {/* Content - Vertically Centered */}
                   <div className="flex-1 flex flex-col justify-center">
                     {/* Title */}
                     <h3 className="mb-4" style={{
                       fontFamily: 'Inter',
                       fontWeight: 600,
                       fontSize: 'clamp(20px, 4vw, 28px)',
                       lineHeight: 'clamp(26px, 5vw, 38px)',
                       letterSpacing: '0%',
                       textAlign: 'center',
                       textTransform: 'uppercase',
                       color: '#14213D'
                     }}>
                       {feature.title}
                     </h3>

                     {/* Tag (if exists) */}
                     {feature.tag && (
                       <div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-medium mb-4" style={{
                         fontFamily: 'Inter',
                         fontWeight: 500,
                         fontSize: 'clamp(14px, 2.5vw, 16px)',
                         lineHeight: '100%',
                         letterSpacing: '0%',
                         color: '#FCA311',
                         backgroundColor: '#FCA3111A',
                         display: 'inline-flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         minHeight: '24px'
                       }}>
                         {feature.tag}
                       </div>
                     )}

                     {/* Description */}
                     <p style={{
                       fontFamily: 'Inter',
                       fontWeight: 400,
                       fontSize: 'clamp(14px, 2.5vw, 18px)',
                       lineHeight: 'clamp(20px, 3.5vw, 30px)',
                       letterSpacing: '0%',
                       textAlign: 'center',
                       color: '#00000099'
                     }}>
                       {feature.description}
                     </p>
                   </div>
                 </div>
               ) : feature.type === 'text-right-icon' ? (
                 /* Text Card with Right-Aligned Icon at Top and Vertically Centered Content */
                 <div className="p-6 lg:p-8 h-full flex flex-col">
                   {/* Icon - Right Aligned */}
                   <div className="flex justify-end">
                     <img
                       src={feature.icon}
                       alt={`${feature.title} icon`}
                       style={{
                         width: 'clamp(36px, 8vw, 46px)',
                         height: 'clamp(36px, 8vw, 46px)'
                       }}
                     />
                   </div>

                   {/* Content - Vertically Centered */}
                   <div className="flex-1 flex flex-col justify-center">
                     {/* Title */}
                     <h3 className="mb-4" style={{
                       fontFamily: 'Inter',
                       fontWeight: 600,
                       fontSize: 'clamp(20px, 4vw, 28px)',
                       lineHeight: 'clamp(26px, 5vw, 38px)',
                       letterSpacing: '0%',
                       textAlign: 'center',
                       textTransform: 'uppercase',
                       color: '#14213D'
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
                       textAlign: 'center',
                       color: '#00000099'
                     }}>
                       {feature.description}
                     </p>
                   </div>
                 </div>
               ) : (
                /* Image Card Layout - Full Image */
                <div className="h-full">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    style={{
                      borderRadius: '12px'
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BuiltForBrands
