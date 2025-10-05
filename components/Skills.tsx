const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS', 'React Native', 'Redux', 'Zustand', 'Redux', 'Context API']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Express.js', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Golang', 'Redis', 'Firebase', 'AWS S3', 'AWS EC2 Instance', 'DynamoDB', 'AWS S3']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code', 'Stripe', 'Socket.io', 'WebRTC']
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Learning & Growth</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            I&apos;m always eager to learn new technologies and improve my skills. Currently exploring 
            automating deployment via Github Actions, Jenkins, and Docker. Exploring AI agent impementation.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
