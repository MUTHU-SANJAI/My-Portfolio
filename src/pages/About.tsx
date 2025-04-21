import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const internships = [
    {
      "company": "ERPROOTS Private Limited",
      "role": "UI/UX and Web Developer Intern",
      "duration": "June 2024 - July 2024",
      "description": "Designed and developed portfolio websites using Figma and WordPress. Focused on clean UI design, accessibility, and user experience for personal and client portfolios.",
      "skills": ["React","Typescript","TailwindCSS", "Figma", "WordPress"]
    },
    {
      "company": "TexArxs",
      "role": "Freelancer",
      "duration": "December 2024 - January 2025",
      "description": "Developed and deployed a fully functional business website — https://arunpackersandcouriers.in/. Handled end-to-end development including responsive design, SEO optimization, and deployment.",
      "skills": ["Full-Stack Development", "Hostinger", "SEO", "Deployment"]
    },
    {
        "company": "ADM Education & Welfare Society - (NGO)",
        "role": "User Experience Designer Intern",
        "duration": "May 2024 - June 2024",
        "description": "Led a team of 15 interns on UI/UX strategy for a real-world project. Coordinated design efforts and provided guidance on web layouts and user flows for improved usability.",
      skills: ["Figma", "Adobe XD", "Sketch","User Research"]
    }
  ];

  return (
    <div className="w-full min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-zinc-600 mb-12 leading-relaxed">
          I'm a passionate developer with a strong foundation in both frontend and backend technologies, and a deep
          interest in machine learning. Leveraging ML to build intelligent, data-driven solutions is at the core of
          my work. My journey in tech has been driven by a desire to create meaningful digital experiences that solve
          real-world problems. When I'm not coding, you can find me exploring new technologies, contributing to 
          open-source projects, or sharing knowledge with the developer community.
          </p>
        </motion.div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Professional Experience</h2>
          <div className="space-y-12">
            {internships.map((internship, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{internship.company}</h3>
                <div className="text-zinc-600 mb-4">
                  <p className="font-medium">{internship.role}</p>
                  <p className="text-sm">{internship.duration}</p>
                </div>
                <p className="text-zinc-600 mb-4">{internship.description}</p>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-zinc-900 text-white p-8 rounded-xl text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Let's Create Something Amazing</h2>
          <p className="mb-6">
            I'm always excited to take on new challenges and collaborate on interesting projects.
          </p>
          <a 
            href="https://drive.google.com/file/d/1RLY0_Nl1tPatDen9QdTO9tqWrKVYx4Um/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white text-zinc-900 rounded-full hover:bg-zinc-100 transition-colors"
          >
            View My Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;