'use client'

import { useState, useEffect, useRef } from 'react'

interface TimelineEvent {
  year: string
  title: string
  description: string
  category: 'education' | 'work' | 'project' | 'achievement' | 'company'
}

const Timeline = () => {
  const [activeEvent, setActiveEvent] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const timelineRef = useRef<HTMLDivElement>(null)
  const eventRefs = useRef<(HTMLDivElement | null)[]>([])

  const timelineEvents: TimelineEvent[] = [
    {
      year: 'May 2021',
      title: 'Graduated Undergrad from University of Richmond',
      description: 'Began my journey in higher education, studying business and entrepreneurship.',
      category: 'education'
    },
    {
      year: 'August 2021',
      title: 'Closed college Storage and Logistics Company. Hired at Real Estate tech startup',
      description: 'Launched and operated a storage and logistics company that scaled across Virginia.',
      category: 'work'
    },
    {
      year: 'October 2023',
      title: 'Joined 35th St Builders ',
      description: 'Led client sourcing, product development for all new projects.',
      category: 'company'
    },
    {
      year: 'January 2024',
      title: 'Launched Relai',
      description: 'Launched Relai, introduced Exchange Zones - a new way to drop off and pick up items asynchronously.',
      category: 'company'
    },
    {
      year: 'March 2024',
      title: 'Completed TimeClad',
      description: 'Completed TimeClad, a full-stack e-commerce platform.',
      category: 'project'
    },
    {
      year: 'June 2024',
      title: 'Completed CRSci',
      description: 'Completed CRSci, a collaborative education technology platform.',
      category: 'project'
    },
    {
      year: 'September 2024',
      title: 'Completed 104010',
      description: 'Completed 104010, a fitness platform.',
      category: 'project'
    },
    {
      year: 'November 2024',
      title: 'Earned Coding Bootcamp Certificate',
      description: 'Graduated from Coding Dojo Bootcamp. Rebuilt Relai suite of applications.',
      category: 'education'
    },
    {
      year: 'December 2024',
      title: 'Launched Secure The Bags',
      description: 'Launched Secure The Bags Mobile App. Over 100 active users in the first month.',
      category: 'project'
    },
    {
      year: 'March 2025',
      title: 'EVALV',
      description: 'Launched EVALV Mobile App. Over 100 active users in the first month. EVALV is a mobile app that allows users to rent EV chargers from Exchange Zones.',
      category: 'project'
    },


  ]

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const handleScroll = () => {
      if (!timelineRef.current) return

      const timelineRect = timelineRef.current.getBoundingClientRect()
      const timelineTop = timelineRect.top
      const timelineBottom = timelineRect.bottom
      const windowHeight = window.innerHeight

      // Calculate which event should be active based on scroll position
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight - timelineTop) / (timelineBottom - timelineTop + windowHeight)
      ))

      const newActiveEvent = Math.floor(scrollProgress * timelineEvents.length)
      setActiveEvent(Math.min(newActiveEvent, timelineEvents.length - 1))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [timelineEvents.length, isClient])

  const getCategoryColor = (category: TimelineEvent['category']) => {
    switch (category) {
      case 'education':
        return 'bg-blue-500'
      case 'work':
        return 'bg-green-500'
      case 'project':
        return 'bg-purple-500'
      case 'achievement':
        return 'bg-orange-500'
      case 'company':
        return 'bg-indigo-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getCategoryIcon = (category: TimelineEvent['category']) => {
    switch (category) {
      case 'education':
        return '🎓'
      case 'work':
        return '💼'
      case 'project':
        return '🚀'
      case 'achievement':
        return '🏆'
      case 'company':
        return '🏢'
      default:
        return '📅'
    }
  }

  // Don't render until client-side hydration is complete
  if (!isClient) {
    return (
      <section id="timeline" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A timeline of key milestones and experiences that shaped my career
            </p>
          </div>
          <div className="flex justify-center items-center h-96">
            <div className="animate-pulse text-gray-500">Loading timeline...</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="timeline" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A timeline of key milestones and experiences that shaped my career
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                ref={(el) => {
                  eventRefs.current[index] = el
                }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } ${activeEvent === index ? 'scale-105' : 'scale-100'} transition-all duration-500`}
              >
                {/* Event Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className={`bg-white rounded-lg p-6 shadow-lg ${
                    activeEvent === index ? 'shadow-xl ring-2 ring-primary-500' : ''
                  } transition-all duration-500`}>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl">{getCategoryIcon(event.category)}</span>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(event.category)}`}>
                        {event.category.toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-500 ${
                    activeEvent === index 
                      ? `${getCategoryColor(event.category)} scale-125` 
                      : 'bg-gray-400'
                  }`}>
                    {activeEvent === index && (
                      <div className={`absolute inset-0 rounded-full ${getCategoryColor(event.category)} animate-ping`}></div>
                    )}
                  </div>
                </div>

                {/* Year */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
                  <div className={`text-4xl font-bold transition-all duration-500 ${
                    activeEvent === index ? 'text-primary-600 scale-110' : 'text-gray-400'
                  }`}>
                    {event.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
            <span className="text-sm text-gray-600">Timeline Progress:</span>
            <div className="flex space-x-1">
              {timelineEvents.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index <= activeEvent ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">{activeEvent + 1}/{timelineEvents.length}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
