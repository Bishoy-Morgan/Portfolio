import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';


const SideLinks = () => {
    return (
        <>
        <div className='fixed z-[99999] w-auto max-w-12 h-60 max-h-72 p-2 md:bottom-5 left-2 text-2xl flex flex-col justify-evenly rounded-full backdrop-blur-sm'>
            <Link to='' ><TbBrandGithubFilled className='opacity-70 hover:opacity-100'/></Link>
            <Link to='' ><FaLinkedinIn className='opacity-70 hover:opacity-100'/></Link>
            <Link to='' ><FaXTwitter className='opacity-70 hover:opacity-100'/></Link>
        </div>
        </>
    )
}

export default SideLinks
