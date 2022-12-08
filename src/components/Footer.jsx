import React from 'react'
import { Link } from 'react-router-dom'
import {
    AiOutlineYoutube,
    AiOutlineTwitter,
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineReddit,
} from 'react-icons/ai'
import RiotLogo from '../img/riot-logo.webp'

const Footer = () => {
  return (
    <div>
        {/* Footer Top */}
        <div className='bg-lolGray text-white flex flex-col md:flex-row items-center justify-center gap-8 p-6 font-FF_Mark_W05'>
            <Link to='#' className='hover:bg-[#333333] rounded-md p-2'>ABOUT LEAGUE OF LEGENDS</Link>
            <Link to='#' className='hover:bg-[#333333] rounded-md p-2'>HELP US IMPROVE</Link>
            <Link to='#' className='hover:bg-[#333333] rounded-md p-2'>SERVER STATUS</Link>
            <Link to='#' className='hover:bg-[#333333] rounded-md p-2'>SUPPORT</Link>
            <Link to='#' className='hover:bg-[#333333] rounded-md p-2'>ESPORTS</Link>
            <Link to='#' className='hover:bg-[#333333] rounded-md p-2'>RIOT MOBILE APP</Link>
        </div>

        {/* Footer */}
        <div className='bg-[#111111]'>
            {/* Social Icons */}
            <div className='flex justify-center items-center gap-4 text-white text-4xl py-8'>
                <AiOutlineYoutube className='cursor-pointer hover:scale-125' />
                <AiOutlineTwitter className='cursor-pointer hover:scale-125' />
                <AiOutlineFacebook className='cursor-pointer hover:scale-125' />
                <AiOutlineInstagram className='cursor-pointer hover:scale-125' />
                <AiOutlineReddit className='cursor-pointer hover:scale-125' />
            </div>

            {/* Riot Games Logo and Copyrights */}
            <div>
                <img className='w-28 mx-auto cursor-pointer hover:scale-125' src={RiotLogo} alt="riot-logo" />
                <p className='text-white text-center text-sm font-FF_Mark_W05_Thin p-8 w-full md:w-1/2 xl:w-1/3 mx-auto'>™ & © {new Date().getFullYear()} Riot Games, Inc.  League of Legends and all related logos, characters, names and distinctive likenesses thereof are exclusive property of Riot Games, Inc.  All Rights Reserved. Mindaugas</p>
            </div>

            {/* Footer Bottom Links */}
            <div className='flex flex-col md:flex-row items-center justify-center text-white gap-8 p-6 font-FF_Mark_W05'>
                <Link to='#' className='hover:bg-[#333333] rounded-md p-2'>PRIVACY NOTICE</Link>
                <Link to='#' className='hover:bg-[#333333] rounded-md p-2'>TERMS OF SERVICE</Link>
                <Link to='#' className='hover:bg-[#333333] rounded-md p-2'>COOKIE POLICY</Link>
                <Link to='#' className='hover:bg-[#333333] rounded-md p-2'>COMPANY INFORMATION</Link>
                <Link to='#' className='hover:bg-[#333333] rounded-md p-2'>COOKIE PREFERENCES</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer