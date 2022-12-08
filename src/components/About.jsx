import React from 'react'
import garen from '../img/about/garen.png'

const About = () => {
  return (
    <div>
        {/* About */}
        <div className='pt-20 text-center p-4'>
            <h1 className='font-Beaufort_for_LOL italic text-7xl lg:text-8xl xl:text-9xl'>ABOUT</h1>
            <p className='font-FF_Mark_W05 w-full sm:w-[60%] md:w-[50%] lg:w-[50%] xl:w-[30%] mx-auto py-4'>This project is based on popular MOBA (multiplayer online battle arena) game - LEAGUE OF LEGENDS.</p>
            <p className='font-FF_Mark_W05 w-full sm:w-[60%] md:w-[50%] lg:w-[50%] xl:w-[40%] mx-auto'>Mindaugas Šunokas</p>
        </div>

        {/* Image Garen */}
        <div className='w-full'>
            <img className='mx-auto' width={500} src={garen} alt="garen" />
        </div>
    </div>
  )
}

export default About