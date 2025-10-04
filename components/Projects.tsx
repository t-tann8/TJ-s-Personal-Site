import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Project Screenshot</span>
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
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts and interactive charts.',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and deployed on Vercel.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Blog Platform',
      description: 'A content management system for blogging with markdown support and SEO optimization.',
      technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Mobile App',
      description: 'A cross-platform mobile application with offline support and push notifications.',
      technologies: ['React Native', 'Expo', 'Firebase', 'Redux'],
      githubUrl: 'https://github.com',
      liveUrl: null
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
