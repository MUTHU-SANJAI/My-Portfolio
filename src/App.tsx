import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a192f] text-gray-300">
        {/* Navigation */}
        <nav className="fixed w-full p-6 flex justify-between items-center bg-[#0a192f]/80 backdrop-blur-sm z-50">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-semibold">Portfolio</Link>
            <div className="hidden md:flex gap-6">
              <Link to="/" className="hover:text-[#64ffda]">Home</Link>
              <Link to="/about" className="hover:text-[#64ffda]">About</Link>
              <Link to="/projects" className="hover:text-[#64ffda]">Projects</Link>
              <Link to="/contact" className="hover:text-[#64ffda]">Contact</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/MUTHU-SANJAI" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-[#64ffda] transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/muthu-sanjai-as/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-[#64ffda] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:sanjaisssmuthu@gmail.com" className="p-2 hover:text-[#64ffda] transition-colors">
              <Mail size={20} />
            </a>
            <a 
              href="https://drive.google.com/file/d/1RLY0_Nl1tPatDen9QdTO9tqWrKVYx4Um/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:block px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded-md hover:bg-[#64ffda]/10 transition-colors"
            >
              Resume
            </a>
            <button className="md:hidden p-2 hover:text-[#64ffda] transition-colors">
              <Menu size={24} />
            </button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;