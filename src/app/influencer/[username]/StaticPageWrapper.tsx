'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface StaticPageWrapperProps {
  htmlContent: string
  username: string
}

export default function StaticPageWrapper({ htmlContent, username }: StaticPageWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [processedContent, setProcessedContent] = useState(htmlContent)

  useEffect(() => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlContent, 'text/html')
    
    const profileImages = doc.querySelectorAll('img.profile-img')
    profileImages.forEach(img => {
      const originalSrc = img.getAttribute('src')
      if (originalSrc && originalSrc.includes('cdninstagram.com')) {
        const encodedUrl = encodeURIComponent(originalSrc)
        img.setAttribute('src', `/api/image-proxy?url=${encodedUrl}`)
      }
    })
    
    setProcessedContent(doc.documentElement.outerHTML)
    
    const styleElements = doc.querySelectorAll('style')
    styleElements.forEach(style => {
      const newStyle = document.createElement('style')
      newStyle.textContent = style.textContent
      newStyle.setAttribute('data-injected', 'true')
      document.head.appendChild(newStyle)
    })

    const linkElements = doc.querySelectorAll('link[rel="stylesheet"]')
    linkElements.forEach(link => {
      const href = link.getAttribute('href')
      if (href && !document.querySelector(`link[href="${href}"]`)) {
        const newLink = document.createElement('link')
        newLink.rel = 'stylesheet'
        newLink.href = href
        newLink.setAttribute('data-injected', 'true')
        document.head.appendChild(newLink)
      }
    })

    const scriptElements = doc.querySelectorAll('script')
    const externalScripts: Array<{src: string, async?: boolean, defer?: boolean, type: string}> = []
    const inlineScripts: Array<{content: string, type: string}> = []

    scriptElements.forEach(script => {
      if (script.src) {
        externalScripts.push({
          src: script.src,
          async: script.async,
          defer: script.defer,
          type: script.type || 'text/javascript'
        })
      } else if (script.textContent && script.textContent.trim()) {
        inlineScripts.push({
          content: script.textContent,
          type: script.type || 'text/javascript'
        })
      }
    })

    const loadExternalScripts = () => {
      return Promise.all(
        externalScripts.map(scriptInfo => {
          return new Promise<void>((resolve) => {
            const script = document.createElement('script')
            script.src = scriptInfo.src
            script.type = scriptInfo.type
            script.setAttribute('data-injected', 'true')
            
            if (scriptInfo.async) script.async = true
            if (scriptInfo.defer) script.defer = true

            script.onload = () => resolve()
            script.onerror = () => resolve() 

            document.head.appendChild(script)
          })
        })
      )
    }

    const executeInlineScripts = () => {
      inlineScripts.forEach((scriptInfo, index) => {
        try {
          const scriptElement = document.createElement('script')
          scriptElement.type = scriptInfo.type
          scriptElement.setAttribute('data-injected', 'true')
          scriptElement.setAttribute('data-script-id', `script-${username}-${index}`)
          
          const existingScript = document.querySelector(`[data-script-id="script-${username}-${index}"]`)
          if (existingScript && existingScript !== scriptElement) {
            return
          }

          scriptElement.textContent = scriptInfo.content
          document.body.appendChild(scriptElement)

        } catch (error) {
          console.error(`Error setting up script ${index + 1}:`, error)
        }
      })
    }

    setTimeout(() => {
      loadExternalScripts().then(() => {
        setTimeout(() => {
          executeInlineScripts()
          
          setTimeout(() => {
            if (typeof (window as any).setActiveTab === 'function') {
              (window as any).setActiveTab('overview')
            } else {
              const tabButtons = document.querySelectorAll('.tab-btn')
              const tabContents = document.querySelectorAll('.tab-content')
              
              if (tabButtons.length > 0) {
                tabButtons.forEach(btn => {
                  const isOverview = btn.id === 'tab-overview'
                  const htmlBtn = btn as HTMLElement
                  htmlBtn.style.backgroundColor = isOverview ? '#FCA311' : 'transparent'
                  htmlBtn.style.color = isOverview ? 'white' : '#14213D'
                })
                
                tabContents.forEach(content => {
                  content.classList.toggle('active', content.id === 'overview')
                })
              }
            }
          }, 200)
          
          setIsLoading(false)
        }, 300)
      })
    }, 100)

    return () => {
      const injectedElements = document.querySelectorAll('[data-injected="true"]')
      injectedElements.forEach(el => {
        try {
          el.remove()
        } catch (e) {
        }
      })

      const userScripts = document.querySelectorAll(`[data-script-id^="script-${username}-"]`)
      userScripts.forEach(el => {
        try {
          el.remove()
        } catch (e) {
        }
      })
    }
  }, [htmlContent, username])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading profile...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div 
        className="static-content-container"
        dangerouslySetInnerHTML={{ __html: processedContent }}
        style={{ minHeight: '100vh' }}
      />
      <Footer />
    </div>
  )
}