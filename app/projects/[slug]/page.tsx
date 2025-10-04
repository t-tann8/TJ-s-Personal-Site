import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'
import TimeCladScreenshot from '../../../assets/images/TimeCladScreenshot.png'
import TimeCladAdminScreenshot from '../../../assets/images/TimeCladAdminScreenshot.png'
import CRSciScreenshot from '../../../assets/images/CRSciScreenshot.png'
import Screenshot104010 from '../../../assets/images/104010Screenshot.png'
import Screenshot104010Admin from '../../../assets/images/104010-AdminScreenshot.png'
import HOPEScreenshot from '../../../assets/images/HOPEScreenshot.png'

// Project data - this should match the data in Projects.tsx
const projects = [
  {
    id: 'timeclad',
    title: 'TimeClad - E-Commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/t-tann8/TimeClad',
    liveUrl: 'https://example.com',
    image: TimeCladScreenshot,
    longDescription: 'TimeClad is a comprehensive e-commerce platform built with modern web technologies. It features a complete shopping experience with user authentication, secure payment processing through Stripe, and a robust admin dashboard for managing products, orders, and customers. The platform is designed to be scalable and user-friendly, providing both customers and administrators with intuitive interfaces.',
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart and checkout process',
      'Secure payment processing with Stripe',
      'Order management system',
      'Admin dashboard for inventory management',
      'Customer account management',
      'Responsive design for all devices'
    ]
  },
  {
    id: 'timeclad-admin',
    title: 'TimeClad Admin - E-Commerce Platform Admin',
    description: 'A responsive admin dashboard for the TimeClad e-commerce platform.',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/t-tann8/TimeClad-Admin',
    liveUrl: 'https://example.com',
    image: TimeCladAdminScreenshot,
    longDescription: 'The TimeClad Admin dashboard provides comprehensive management tools for e-commerce operations. Built with React and featuring interactive charts and real-time data visualization, it allows administrators to monitor sales, manage inventory, track customer behavior, and oversee all aspects of the platform.',
    features: [
      'Real-time sales analytics and reporting',
      'Interactive charts and data visualization',
      'Inventory management system',
      'Customer and order management',
      'Weather integration for logistics',
      'Responsive admin interface',
      'Data export capabilities',
      'User role management'
    ]
  },
  {
    id: 'crsci',
    title: 'CRSci - Ed Tech Platform',
    description: 'A collaborative education technology platform for teachers, students and principals to track and elevate student performances.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
    githubUrl: 'https://github.com/t-tann8/CRSci',
    liveUrl: 'https://example.com',
    image: CRSciScreenshot,
    longDescription: 'CRSci is an innovative educational technology platform designed to enhance collaboration between teachers, students, and administrators. It provides comprehensive tools for tracking student performance, facilitating communication, and creating an integrated learning environment that supports educational excellence.',
    features: [
      'Student performance tracking and analytics',
      'Real-time communication between stakeholders',
      'Assignment and grade management',
      'Progress monitoring and reporting',
      'Collaborative learning tools',
      'Parent and administrator dashboards',
      'Mobile-responsive design',
      'Data-driven insights for educators'
    ]
  },
  {
    id: '104010',
    title: '104010 - Fitness Platform',
    description: 'Innovative fitness platform that allows custom workout plans and videos for class and individual coaching sessions.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/t-tann8/104010',
    liveUrl: 'https://example.com',
    image: Screenshot104010,
    longDescription: '104010 is a comprehensive fitness platform that revolutionizes how fitness professionals deliver training. It enables the creation of custom workout plans, video content, and personalized coaching sessions for both individual clients and group classes.',
    features: [
      'Custom workout plan creation',
      'Video content management',
      'Individual and group coaching sessions',
      'Progress tracking and analytics',
      'Client management system',
      'Payment processing for sessions',
      'Mobile app integration',
      'Social features for community building'
    ]
  },
  {
    id: '104010-admin',
    title: '104010 Admin - Fitness Platform Admin',
    description: 'A responsive admin dashboard for the 104010 fitness platform.',
    technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/t-tann8/104010-Admin',
    liveUrl: 'https://example.com',
    image: Screenshot104010Admin,
    longDescription: 'The 104010 Admin dashboard provides fitness professionals with powerful tools to manage their business operations. It includes comprehensive analytics, client management, content creation tools, and financial tracking to help fitness professionals grow their business.',
    features: [
      'Business analytics and reporting',
      'Client and membership management',
      'Content creation and management tools',
      'Financial tracking and reporting',
      'Schedule and session management',
      'Marketing and communication tools',
      'Performance metrics dashboard',
      'Integration with main platform'
    ]
  },
  {
    id: 'hope',
    title: 'HOPE (Hearts Open Primary Education) - Website',
    description: 'A landing page for the HOPE (Hearts Open Primary Education) organization.',
    technologies: ['React Native', 'Expo', 'Firebase', 'Redux'],
    githubUrl: 'https://github.com/t-tann8/HOPE',
    liveUrl: null,
    image: HOPEScreenshot,
    longDescription: 'HOPE (Hearts Open Primary Education) is a dedicated website for an educational organization focused on providing quality primary education. The platform serves as both an informational resource and a community hub for parents, students, and educators.',
    features: [
      'Organization information and mission',
      'Program and curriculum details',
      'Event and announcement system',
      'Contact and enrollment information',
      'Resource library for parents',
      'Student showcase and achievements',
      'Community forum and discussions',
      'Mobile-responsive design'
    ]
  }
]

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.id === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/#projects" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Image */}
          <div className="space-y-6">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <Image 
                src={project.image} 
                alt={`${project.title} screenshot`}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                <FaGithub />
                <span>View Code</span>
              </a>
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {project.description}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }))
}
