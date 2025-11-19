import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HeartHand } from './Icons';

const navLinks = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About Us' },
  { path: '/programs', name: 'Programs' },
  { path: '/get-involved', name: 'Get Involved' },
  { path: '/gallery', name: 'Gallery' },
  { path: '/contact', name: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2 text-xl font-bold text-text-dark">
          <HeartHand className="w-28 h-14 text-primary" />
          <span>Child Rights Foundation</span>
        </NavLink>
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-semibold py-2 px-4 rounded-md transition-colors duration-300 ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-text-light hover:bg-primary/10 hover:text-primary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink to="/donate" className="bg-primary text-white font-bold py-2 px-5 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 ml-4">
            Donate Now
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
