import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowBarRight } from "react-icons/bs";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger)
const Projects = ( { projectRef } ) => {
    const [showMore, setShowMore] = useState(false)
    const projectA = useRef()
    const projectB = useRef()
    const projectC = useRef()
    const projectD = useRef()
    const projectE = useRef()
    const projectF = useRef()
    const projectG = useRef()
    const tl = gsap.timeline()
    useGSAP(() => {
        tl.fromTo(projectA.current, 1,
            { x: -250, opacity: 0 }, 
            { x: 0, opacity: 1,
                scrollTrigger: { trigger: projectA.current, start: 'top bottom', end: 'center center', scrub: true }})
        tl.fromTo(projectB.current, 1,
            { x: 250, opacity: 0 }, 
            { x: 0, opacity: 1,
                scrollTrigger: { trigger: projectB.current, start: 'top bottom', end: 'center center', scrub: true} })
        tl.fromTo(projectC.current, 1,
            { x: -250, opacity: 0 }, 
            { x: 0, opacity: 1,
                scrollTrigger: { trigger: projectC.current, start: 'top bottom', end: 'center center', scrub: true }})
        tl.fromTo(projectD.current, 1,
            { x: 250, opacity: 0 }, 
            { x: 0, opacity: 1,
                scrollTrigger: { trigger: projectD.current, start: 'top bottom', end: 'center center', scrub: true} })
        tl.fromTo(projectE.current, 1,
            { x: 250, opacity: 0 }, 
            { x: 0, opacity: 1,
                scrollTrigger: { trigger: projectE.current, start: 'top bottom', end: 'center center', scrub: true} })
        tl.fromTo(projectF.current, 1,
            { x: 250, opacity: 0 }, 
            { x: 0, opacity: 1,
                scrollTrigger: { trigger: projectF.current, start: 'top bottom', end: 'center center', scrub: true} })
        tl.fromTo(projectG.current, 1,
            { x: 250, opacity: 0 }, 
            { x: 0, opacity: 1,
                scrollTrigger: { trigger: projectG.current, start: 'top bottom', end: 'center center', scrub: true} })
        })

    return (
        <>
        <section 
        ref={projectRef}
        className={`${showMore ? 'h-auto project-section' : 'h-[1800px]'} projects w-full `}>
            <div className='w-full h-auto text-center py-24'>
                <h3 className='font-semibold text-3xl tracking-widest'>Projects</h3>
            </div>
            <div className={`${showMore ? 'overflow-visible' : 'overflow-hidden'} w-full h-auto flex flex-col items-center`}>
                <div 
                ref={projectA}
                className='w-4/5 h-[700px] max-h-[750px] md:w-full md:h-[400px] lg:w-4/5 px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center backdrop-blur-3xl mb-24'>
                    <div className='w-full h-[35%] md:w-1/2 md:h-4/5 lg:w-2/5'>
                        <img className='object-cover' src='./Images/Lapify_Website--.png' alt='projectImage' />
                    </div>
                    <div className='w-full h-[55%] md:w-1/2 md:h-4/5 p-4 mb-6 md:mb-0'>
                        <h3 className='text-2xl font-semibold tracking-widest'>Lapify</h3>
                        <h4 className='text-[#e65be6] my-3 text-xl tracking-wider'>Lapify is an ecommerce website.</h4>
                        <p className='mb-6 text-base tracking-wider leading-relaxed'>Laptop website produce a vairous brands and versions of laptops esaly to buy and also for whome seeking for informations about specific brand, it descripies all laptop features from the smallest thing to the weight and orientations of laptop.</p>
                        <Link to='' 
                            className='github-link text-xl'
                        >Github
                        <BsArrowBarRight 
                            className='inline ml-2'
                        /></Link>
                    </div>
                </div>
                <div 
                ref={projectB}
                className='w-4/5 h-[700px] max-h-[750px] md:w-full md:h-[400px] lg:w-4/5 px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center backdrop-blur-3xl mb-24'>
                    <div className='w-full h-[55%] md:w-1/2 md:h-4/5 p-4'>
                        <h3 className='text-2xl font-semibold tracking-widest'>Expense Tracker</h3>
                        <h4 className='text-[#e65be6] my-3 text-xl tracking-wider'>Expense Tracker is a small app for tracking your expenses.</h4>
                        <p className='mb-6 text-base tracking-wider leading-relaxed'>Save all your transactions by tracking every single payment or income, Its simple to use by adding incomes or adding expense, Its show your updated balance, all the history of your transactions and you can add any new transaction any time of your day.</p>
                        <Link to='' 
                            className='github-link text-xl'
                        >Github
                        <BsArrowBarRight 
                            className='inline ml-2'
                        /></Link>
                    </div>
                    <div className='w-full h-[35%] md:w-1/2 md:h-4/5 lg:w-2/5 mb-6 md:mb-0'>
                        <img className='object-cover' src='./Images/Expense tracker.png' alt='projectImage' />
                    </div>
                </div>
                <div 
                ref={projectC}
                className='w-4/5 h-[700px] max-h-[750px] md:w-full md:h-[400px] lg:w-4/5 px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center backdrop-blur-3xl mb-24'>
                    <div className='w-full h-[35%] md:w-1/2 md:h-4/5 lg:w-2/5'>
                        <img className='object-cover' src='./Images/Laptab.png' alt='' />
                    </div>
                    <div className='w-full h-[55%] md:w-1/2 md:h-4/5 p-4 mb-6 md:mb-0'>
                        <h3 className='text-2xl font-semibold tracking-widest'>LapTab</h3>
                        <h4 className='text-[#e65be6] my-3 text-xl tracking-wider'>LapTab is an ecommerce website.</h4>
                        <p className='mb-6 text-base tracking-wider leading-relaxed'>Laptop website produce a vairous brands and versions of laptops esaly to buy and also for whome seeking for informations about specific brand.</p>
                        <Link to='' 
                            className='github-link text-xl'
                        >Github
                        <BsArrowBarRight 
                            className='inline ml-2'
                        /></Link>
                    </div>
                </div>
                <div 
                ref={projectD}
                className='w-4/5 h-[700px] max-h-[750px] md:w-full md:h-[400px] lg:w-4/5 px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center backdrop-blur-3xl mb-24'>
                    <div className='w-full h-[55%] md:w-1/2 md:h-4/5 p-4'>
                        <h3 className='text-2xl font-semibold tracking-widest'>Tasker</h3>
                        <h4 className='text-[#e65be6] my-3 text-xl tracking-wider'>Tasker is a task To do List App.</h4>
                        <p className='mb-6 text-base tracking-wider leading-relaxed'>A small app help you manage your day, week, even your whole month, It also reminde you at specific times you choose, Simply add your task name , day and time and choose reminder or not, Fast simple app you will need every day.</p>
                        <Link to='' 
                            className='github-link text-xl'
                        >Github
                        <BsArrowBarRight 
                            className='inline ml-2'
                        /></Link>
                    </div>
                    <div className='w-full h-[35%] md:w-1/2 md:h-4/5 lg:w-2/5 mb-6 md:mb-0'>
                        <img className='object-cover' src='./Images/tasks.png' alt='' />
                    </div>
                </div>
                {showMore && (
                            <>
                                <div 
                                ref={projectE}
                                className='w-4/5 h-[700px] max-h-[750px] md:w-full md:h-[400px] lg:w-4/5 px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center backdrop-blur-3xl mb-24'>
                                    <div className='w-full h-[35%] md:w-1/2 md:h-4/5 lg:w-2/5'>
                                        <img className='object-cover' src='./Images/Lapify_Website--.png' alt='' />
                                    </div>
                                    <div className='w-full h-[55%] md:w-1/2 md:h-4/5 p-4 mb-6 md:mb-0'>
                                        <h3 className='text-2xl font-semibold tracking-widest'>Lapify</h3>
                                        <h4 className='text-[#e65be6] my-3 text-xl tracking-wider'>Lapify is an ecommerce website.</h4>
                                        <p className='mb-6 text-base tracking-wider leading-relaxed'>Laptop website produce a vairous brands and versions of laptops esaly to buy and also for whome seeking for informations about specific brand, it descripies all laptop features from the smallest thing to the weight and orientations of laptop.</p>
                                        <Link to='' 
                                            className='github-link text-xl'
                                        >Github
                                        <BsArrowBarRight 
                                            className='inline ml-2'
                                        /></Link>
                                    </div>
                                </div>
                                <div 
                                ref={projectF}
                                className='w-4/5 h-[700px] max-h-[750px] md:w-full md:h-[400px] lg:w-4/5 px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center backdrop-blur-3xl mb-24'>
                                    <div className='w-full h-[55%] md:w-1/2 md:h-4/5 p-4'>
                                        <h3 className='text-2xl font-semibold tracking-widest'>Lapify</h3>
                                        <h4 className='text-[#e65be6] my-3 text-xl tracking-wider'>Lapify is an ecommerce website.</h4>
                                        <p className='mb-6 text-base tracking-wider leading-relaxed'>Laptop website produce a vairous brands and versions of laptops esaly to buy and also for whome seeking for informations about specific brand, it descripies all laptop features from the smallest thing to the weight and orientations of laptop.</p>
                                        <Link to='' 
                                            className='github-link text-xl'
                                        >Github
                                        <BsArrowBarRight 
                                            className='inline ml-2'
                                        /></Link>
                                    </div>
                                    <div className='w-full h-[35%] md:w-1/2 md:h-4/5 lg:w-2/5 mb-6 md:mb-0'>
                                        <img className='object-cover' src='./Images/Lapify_Website--.png' alt='' />
                                    </div>
                                </div>
                                <div 
                                ref={projectG}
                                className='w-4/5 h-[700px] max-h-[750px] md:w-full md:h-[400px] lg:w-4/5 px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center backdrop-blur-3xl mb-24'>
                                    <div className='w-full h-[35%] md:w-1/2 md:h-4/5 lg:w-2/5'>
                                        <img className='object-cover' src='./Images/Lapify_Website--.png' alt='' />
                                    </div>
                                    <div className='w-full h-[55%] md:w-1/2 md:h-4/5 p-4 mb-6 md:mb-0'>
                                        <h3 className='text-2xl font-semibold tracking-widest'>Lapify</h3>
                                        <h4 className='text-[#e65be6] my-3 text-xl tracking-wider'>Lapify is an ecommerce website.</h4>
                                        <p className='mb-6 text-base tracking-wider leading-relaxed'>Laptop website produce a vairous brands and versions of laptops esaly to buy and also for whome seeking for informations about specific brand, it descripies all laptop features from the smallest thing to the weight and orientations of laptop.</p>
                                        <Link to='' 
                                            className='github-link text-xl'
                                        >Github
                                        <BsArrowBarRight 
                                            className='inline ml-2'
                                        /></Link>
                                    </div>
                                </div>
                            </>
                            )}                
            </div>
        </section>
        <div className={`${showMore && 'hidden'} w-full max-h-24 flex justify-center items-center p-16`}>
            <button 
                onClick={() => setShowMore(!showMore)}
                className='px-8 py-2 max-w-48 max-h-14 text-lg rounded-full tracking-wider'
            >Discover more</button>
        </div>
        </>
    )
}

export default Projects
