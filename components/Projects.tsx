'use client'

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import TimeCladScreenshot from '../assets/images/TimeCladScreenshot.png'
import TimeCladAdminScreenshot from '../assets/images/TimeCladAdminScreenshot.png'
import CRSciScreenshot from '../assets/images/CRSciScreenshot.png'
import Screenshot104010 from '../assets/images/104010Screenshot.png'
import Screenshot104010Admin from '../assets/images/104010-AdminScreenshot.png'
import HOPEScreenshot from '../assets/images/HOPEScreenshot.png'
import PortalScreenshot from '../assets/images/PortalScreenshot.png'
import EVALVLogo from '../assets/images/EVALVLogo.png'
import STBLogo from '../assets/images/STBLogo.png'
import AvenuLogo from '../assets/images/AvenuLogo.png'
import UnionFithubLogo from '../assets/images/UnionFithubLogo.png'

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <Link href={`/projects/${project.id}`} className="block">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <div className="h-48 bg-gray-200 flex items-center justify-center relative overflow-hidden">
          {project.image ? (
            <Image 
              src={project.image} 
              alt={`${project.title} screenshot`}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-500">
              <div className="w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <span className="text-sm font-medium">Project Preview</span>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech: string, index: number) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub />
              <span>Code</span>
            </a>
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

const Projects = () => {
  const projects = [
    {
      id: 'timeclad',
      title: 'TimeClad - E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe','Express.js', 'Socket.io', 'TypeScript', 'Tailwind CSS', 'Redis'],
      githubUrl: 'https://github.com/t-tann8/TimeClad',
      // liveUrl: 'https://example.com',
      image: TimeCladScreenshot
    },
    // {
    //   id: 'timeclad-admin',
    //   title: 'TimeClad Admin - E-Commerce Platform Admin',
    //   description: 'A responsive admin dashboard for the TimeClad e-commerce platform.',
    //   technologies: ['React', 'Tailwind CSS', 'TypeScript','Express.js', 'Socket.io', 'TypeScript', 'Redis'],
    //   githubUrl: 'https://github.com/t-tann8/TimeClad-Admin',
    //   liveUrl: 'https://example.com',
    //   image: TimeCladAdminScreenshot
    // },
    {
      id: 'crsci',
      title: 'CRSci - Ed Tech Platform',
      description: 'A collaborative education technology platform for teachers, students and principals to track and elevate student performances.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Node.js', 'Figma'],
      githubUrl: 'https://github.com/t-tann8/CRSci',
      // liveUrl: 'https://example.com',
      image: CRSciScreenshot
    },
    {
      id: '104010',
      title: '104010 - Fitness Platform',
      description: 'Innovative fitness platform that allows custom workout plans and videos for class and individual coaching sessions.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Node.js', 'Figma'],
      githubUrl: 'https://github.com/t-tann8/104010',
      // liveUrl: 'https://example.com',
      image: Screenshot104010
    },
    // {
    //   id: '104010-admin',
    //   title: '104010 Admin - Fitness Platform Admin',
    //   description: 'A responsive admin dashboard for the 104010 fitness platform.',
    //   technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Node.js', 'Figma'],
    //   githubUrl: 'https://github.com/t-tann8/104010-Admin',
    //   liveUrl: 'https://example.com',
    //   image: Screenshot104010Admin
    // },
    {
      id: 'hope',
      title: 'HOPE (Hearts Open Primary Education) - Website',
      description: 'A landing page for the HOPE (Hearts Open Primaru Education) organization.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'],
      githubUrl: 'https://github.com/t-tann8/HOPE',
      // liveUrl: null,
      image: HOPEScreenshot
    },
    {
      id: 'task-manager',
      title: 'Relai Portal',
      description: 'A comprehensive project management application with team collaboration features and real-time updates.',
      technologies: ['Stripe', 'Node.js', 'React', 'Golang', 'Figma', 'Tailwind CSS', 'PostgresSQL', 'TypeScript', 'Docker'],
      githubUrl: 'https://github.com/t-tann8?tab=repositories',
      liveUrl: 'https://portal.relai.us/',
      image: PortalScreenshot
    },
    {
      id: 'weather-app',
      title: 'EVALV',
      description: 'A Relai App built to allow EV owners to rent charging adapters.',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Node.js', 'AWS EC2 Instance', 'DynamoDB', 'AWS S3'],
      githubUrl: 'https://github.com/t-tann8?tab=repositories',
      liveUrl: 'https://apps.apple.com/us/app/evalv/id6738658440',
      image: EVALVLogo
    },
    {
      id: 'blog-platform',
      title: 'Secure The Bags',
      description: 'A Relai App built to allow event goers to store their belongings and retrieve them later at Exchange Zones.',
      technologies: ['React Native', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Node.js', 'Figma', 'Redux', 'Firebase'],
      githubUrl: 'https://github.com/t-tann8?tab=repositories',
      liveUrl: 'https://apps.apple.com/us/app/secure-the-bags/id6717573132?l=ru',
      image: STBLogo
    },
    {
      id: 'chat-app',
      title: 'Avenu',
      description: 'A Relai App built for Pittsburgh Co-Working Spaces to offer a seamless storage experience for their members.',
      technologies: ['React Native', 'Express.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Firebase'],
      githubUrl: 'https://github.com/t-tann8?tab=repositories',
      liveUrl: 'https://apps.apple.com/us/app/avenu/id6739266506',
      image: AvenuLogo
    },
    {
      id: 'e-learning',
      title: 'Union Fithub',
      description: 'A Relai App built for Atlanta Gyms to offer a seamless storage experience for their members.',
      technologies: ['React Native', 'Node.js', 'AWS S3', 'Stripe', 'Firebase'],
      githubUrl: 'https://github.com/t-tann8?tab=repositories',
      liveUrl: 'https://apps.apple.com/us/app/the-union-fithub/id6740445208',
      image: UnionFithubLogo
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Product Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at the problems, use cases and solutions I&apos;ve built from scratch using the most modern technologies and frameworks.
          </p>
        </div>
        
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 min-w-max">
            {projects.map((project, index) => (
              <div key={index} className="flex-shrink-0 w-80">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            <FaGithub />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
