'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import PersonalPhoto1 from '../assets/images/PersonalPhoto1.png'
import PersonalPhoto2 from '../assets/images/PersonalPhoto2.png'
import PersonalPhoto3 from '../assets/images/PersonalPhoto3.png'

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const carouselImages = [
    {
      src: PersonalPhoto1,
      alt: 'Personal Photo 1',
      title: 'About Me'
    },
    {
      src: PersonalPhoto2,
      alt: 'Personal Photo 2',
      title: 'Personal'
    },
    {
      src: PersonalPhoto3,
      alt: 'Personal Photo 3',
      title: 'Portfolio'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 8000) // Change image every 6 seconds

    return () => clearInterval(interval)
  }, [carouselImages.length])

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about what drives me as a developer and product builder.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Image Carousel */}
            <div className="relative">
              <div className="aspect-square bg-white rounded-lg shadow-lg overflow-hidden">
                <Image 
                  src={carouselImages[currentImageIndex].src}
                  alt={carouselImages[currentImageIndex].alt}
                  fill
                  className="object-cover transition-opacity duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white text-lg font-semibold">
                    {carouselImages[currentImageIndex].title}
                  </h3>
                </div>
              </div>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-primary-600' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
              I’ve always been a builder at heart. My fascination with creating things started early — assembling furniture for my family and neighbors when I was just seven years old. That same curiosity and drive to build from scratch has stayed with me ever since.
              </p>
              <p>
              In college, I founded and operated a storage and logistics company that scaled across the state of Virginia. Afterward, I founded Relai, a tech company where my journey into software development began. Initially, we partnered with development agencies to build our first products, but I soon began teaching myself to code to better manage our teams and reduce dependency on outsourced developers. This curiosity led me to attend a coding bootcamp, where I learned how to build full-stack applications end-to-end. Since then, I’ve been building my own products — you can explore some of them in the Projects section.
              </p>
              <p>
              When I’m not coding, I’m usually reading about personal finance, psychology, or emerging technologies. I also enjoy educational podcasts, documentaries, and the occasional action or suspense film.
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">What I Do</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-600">Frontend Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-600">Backend Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-600">Deployment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-600">Mobile Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-600">Product Management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-600">Product Marketing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
