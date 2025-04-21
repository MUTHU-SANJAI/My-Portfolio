import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
      <div>
        <Link to="/" className="text-2xl font-bold">Portfolio</Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8">
        <li>
          <Link to="/" className="hover:text-[#64ffda]">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-[#64ffda]">About</Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-[#64ffda]">Projects</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-[#64ffda]">Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <Menu size={24} /> : <X size={24} />}
      </div>

      {/* Mobile Menu */}
      <ul className={
        !nav
          ? 'hidden'
          : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
      }>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/">Home</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/about">About</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/projects">Projects</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;