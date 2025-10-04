import Link from 'next/link'
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-primary-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I&apos;m <span className="text-primary-600">TJ</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            An experienced product builder and software engineer with a passion for building impactful products from scratch. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="#projects" 
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View My Work
            </Link>
            <Link 
              href="#contact" 
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
            >
              Get In Touch
            </Link>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/t-tann8?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors">
              <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/tracytannjr/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors">
              <FaLinkedin size={32} />
            </a>
          </div>
          
          <div className="animate-bounce">
            <Link href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">
              <FaArrowDown size={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
