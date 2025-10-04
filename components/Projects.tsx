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

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <Link href={`/projects/${project.id}`} className="block">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <div className="h-48 bg-gray-200 flex items-center justify-center relative overflow-hidden">
          <Image 
            src={project.image} 
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
          />
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
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/t-tann8/TimeClad',
      liveUrl: 'https://example.com',
      image: TimeCladScreenshot
    },
    {
      id: 'timeclad-admin',
      title: 'TimeClad Admin - E-Commerce Platform Admin',
      description: 'A responsive admin dashboard for the TimeClad e-commerce platform.',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
      githubUrl: 'https://github.com/t-tann8/TimeClad-Admin',
      liveUrl: 'https://example.com',
      image: TimeCladAdminScreenshot
    },
    {
      id: 'crsci',
      title: 'CRSci - Ed Tech Platform',
      description: 'A collaborative education technology platform for teachers, students and principals to track and elevate student performances.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      githubUrl: 'https://github.com/t-tann8/CRSci',
      liveUrl: 'https://example.com',
      image: CRSciScreenshot
    },
    {
      id: '104010',
      title: '104010 - Fitness Platform',
      description: 'Innovative fitness platform that allows custom workout plans and videos for class and individual coaching sessions.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com/t-tann8/104010',
      liveUrl: 'https://example.com',
      image: Screenshot104010
    },
    {
      id: '104010-admin',
      title: '104010 Admin - Fitness Platform Admin',
      description: 'A responsive admin dashboard for the 104010 fitness platform.',
      technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
      githubUrl: 'https://github.com/t-tann8/104010-Admin',
      liveUrl: 'https://example.com',
      image: Screenshot104010Admin
    },
    {
      id: 'hope',
      title: 'HOPE (Hearts Open Primary Education) - Website',
      description: 'A landing page for the HOPE (Hearts Open Primaru Education) organization.',
      technologies: ['React Native', 'Expo', 'Firebase', 'Redux'],
      githubUrl: 'https://github.com/t-tann8/HOPE',
      liveUrl: null,
      image: HOPEScreenshot
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
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
