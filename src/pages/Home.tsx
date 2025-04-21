import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <motion.p 
          className="text-[#64ffda]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi, my name is
        </motion.p>
        <motion.h1 
          className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Muthu Sanjai
        </motion.h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a{' '}
          <TypeAnimation
            sequence={[
              'Developer',
              2000,
              'Designer',
              2000,
              'Student',
              2000,
              'passionate learner',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
        I'm a full-stack developer specializing in machine learning and building exceptional digital experiences. 
        Currently, I'm focused on creating responsive full-stack web applications powered by intelligent ML solutions.
        </p>
        <div className="flex gap-4">
          <Link
            to="/projects"
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-[#0a192f]"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <ArrowRight className="ml-3" />
            </span>
          </Link>
          <Link
            to="/contact"
            className="text-[#0a192f] bg-[#64ffda] border-2 border-[#64ffda] px-6 py-3 my-2 flex items-center hover:bg-transparent hover:text-[#64ffda]"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;