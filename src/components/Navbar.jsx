import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import lolImage from '../img/lol.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {BsGlobe} from 'react-icons/bs'

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

  return (
    <div className='bg-[#111111] p-4 text-white'>
        <nav className='font-FF_Mark_W05 flex items-center justify-between'>
            <div className='flex items-center'>
                {/* Logo */}
                <Link to='/'><img className='w-32' src={lolImage} alt="lol-logo" /></Link>
                
                {/* Desktop Menu */}
                <div className='hidden md:flex ml-20 space-x-8'>
                    <Link className='hover:bg-[#333333] rounded-md p-2' to='/'>HOME</Link>
                    <Link className='hover:bg-[#333333] rounded-md p-2' to='/champions'>CHAMPIONS</Link>
                    <Link className='hover:bg-[#333333] rounded-md p-2' to='/wild-rift'>WILD RIFT</Link>
                    <Link className='hover:bg-[#333333] rounded-md p-2' to='/support'>SUPPORT</Link>
                    <Link className='hover:bg-[#333333] rounded-md p-2' to='/about'>ABOUT</Link>
                </div>
            </div>

            {/* Globe Icon Mobile */}
            <button><BsGlobe className='flex md:hidden cursor-pointer' size={40} /></button>

             {/* Hamburger Button */}
             <div className='md:hidden cursor-pointer' onClick={() => setNavbar(!navbar)}>
                    {!navbar ? <AiOutlineMenu size={40} /> : <AiOutlineClose size={40} />}
                </div>
                
            {/* Nav Buttons Desktop */}
            <div className='hidden md:flex gap-4 items-center'>
                {/* Globe Icon Desktop */}
                <BsGlobe className='cursor-pointer' size={30} />
                <button className='font-FF_Mark_W05 bg-[#333333] p-3 rounded-2xl hover:brightness-95'>SIGN IN</button>
                <button className='font-FF_Mark_W05 bg-[#15B4D9] p-3 rounded-2xl text-black hover:brightness-95'>PLAY NOW</button>
            </div>
        </nav>

         {/* Mobile Menu (Close Menu on Clicked Link) */}
            <div className={!navbar ? 'hidden' : 'flex flex-col py-4 font-FF_Mark_W05'}>
                <Link onClick={() => setNavbar(!navbar)} className='py-4 px-5 hover:bg-[#333333] rounded-md' to='/'>HOME</Link>
                <Link onClick={() => setNavbar(!navbar)} className='py-4 px-5 hover:bg-[#333333] rounded-md' to='/champions'>CHAMPIONS</Link>
                <Link onClick={() => setNavbar(!navbar)} className='py-4 px-5 hover:bg-[#333333] rounded-md' to='/wild-rift'>WILD RIFT</Link>
                <Link onClick={() => setNavbar(!navbar)} className='py-4 px-5 hover:bg-[#333333] rounded-md' to='/support'>SUPPORT</Link>
                <Link onClick={() => setNavbar(!navbar)} className='py-4 px-5 hover:bg-[#333333] rounded-md' to='/about'>ABOUT</Link>

                {/* Nav Buttons Mobile */}
                <div className='flex flex-col w-full justify-center space-y-3 mt-5'>
                    <button className='font-FF_Mark_W05 bg-[#333333] hover:brightness-95 py-3 rounded-md'>SIGN IN</button>
                    <button className='font-FF_Mark_W05 bg-[#15B4D9] hover:brightness-95 py-3 rounded-md text-black'>PLAY NOW</button>
                </div>
            </div>
    </div>
  )
}

export default Navbar