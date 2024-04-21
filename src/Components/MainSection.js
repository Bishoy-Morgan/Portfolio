import React, { useRef, useState } from 'react'
import Header from './Header'
import Story from './Story'
import Projects from './Projects'
import Skills from './Skills'
import SideLinks from './SideLinks'
import Footer from './Footer'
import { SiGmail } from "react-icons/si";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import DevicesSection from './DevicesSection'

gsap.registerPlugin(useGSAP);
const MainSection = ( ) => {
    const [email, setEmail] = useState(false)
    const title = useRef()
    const subTitle = useRef()
    const subTitleBtn = useRef()
    const intro = useRef()
    const tl = gsap.timeline();
    useGSAP(() => {
        tl.to(intro.current, 3, { autoAlpha: 0, ease: 'back.inOut' })
    })
    useGSAP(() => {
        tl.fromTo(title.current , .5, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: .5})
        tl.fromTo(subTitle.current, .5, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: .2 })
        tl.fromTo(subTitleBtn.current, .5, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: .3 })
    })
    const circle = useRef()
    const circleA = useRef()
    const circleB = useRef()
    const circleC = useRef()
    const circleD = useRef()
    useGSAP(() => {
        tl.to(circle.current, 15, { repeat: -1, scale: 1.1, ease: 'expoScale(1, 1.1)' })
        tl.to(circleA.current, 15, { repeat: -1, scale: 1.1, ease: 'expoScale(1, 1.1)' })
        tl.to(circleB.current, 10, { repeat: -1, scale: 1.1, ease: 'expoScale(1, 1.1)' })
        tl.to(circleC.current, 12, { repeat: -1, scale: 1.2, ease: 'expoScale(1, 1.2)' })
        tl.to(circleD.current, 8, { repeat: -1, scale: 1.2, ease: 'expoScale(1, 1.2)' })
    })
    const storyRef = useRef(null)
    const projectRef = useRef(null)
    const experienceRef = useRef(null)
    return (
        <>
            <main>
                <Header
                storyClick={() => storyRef.current?.scrollIntoView({ behavior: 'smooth'})}
                projectClick={() => projectRef.current?.scrollIntoView({ behavior: 'smooth'})}
                experienceClick={() => experienceRef.current?.scrollIntoView({ behavior: 'smooth'})}
                openMail={() => setEmail(!email)}/>
                <section className='w-full h-auto max-h-[1500px] pt-16 md:p-0 md:h-screen flex flex-col-reverse md:flex-row md:justify-evenly items-center xl:items-start xl:pt-16'>
                    <div 
                    ref={intro} 
                    className='absolute z-[99999] top-0 left-0 w-full h-screen backdrop-blur-md visible'>
                        <h1 className='brand-name text-9xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>B.Morgan</h1>
                    </div>
                    
                    <div className='w-4/5 mb-44 md:mb-0 md:h-auto max-h-[700px] md:w-1/2 lg:w-1/2'>
                        <h1 
                        ref={title}
                        className='text-[3.5rem] lg:text-[4rem] leading-none drop-shadow-2xl'>WE DESIGN WHAT YOU CAN NOT EXPRESS</h1>
                        <p
                        ref={subTitle}
                        className='subTitle text-xl tracking-wide my-8 md:my-8'>Crafting Captivating Experiences: Bishoy, Front-End Developer, <br/> breathe life into websites and applications, turning ideas into stunning interfaces and intuitive user journeys.</p>
                        <button 
                        ref={subTitleBtn}
                        onClick={() => projectRef.current?.scrollIntoView({ behavior: 'smooth'})}
                        className='subTitle-btn px-8 py-2 max-w-48 max-h-14 text-lg rounded-full tracking-wider '>Discover more</button>
                    </div>
                    <div className='devices-container w-4/5 h-auto md:w-1/4 mt-6 mb-20 md:-translate-y-5 max-h-full md:mb-16 md:h-4/5 flex justify-center items-center'>
                        <DevicesSection />
                    </div>
                </section>
                <div className={`${email ? 'visible' : 'invisible'} fixed z-[99999] w-auto max-w-[25rem] h-12 max-h-14 py-2 px-6 top-[9rem] right-1/2 translate-x-1/2 md:top-[5.5rem] md:right-16 md:translate-x-0 lg:translate-x-0 text-2xl border-[#e65be6] border-2 flex items-center rounded-full backdrop-blur-3xl`}>
                    <SiGmail className='opacity-80'/> 
                    <span className='text-xl ml-3'>bishoy.morgan95@gmail.com</span>
                </div>
            </main>
            <SideLinks />
            <Story storyRef={storyRef}/>
            <Projects projectRef={projectRef}/>
            <Skills experienceRef={experienceRef}/>
            <Footer />
        </>
    )
}

export default MainSection
