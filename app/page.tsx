'use client';
import React, { useState } from 'react';
import Navbar from './Componet/Navbar';
import SkillSection from './Componet/SkillSection'; 
import HeroSection from './Componet/HeroSection';
import About from './Componet/About';

import DarkModeToggle from './Componet/DarkModeToggle';
import { ChakraProvider } from '@chakra-ui/react';

const Page: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`relative ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-blue-100 text-black'}`}>

      <video
        src="/video.mp4"
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="fixed top-0 left-0 w-full h-full  opacity-50 z-0"></div>

      <div className="relative z-10">
        <Navbar theme={theme} setTheme={setTheme} />
        <div className="grid grid-cols-12">
          <div className="col-span-9"></div>
          <div className="col-span-3">
            <ChakraProvider>
              <DarkModeToggle theme={theme} toggleTheme={toggleTheme} />
            </ChakraProvider>
          </div>
        </div>
        <HeroSection theme={theme} />
        <About theme={theme} />
        <SkillSection theme={theme}/>


      </div>

      <style jsx>{`
        .relative {
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default Page;
