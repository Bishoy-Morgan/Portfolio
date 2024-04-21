import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";
import { VscArrowUp } from "react-icons/vsc";


const Footer = () => {
    return (
        <>
            <div className='w-1/5 max-w-52 py-10 mx-auto flex justify-center items-center animate-pulse'>
                <button 
                onClick={() => window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                })}
                className='arrow-btn p-2 text-3xl rounded-full bg-transparent hover:after:opacity-0 hover:scale-125'>
                    <VscArrowUp />
                </button>
            </div>
            <footer className='w-4/5 h-72 max-h-[300px] border-t-[1px] shadow-inner mx-auto flex flex-col'>
                <div className='w-full h-4/5 md:h-3/4 flex flex-col md:flex-row justify-evenly items-center'>
                    <div className='w-4/5 h-1/3 md:w-2/5 md:h-4/5 lg:w-1/4 flex justify-evenly md:justify-evenly items-center'>
                        <img src='/Images/B.M.png' alt='Logo' className='h-[75px] md:h-[65px]'/>
                        <h2 className='brand-name text-5xl md:text-4xl translate-y-3'>B Morgan</h2>
                    </div>
                    <div className='w-4/5 h-1/2 md:w-1/2 md:h-4/5 p-5 text-lg flex flex-col justify-center md:justify-around items-center lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-3'>
                        <span>Contact Email</span>
                        <span>beshoyFarag@gmail.com</span>
                        <span>Whatsapp </span>
                        <span>+20 132700340</span>
                    </div>
                </div>
                <div className='w-4/5 h-1/5 md:w-3/4 md:h-1/4 mx-auto flex justify-center items-center '>
                    <span><FaRegCopyright className='inline'/> All rights reserved to Bishoy A.Morgan</span>
                </div>
            </footer>
        </>
    )
}

export default Footer
