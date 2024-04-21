import React, { useRef } from 'react'
import { HiMenu } from "react-icons/hi";
import Lottie from 'lottie-react';
import Circle from './Json/Circle.json'
import Cart from './Json/Cart.json'
import { AiFillHeart } from "react-icons/ai";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
const DevicesSection = () => {
    const pc = useRef()
        const pcHeader = useRef()
        const pcContainerA = useRef()
        const pcContainerB = useRef()
    const tablet = useRef()
        const tabletHeader = useRef()
        const tabletContainerA = useRef()
        const tabletContainerB = useRef()
    const mobile = useRef()
        const mobileHeader = useRef()
        const mobileContainerA = useRef()
        const mobileContainerB = useRef()
    var tl = gsap.timeline({repeat: -1, repeatDelay: 4});
    useGSAP(() => {
        tl.to(pc.current, .3, { opacity: 1, y: -20, delay: .5})
            tl.fromTo(pcHeader.current, .5, { opacity: 0, y: 15 }, { opacity: 1, y: 0, delay: .5 })
            tl.fromTo(pcContainerA.current, .5, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: .5 })
            tl.fromTo(pcContainerB.current, .5, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: .5 })
        tl.to(pc.current, .5, { y: -80, opacity: 0, delay: 4 })

        tl.to(tablet.current, .3, {delay: 2, opacity: 1, y: -40 })
            tl.fromTo(tabletHeader.current, .5, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: .5 })
            tl.fromTo(tabletContainerA.current, .5, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: .5 })
            tl.fromTo(tabletContainerB.current, .5, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: .5 })
        tl.to(tablet.current, .5, { opacity: 0, y: -80, delay: 4 })

        tl.to(mobile.current, .3, {delay: 2, opacity: 1, y: -40 })
            tl.fromTo(mobileHeader.current, .5, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: .5 })
            tl.fromTo(mobileContainerA.current, .5, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: .5 })
            tl.fromTo(mobileContainerB.current, .5, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: .5 })
        tl.to(mobile.current, 1, { opacity: 0, y: -80, delay: 4 })
    })
    return (
        <>
            <div
                ref={mobile}
                className='mobile-section z-[9999] opacity-0 w-1/4 max-w-[130px] h-[90%] md:w-[70%] md:h-3/5 md:max-w-[150px] lg:w-3/5 lg:h-[65%] xl:h-3/4 border-black/80 text-white border-8 rounded-3xl backdrop-blur-3xl py-1 px-2'>
                <div className=' w-3/5 h-2 mx-auto -translate-y-1 bg-black/80 rounded-b-lg'></div>
                <div className='w-full h-[95%]'>
                    <div 
                    ref={mobileHeader}
                    className='w-full h-[10%] rounded-3xl p-2 px-4 flex justify-between items-center bg-black/30'>
                        <span className='text-[.5rem] md:text-xs lg:text-[.6rem] text-white/70'>Home</span>
                        <HiMenu className='text-xs md:text-base'/>
                    </div>
                    <div 
                    ref={mobileContainerA}
                    className='relative mt-2 w-full h-1/2 rounded-xl flex justify-around items-center p-2 bg-black/30'>
                        <h6 className='devices-title absolute text-center'>B.Morgan<br/>Store</h6>
                        <Lottie animationData={Circle} autoPlay loop={true} />
                    </div>
                    <div  
                    ref={mobileContainerB}
                    className='mt-2 w-full h-[35%] rounded-xl flex justify-between items-center'>
                        <div className='relative w-[30%] h-full rounded-xl p-1 bg-black/30 text-white/70'>
                            <AiFillHeart className='absolute top-2 right-2 text-[0.6rem] md:text-xs lg:text-xs'/>
                            <Lottie 
                                animationData={Cart} 
                                autoplay 
                                loop={true}
                                className='absolute bottom-0'/>
                        </div>
                        <div 
                        ref={mobileContainerB}
                        className='relative w-[30%] h-full rounded-xl p-1 bg-black/30 text-white/70'>
                            <AiFillHeart className='absolute top-2 right-2 text-[0.6rem] md:text-xs lg:text-xs'/>
                            <Lottie 
                                animationData={Cart} 
                                autoplay 
                                loop={true}
                                className='absolute bottom-0'/>
                        </div>
                        <div 
                        ref={mobileContainerB}
                        className='relative w-[30%] h-full rounded-xl p-1 bg-black/30 text-white/70'>
                            <AiFillHeart className='absolute top-2 right-2 text-[0.6rem] md:text-xs lg:text-xs'/>
                            <Lottie 
                                animationData={Cart} 
                                autoplay 
                                loop={true}
                                className='absolute bottom-0'/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tablet Section */}
            <div
            ref={tablet}
            className='z-[9999] tablet-section opacity-0 w-[35%] h-4/5 md:w-[90%] md:h-3/5 lg:w-[70%] lg:h-3/5 xl:w-[70%] xl:h-4/5 border-white border-[1px] rounded-xl'>
                <div className='w-full h-full text-white border-[10px] border-black rounded-xl backdrop-blur-3xl py-1 px-2'>
                    <div className='w-full h-[95%]'>
                        <div 
                        ref={tabletHeader}
                        className='w-full h-[10%] rounded-3xl p-2 px-4 flex justify-between items-center bg-black/30'>
                            <span className='text-[.6rem] md:text-xs text-white/70'>Home</span>
                            <HiMenu className='text-xs md:text-base'/>
                        </div>
                        <div 
                        ref={tabletContainerA}
                        className='relative mt-2 w-full h-1/2 rounded-xl flex justify-around items-center p-2 bg-black/30'>
                            <h6 className='devices-title absolute text-center'>B.Morgan<br/>Store</h6>
                            <Lottie animationData={Circle} autoPlay loop={true} />
                        </div>
                        <div 
                        ref={tabletContainerB}
                        className='mt-2 w-full h-[35%] rounded-xl flex justify-between items-center'>
                            <div className='relative w-[30%] h-full rounded-xl p-1 bg-black/30 text-white/70'>
                                <AiFillHeart className='absolute top-2 right-2 text-[0.6rem] md:text-xs lg:text-sm'/>
                                <Lottie 
                                    animationData={Cart} 
                                    autoplay 
                                    loop={true}
                                    className='absolute bottom-0 w-1/2'/>
                            </div>
                            <div 
                            ref={tabletContainerB}
                            className='relative w-[30%] h-full rounded-xl p-1 bg-black/30 text-white/70'>
                                <AiFillHeart className='absolute top-2 right-2 text-[0.6rem] md:text-xs lg:text-sm'/>
                                <Lottie 
                                    animationData={Cart} 
                                    autoplay 
                                    loop={true}
                                    className='absolute bottom-0 w-1/2'/>
                            </div>
                            <div 
                            ref={tabletContainerB}
                            className='relative w-[30%] h-full rounded-xl p-1 bg-black/30 text-white/70'>
                                <AiFillHeart className='absolute top-2 right-2 text-[0.6rem] md:text-xs lg:text-sm'/>
                                <Lottie 
                                    animationData={Cart} 
                                    autoplay 
                                    loop={true}
                                    className='absolute bottom-0 w-1/2'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pc Section */}
            <div
                ref={pc}
                className='z-[9999] w-3/4 scale-75 opacity-0 flex flex-col justify-center items-center md:scale-y-105 md:scale-x-125 md:translate-y-10 md:w-full md:h-3/5 lg:scale-105 lg:h-[70%] xl:h-full'>
                <div className='pc-screen w-full h-3/4 md:h-1/2 text-white border-[6px] border-black rounded-[4px] backdrop-blur-3xl py-1 px-2'>
                    <div className='w-full h-[95%]'>
                        <div
                            ref={pcHeader}
                            className='w-full h-[10%] rounded-3xl p-2 px-4 flex justify-between items-center bg-black/30'>
                            <span className='text-xs text-white/70'>Home</span>
                            <HiMenu />
                        </div>
                        <div
                            ref={pcContainerA}
                            className='relative mt-2 w-full h-1/2 rounded-xl flex justify-around items-center p-2 bg-black/30'>
                            <h6 className='devices-title absolute text-center'>B.Morgan<br/>Store</h6>
                            <Lottie animationData={Circle} autoPlay loop={true} className='w-[60px] md:w-1/2'/>
                        </div>
                        <div
                            ref={pcContainerB}
                            className='mt-2 w-full h-20 max-h-24 md:h-[35%] rounded-xl flex justify-between items-center'>
                            <div className='relative w-[30%] h-full rounded-xl p-1 bg-black/30 text-white/70'>
                                <AiFillHeart className='absolute top-2 right-2'/>
                                <Lottie 
                                    animationData={Cart} 
                                    autoplay 
                                    loop={true}
                                    className='absolute bottom-0 w-1/3 md:w-1/2'/>
                            </div>
                            <div
                                ref={pcContainerB}
                                className='relative w-[30%] h-full rounded-xl p-1 bg-black/30 text-white/70'>
                                <AiFillHeart className='absolute top-2 right-2'/>
                                <Lottie 
                                    animationData={Cart} 
                                    autoplay 
                                    loop={true}
                                    className='absolute bottom-0 w-1/3 md:w-1/2'/>
                            </div>
                            <div
                                ref={pcContainerB}
                                className='relative w-[30%] h-full rounded-xl p-1 bg-black/30 text-white/70'>
                                <AiFillHeart className='absolute top-2 right-2'/>
                                <Lottie 
                                    animationData={Cart} 
                                    autoplay 
                                    loop={true}
                                    className='absolute bottom-0 w-1/3 md:w-1/2'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pc-stand relative w-1/4 h-16 md:h-12 lg:h-16 bg-gray-100 rounded-b-md'>
                    <div className='absolute bottom-0 left w-full h-2 bg-neutral-400 rounded-sm'></div>
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-neutral-800 rounded-t-md'></div>
                </div>
            </div>
        </>
)
}

export default DevicesSection
