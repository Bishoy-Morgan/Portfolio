import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Story = ( { storyRef } ) => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()
    const storyContainer = useRef()
    const storyAnimation = useRef()
    useGSAP(() => {
        tl.fromTo(storyContainer.current, 1,
        { x: -50, opacity: 0 }, 
        { x: 0, opacity: 1,
            scrollTrigger: {
                trigger: storyContainer.current,
                start: 'top bottom',
                end: 'center center',
                scrub: true
            } 
        })
        tl.fromTo(storyAnimation.current, 1,
            { x: 50, opacity: 0 }, 
            { x: 0, opacity: 1,
                scrollTrigger: {
                    trigger: storyAnimation.current,
                    start: '100',
                    end: '600',
                    scrub: true
                } 
            })
    })
    return (
        <>
        <section 
        ref={storyRef}
        className='story-section w-full h-auto xl:h-auto py-10 md:py-24 flex flex-col md:flex-row justify-evenly items-center md:items-center'>
            <div 
            ref={storyContainer}
            className='container-shadow w-4/5 md:w-1/2 h-3/4 py-8 px-12 text-base tracking-wider leading-relaxed'>
                <h4 className='mb-6 font-semibold text-2xl'>My Story</h4>
                <p className='story-p1 '>
                    I'm Bishoy, a 29-year-old alchemist, wielding code to forge captivating user experiences.<br/>For me, front-end development isn't just about lines on a screen, it's about crafting the digital tapestry that users navigate. I thrive on the challenge of translating ideas into intuitive interfaces, ensuring every pixel placement and interaction sings with purpose.
                </p>                
                <p className='story-p2 my-5'>
                    Beyond the code, I'm a lifelong learner, constantly pushing to master the latest front-end technologies.  Whether it's building lightning-fast interfaces with cutting-edge frameworks or championing accessibility for all users, I'm driven by a passion for pushing the boundaries of what's possible on the web.
                    Ultimately.
                </p>
                <p className='story-p3'>
                    I'm driven by the desire to create impactful experiences that leave a lasting impression.  I'm eager to connect and collaborate 
                </p>
                <h5 className='build mt-5 text-lg font-bold mb-8'>let's build something amazing together!</h5>
                <button className='max-w-48 max-h-14 px-8 py-2 text-lg font-medium rounded-full tracking-wider '>My Resume</button>
            </div>
            <div 
            ref={storyAnimation}
            className='w-4/5 h-[500px] md:w-1/4 md:h-[500px] mt-20 md:-translate-y-16'>
                <img src='./Images/file.png' alt='person' className='container-shadow bg-cover w-3/5 max-w-[250px] h-[90%] mx-auto md:w-full md:h-auto rounded-full '/>
            </div>
        </section>
        </>
    )
}

export default Story;
