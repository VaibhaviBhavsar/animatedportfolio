'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import myphoto from '../Assastes/myphoto.jpg';
import bootstrap from '../Assastes/bootstrap.png';
import chakara from '../Assastes/chakara.png';
import css from '../Assastes/css.png';
import html from '../Assastes/html.png';
import javascript from '../Assastes/javascript.png';
import react from '../Assastes/react.png';
import nextjs from '../Assastes/nextjs.png';
import tailwind from '../Assastes/tailwind.png';


interface AboutProps {
    theme: 'dark' | 'light';
}

const About: React.FC<AboutProps> = ({ theme }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    const bgColor = theme === 'dark' ? 'bg-cyan-900 bg-opacity-85' : 'bg-cyan-200 bg-opacity-65';
    const textColor = theme === 'dark' ? 'text-white' : 'text-black';

    return (
        <div className="container px-4 mx-auto mb-10" data-aos="fade-up">
            <div className={`relative ${bgColor} rounded-lg px-4 mx-auto shadow-xl shadow-cyan-500/50 continuous-fade`}>
                <p className={`${textColor} font-bold p-5 text-4xl underline`}>ABOUT ME</p>
                <div className='grid grid-cols-1 lg:grid-cols-12 md:grid-cols-1'>
                    <div className='col-span-8 p-5 text-xl leading-tight' data-aos="fade-up">
                        <p className={`${textColor} text-justify`}>Hello! I’m Vaibhavi Bhavsar, a passionate front-end web developer based in Vadodara. I completed my Bachelor's degree in Computer Applications from The Maharaja Sayajirao University of Baroda in 2024.</p>
                        <p className={`${textColor} text-justify`}>During my four-month internship as a front-end web developer, I gained hands-on experience with a range of front-end technologies, including HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React, and Next.js. I also have experience with other technologies such as Chakra UI, Swiper.js, and Material UI.</p>
                        <p className={`${textColor} text-justify`}>My internship provided me with valuable experience in creating responsive websites that look great on all screen sizes. I am passionate about designing innovative web interfaces and continuously learning the latest technologies. As I embark on my career as a web developer, I am eager to bring my skills and enthusiasm to new and exciting projects.</p>
                    </div>
                    <div className="col-span-4 flex justify-center">
                       
                            <img src={myphoto.src} className=' rounded-full w-64 h-64 self-center opacity-55' data-aos="flip-right"></img></div>
                       
                        
                    </div>
                </div>
            </div>
       
    );
}

export default About;
