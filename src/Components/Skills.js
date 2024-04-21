import React, { useRef } from 'react'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
const Skills = ( { experienceRef } ) => {
    const skillA = useRef()
    const skillB = useRef()
    const skillC = useRef()
    const skillD = useRef()
    const skillE = useRef()
    const skillContainer = useRef()
    const tl = gsap.timeline();
    useGSAP(() => {
        tl.fromTo(skillA.current, .5, { opacity: 0, x: -50 }, { opacity: 1, x: 0,  scrollTrigger: { trigger: skillContainer.current, start: 'top bottom', end: 'center center', scrub: true } })
        tl.fromTo(skillB.current, .5, { opacity: 0, x: -50 }, { opacity: 1, x: 0,  scrollTrigger: { trigger: skillContainer.current, start: 'top bottom', end: 'center center', scrub: true } })
        tl.fromTo(skillC.current, .5, { opacity: 0, x: -100 }, { opacity: 1, x: 0,  scrollTrigger: { trigger: skillContainer.current, start: 'top bottom', end: 'center center', scrub: true }})
        tl.fromTo(skillD.current, .5, { opacity: 0, x: -100 }, { opacity: 1, x: 0,  scrollTrigger: { trigger: skillContainer.current, start: 'top bottom', end: 'center center', scrub: true }})
        tl.fromTo(skillE.current, .5, { opacity: 0, x: -150 }, { opacity: 1, x: 105,  scrollTrigger: { trigger: skillContainer.current, start: 'top bottom', end: 'center center', scrub: true } })

        tl.fromTo(skillContainer.current, 1,
            { x: 50, opacity: 0 }, 
            { x: 0, opacity: 1,
                scrollTrigger: {
                    trigger: skillContainer.current,
                    start: 'top bottom',
                    end: 'center center',
                    scrub: true
                } 
            })
    })
    return (
    <section 
    ref={experienceRef}
    className='w-4/5 h-auto mx-auto py-10 md:py-24 flex flex-col-reverse lg:flex-row justify-evenly lg:justify-between items-center'>
        <div className='w-4/5 p-4 md:w-3/5 md:p-8 lg:w-2/5 max-h-screen grid grid-cols-2 gap-16 md:gap-10'>
            <div ref={skillA} className='skills md:py-10 md:h-auto md:max-h-[150px] rounded-b-3xl text-center '><FaHtml5 className='w-full text-5xl mb-3'/>HTML &<br/>HTML5</div>
            <div ref={skillB} className='skills md:py-10 md:h-auto md:max-h-[150px] rounded-b-3xl text-center '><IoLogoCss3 className='w-full text-5xl mb-3'/>CSS &<br/>CSS3</div>
            <div ref={skillC} className='skills md:py-10 md:h-auto md:max-h-[150px] rounded-b-3xl text-center '><IoLogoJavascript className='w-full text-5xl mb-3'/>Javascript</div>
            <div ref={skillD} className='skills md:py-10 md:h-auto md:max-h-[150px] rounded-b-3xl text-center '><FaReact className='w-full text-5xl mb-3'/>Reactjs</div>
            <div ref={skillE} className='skills md:py-10 md:h-auto md:max-h-[150px] rounded-b-3xl text-center '><FaPython className='w-full text-5xl mb-3'/>Python</div>
        </div>
        <div
        ref={skillContainer}  
        className='container-shadow py-8 px-12 mb-20 w-full md:w-4/5 lg:w-1/2 h-3/4 text-base tracking-wider leading-relaxed'>
            <h4 className='mb-6 font-semibold text-2xl'>Skills</h4>
            <p className='story-p1'>
                Developed the front-end and user interface for Lapify, an e-commerce website for purchasing laptops (January 2024)<br/>Built an interactive and user-friendly interface using HTML, CSS, JavaScript and Reactjs. Independently created APIs specifically designed to integrate with the front-end functionalities like product listings, user interaction, and shopping cart features. This project demonstrates my strong front-end development skills, including the ability to design and implement custom APIs to enhance user experience.
            </p> 
            <p className='story-p2 my-5'>
            Developed a personal expense tracker application (October 2023)<br/>Built a web application using HTML, CSS, JavaScript and Reactjs to track income and expenses. Implemented functionalities for adding, categorizing, and analyzing financial data. This project allowed me to practice front-end development skills and gain experience in building user interfaces for data visualization and interaction.
            </p>               
            <p className='story-p2 my-5'>
                Developed a personal task tracker application (November 2023)<br/>Built a web application using HTML, CSS, Javascript and Reactjs to manage and prioritize tasks. Focused on creating a user-friendly interface for adding, editing, and tracking progress. This project allowed me to practice front-end development skills and gain experience in building interactive web functionalities.
            </p>
            <p className='story-p3'>
                Developed a personal portfolio website (March 2024): Utilized HTML, CSS, JavaScript and Reactjs to showcase my skills and experience. Implemented responsive design principles to ensure optimal viewing across devices.
            </p>
        </div>
    </section>
    )
}

export default Skills
