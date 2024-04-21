import React from 'react'

const Header = ( { openMail, storyClick, projectClick, experienceClick } ) => {


    return (
        <nav className='w-full max-w-screen h-32 max-h-32 md:h-20 md:px-8 flex flex-wrap justify-around md:justify-between items-center backdrop-blur-sm'>
            <div className='w-1/4 max-h-12 md:h-full md:max-w-52 px-5 flex justify-center md:justify-end items-center'>
                <h3 className='brand-name text-3xl translate-y-2'>B.Morgan</h3>
            </div>
            <div className='w-4/5 h-1/3 max-w-1/2 md:w-3/5 lg:w-1/2 lg:h-1/2 xl:w-2/5 flex items-center md:text-base lg:text-lg'>
                <ul className='w-full flex justify-evenly items-center tracking-wider '>
                    <button
                    onClick={storyClick}
                    className='navLinks bg-transparent hover:after:border-0'>Story</button>
                    <button 
                    onClick={projectClick}
                    className='navLinks bg-transparent hover:after:border-0'>Projects</button>
                    <button 
                    onClick={experienceClick}
                    className='navLinks bg-transparent hover:after:border-0'>Experience</button>
                    <button 
                    className='px-5 py-1 rounded-full'
                    onClick={openMail}
                    >Contact</button>
                </ul>
            </div>
        </nav>
    )
}

export default Header
