import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 text-white bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-8 mb-8 md:grid-cols-3">
          <div>
            <div className="mb-4 text-2xl font-bold text-blue-400">MS</div>
            <p className="mb-4 text-gray-300">
         Frontend Developer specializing in React and Next.js, passionate about building clean, responsive, and user-friendly web applications with a focus on performance and usability.
            </p>
            <p className="text-sm text-gray-400">
              Always learning, always building.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#home" className="transition-colors hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="transition-colors hover:text-blue-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="transition-colors hover:text-blue-400">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 font-semibold">Connect</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a 
                  href="mailto:mohamedshoman242@gmail.com" 
                  className="transition-colors hover:text-blue-400"
                >
                  mohamedshoman242@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/mohamedshoman00" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/mohamedshoman00" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-400"
                >
                  LinkedIn
                </a>
              </li>
             
            </ul>
          </div>
        </div>
        
        <div className="pt-8 text-center border-t border-gray-800">
          <p className="flex items-center justify-center space-x-2 text-gray-400">
            <span>© 2025 MS. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of coffee.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;