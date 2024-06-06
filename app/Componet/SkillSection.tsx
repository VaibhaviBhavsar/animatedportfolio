'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface SkillSectionProps {
    theme: 'dark' | 'light';
}
const SkillSection: React.FC<SkillSectionProps> = ({ theme }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    const bgColor = theme === 'dark' ? 'bg-cyan-900 bg-opacity-85' : 'bg-cyan-200 bg-opacity-65';
    const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  return (
    <div className={`relative ${bgColor}`}>
        <p>hello</p>
   
</div>
  )
}

export default SkillSection;

