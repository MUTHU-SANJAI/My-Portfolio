import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform built with React and Node.js. Includes user authentication, product management, and payment integration.",
      image: "https://images.unsplash.com/photo-1745224204317-207585648551?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/MUTHU-SANJAI/E-Commerce-Platform",
      live: "https://melodic-kashata-2e6457.netlify.app/"
    },
    {
      title: "Task Management App",
      description: "Task Management Dashboard is a comprehensive project management solution designed for modern teams. It combines powerful task tracking capabilities with real-time communication features, making it an all-in-one platform for team collaboration.",
      image: "https://images.unsplash.com/photo-1745224209999-bfc7772924cc?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "TypeScript", "Tailwind CSS","Vite","Recharts","Lucide Icons"],
      github: "https://github.com/MUTHU-SANJAI/Workflow-Management",
      live: "https://work-management-smartkinetics.netlify.app/"
    },
    {
      title: "Bank Fraud Detection",
      description: "This project uses React.js for the frontend and FastAPI for the backend to enable smooth interaction and fast data processing. Scikit-learn, XGBoost, and Pandas are used in the backend for real-time fraud detection using machine learning algorithms. Axios handles API communication, while CSS styles the UI.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      technologies: ["React.js", "FastAPI", "Python","Axios","Scikit-learn (LOF, Isolation Forest)"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className="w-full min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#64ffda] font-medium mb-4">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#ccd6f6]">Featured Projects</h1>
          <p className="text-lg text-[#8892b0] max-w-2xl mx-auto">
            Here are some of my featured projects that showcase my skills and experience in
            web development and design.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                {/* Project Image */}
                <div className="w-full md:w-7/12 relative group">
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-[#64ffda]/20 group-hover:bg-transparent transition-colors duration-300"></div>
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <p className="text-[#64ffda] font-medium mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold mb-4 text-[#ccd6f6]">{project.title}</h3>
                  <div className="bg-[#112240] p-6 rounded-lg mb-4">
                    <p className="text-[#8892b0]">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-[#8892b0] text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                    >
                      <Github size={22} />
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-32 mb-16"
        >
          <a 
            href="https://github.com/MUTHU-SANJAI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded-md hover:bg-[#64ffda]/10 transition-colors"
          >
            View More Projects
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;