import React from 'react';
import { NavLink } from 'react-router-dom';
import { FacebookIcon, YoutubeIcon, MailIcon, PhoneIcon, LocationIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background pt-12 pb-8 text-text-light">
      <div className="container mx-auto px-6">
        <div className="h-1 w-full bg-gradient-to-r from-[#FFA8A8] via-[#FFF1A6] to-[#D7B9FF] mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-text-dark mb-4">Child Rights Foundation</h3>
            <p className="mb-4">Working towards a world where every child's voice is heard and their rights are protected.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ChildRightsFoundationIndia/" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors">
                <FacebookIcon className="w-8 h-8" />
              </a>
              <a href="https://www.youtube.com/@christopheranthony6660" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors">
                <YoutubeIcon className="w-8 h-8" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-text-dark mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><NavLink to="/about" className="hover:text-primary transition-colors">About Us</NavLink></li>
              <li><NavLink to="/programs" className="hover:text-primary transition-colors">Our Programs</NavLink></li>
              <li><NavLink to="/get-involved" className="hover:text-primary transition-colors">Get Involved</NavLink></li>
              <li><NavLink to="/donate" className="hover:text-primary transition-colors">Donate</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-text-dark mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <LocationIcon className="w-5 h-5 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>AWHO, D/16 102, Sandeep Vihar, Whitefield - Hoskote Rd, Kannamangala, Bengaluru, Karnataka 560115</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-3 text-primary" />
                <a href="tel:9789030140" className="hover:text-primary transition-colors">97890 30140</a>
              </li>
              <li className="flex items-center">
                <MailIcon className="w-5 h-5 mr-3 text-primary" />
                <a href="mailto:childrightsfoundationindia@gmail.com" className="hover:text-primary transition-colors">childrightsfoundationindia@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Child Rights Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;