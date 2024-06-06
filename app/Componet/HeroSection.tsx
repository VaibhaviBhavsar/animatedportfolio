'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';

interface HeroSectionProps {
  theme: 'dark' | 'light';
}

const HeroSection: React.FC<HeroSectionProps> = ({ theme }) => {
  const bgColor = theme === 'dark' ? 'bg-balck' : '';
  const textColor = theme === 'dark' ? 'text-white' : 'text-blue-200';

  return (
    <div className={`relative ${bgColor}`}>
    
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className=' text-center'>
          <div className={`text-5xl mt-10 uppercase leading-loose font-bold ${textColor}`}>
            <Typewriter
              options={{
                strings: ["I'm Vaibhavi Bhavsar", "I'm a web developer"],
                autoStart: true,
                loop: true,
                delay: 150,
              }}
            />
             </div>
            <div className='uppercase text-2xl leading-loose'>
              <p className={textColor}>Front end web developer.</p>
              </div>
              <div className='uppercase text-lg'>
            <p className={textColor}>i build things for web</p>
          </div>
           
          </div>
        
       
      </div>
      <style jsx>{`
        .container {
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
