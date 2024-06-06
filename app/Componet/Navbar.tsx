'use client'
import React, { useState } from 'react';

interface NavbarProps {
  theme: 'dark' | 'light';
  setTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`sticky ${theme === 'dark' ? 'bg-gray-900 opacity-85 text-white' : 'bg-blue-200 opacity-75 text-black'}`}>
      <div className="container px-4 mx-auto">
        <div className="flex lg:gap-96 gap-28 p-3">
          <div className="flex-shrink-0 flex items-center">
            <p className="font-bold text-4xl">.V/</p>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <ul className="flex space-x-4">
                <li className="hover:bg-gray-400 p-2 rounded-md cursor-pointer">Home</li>
                <li className="hover:bg-gray-400 p-2 rounded-md cursor-pointer"><a href='#'>About</a></li>
                <li className="hover:bg-gray-400 p-2 rounded-md cursor-pointer">Project</li>
                <li className="hover:bg-gray-400 p-2 rounded-md cursor-pointer">Education</li>
                <li className="hover:bg-gray-400 p-2 rounded-md cursor-pointer">Resume</li>
              </ul>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                aria-expanded={isOpen ? 'true' : 'false'}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <a href="#" className={`block p-5 rounded-md text-base font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Home
          </a>
          <a href="#" className={`block p-5 rounded-md text-base font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          About
          </a>
          <a href="#" className={`block p-5 rounded-md text-base font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Project
          </a>
          <a href="#" className={`block p-5 rounded-md text-base font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Education
          </a>
          <a href="#" className={`block p-5 rounded-md text-base font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
