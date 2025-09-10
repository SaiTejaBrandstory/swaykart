'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ProcessSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "1. Spot the Right Influencers",
      description: "Harness the power of AI-driven search to instantly identify creators who perfectly align with your brand values and resonate with your target audience demographics.",
      icon: "/images/home/process1-icon.svg",
      image: "/images/home/process-1.png"
    },
    {
      id: 2,
      title: "2. Send Invites Seamlessly",
      description: "Skip the endless back-and-forth emails—send tailored campaign briefs and personalized invites to creators with a single click.",
      icon: "/images/home/process2-icon.svg",
      image: "/images/home/process-2.png"
    },
    {
      id: 3,
      title: "3. Manage Everything",
      description: "Simplify operations by managing contracts, task assignments, and secure payments all within one intuitive dashboard—no more juggling scattered spreadsheets.",
      icon: "/images/home/process3-icon.svg",
      image: "/images/home/process-3.png"
    },
    {
      id: 4,
      title: "4. Track Real Results",
      description: "Stay ahead of the curve with real-time tracking of engagement, conversions, and ROI, enabling you to refine and optimize campaigns on the go for maximum impact.",
      icon: "/images/home/process4-icon.svg",
      image: "/images/home/process-4.png"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }
  return (
            <section className="bg-white">
          <div>
            <div className="grid lg:grid-cols-2 items-center">
              {/* Left Content */}
              <div className="py-6 lg:py-8 px-4 sm:px-6 lg:px-12 xl:px-16">
            <div>
              <h2 className="mb-4 lg:mb-6" style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: 'clamp(24px, 5vw, 36px)',
                lineHeight: 'clamp(28px, 6vw, 40px)',
                textAlign: 'center',
                textTransform: 'uppercase',
                color: '#14213D'
              }}>
                FROM SEARCH TO ROI - DONE IN FOUR CLICKS
              </h2>
              <p className="mb-6 lg:mb-8" style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: 'clamp(16px, 3vw, 18px)',
                lineHeight: 'clamp(24px, 4vw, 30px)',
                textAlign: 'center',
                color: '#14213DCC'
              }}>
                Our streamlined process takes you from finding creators to measuring results, all in one platform.
              </p>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="flex-shrink-0">
                <img
                  src={slides[currentSlide].icon}
                  alt={`Process ${currentSlide + 1} Icon`}
                  style={{
                    width: 'clamp(40px, 8vw, 48px)',
                    height: 'clamp(40px, 8vw, 48px)',
                    opacity: 1,
                    borderRadius: '8px'
                  }}
                />
              </div>
              <div className="flex-1">
                <h3 className="mb-3 lg:mb-4" style={{
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  fontSize: 'clamp(16px, 3vw, 20px)',
                  lineHeight: 'clamp(22px, 4vw, 28px)',
                  color: '#000000'
                }}>
                  {slides[currentSlide].title}
                </h3>
                <p className="mb-6 lg:mb-8" style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: 'clamp(16px, 3vw, 18px)',
                  lineHeight: 'clamp(24px, 4vw, 30px)',
                  color: currentSlide === 0 ? '#00000099' : '#4B5563'
                }}
                dangerouslySetInnerHTML={{ __html: slides[currentSlide].description }}
                />
              </div>
            </div>

                           {/* Progress Dots and Arrows */}
               <div className="flex items-center justify-between mt-4 lg:mt-0">
                 <div className="flex space-x-2 sm:space-x-3">
                   {slides.map((_, index) => (
                     <button
                       key={index}
                       onClick={() => goToSlide(index)}
                       className="rounded-full transition-all duration-300 hover:opacity-80 hover:scale-110 hover:shadow-lg"
                       style={{
                         width: currentSlide === index ? 'clamp(30px, 6vw, 39px)' : '5px',
                         height: '5px',
                         backgroundColor: currentSlide === index ? '#FCA311' : '#14213D',
                         opacity: 1,
                         borderRadius: '60px'
                       }}
                     ></button>
                   ))}
                 </div>
                 <div className="flex space-x-2 sm:space-x-4">
                   <button 
                     onClick={prevSlide}
                     className="rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#14213D2A] hover:scale-110 hover:shadow-lg group"
                     style={{
                       width: 'clamp(36px, 7vw, 42px)',
                       height: 'clamp(36px, 7vw, 42px)',
                       backgroundColor: '#14213D1A',
                       opacity: 1
                     }}
                   >
                     <FontAwesomeIcon icon={faArrowLeft} className="text-[#14213d] text-sm sm:text-base group-hover:text-[#FCA311] transition-colors duration-300" />
                   </button>
                   <button 
                     onClick={nextSlide}
                     className="rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#14213D2A] hover:scale-110 hover:shadow-lg group"
                     style={{
                       width: 'clamp(36px, 7vw, 42px)',
                       height: 'clamp(36px, 7vw, 42px)',
                       backgroundColor: '#14213D1A',
                       opacity: 1
                     }}
                   >
                     <FontAwesomeIcon icon={faArrowRight} className="text-[#14213d] text-sm sm:text-base group-hover:text-[#FCA311] transition-colors duration-300" />
                   </button>
                 </div>
               </div>
          </div>

          {/* Right Content - Image */}
          <div>
            <img
              src={slides[currentSlide].image}
              alt={`Process Step ${currentSlide + 1}`}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
