import React from 'react'
import wildRiftLogoMobile from '../img/wildrift/lol_wildrift.png'
import wildRiftLogoWhite from '../img/wildrift/lol_wildrift_white.png'
import wildRiftVideo from '../img/wildrift/wild_rift_video.mp4'
import prime1 from '../img/wildrift/prime.jpg'
import patchNotes from '../img/wildrift/patchnotes.jpg'
import prime2 from '../img/wildrift/prime2.jpg'
import card1 from '../img/wildrift/card1.jpg'
import card2 from '../img/wildrift/card2.jpg'
import card3 from '../img/wildrift/card3.jpg'
import wildRiftCover from '../img/wildrift//wildrift-cover.png'

const WildRift = () => {
  return (
    <div>
        {/* Mobile Game LOL Wild Rift */}
        <div className='pb-20 relative'>
            {/* Mobile View */}
            <img className='mx-auto w-80 py-10 xl:hidden' src={wildRiftLogoMobile} alt="wild-rift-logo" />
            {/* Video */}
            <video data-testid="download:video" autoplay="autoplay" loop playsinline className="mx-auto p-2 md:p-0">
                <source src={wildRiftVideo} type='video/mp4' />
            </video>
            {/* Desktop View */}
            <img className='hidden xl:flex absolute top-[10%] left-[40%]' src={wildRiftLogoWhite} alt="wild-rift-logo" />
            <h1 className='font-Beaufort_for_LOL italic text-xl md:text-2xl text-center pt-10'>WELCOME TO WILD RIFT</h1>
            <h1 className='font-Beaufort_for_LOL italic text-6xl md:text-7xl lg:text-8xl text-center'>SUMMONER</h1>
            {/* Heading Paragraph */}
            <div className='font-Spiegel w-full sm:w-[60%] md:w-[50%] lg:w-[50%] xl:w-[40%] mx-auto p-4 text-center'>
                <p>Full League of Legends game in your pocket.</p>
                <button className="mt-8 py-4 px-12 bg-LolGold font-FF_Mark_W05 rounded-md hover:brightness-105">EXPLORE NOW</button>
            </div>
        </div>

        {/* Section-1 Wild Rift */}
        <div className='flex flex-col md:flex-row bg-black text-white p-4 py-20 rounded-lg text-center'>
            <div className='w-full xl:w-1/2'>
                <h1 className='font-FF_Mark_W05_Bold italic text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center'>WHAT IS WILD RIFT ?</h1>
                {/* Heading Paragraph */}
                <p className='font-Spiegel p-4 w-full md:w-[80%] text-center mx-auto'>Dive into Wild Rift: the skills-and-strats 5v5 MOBA experience of League of Legends, now built from the ground up for mobile and console. With fresh controls and fast-paced games, players of every level can team up with friends, lock in their champion, and go for the big plays.</p>
                <button className="my-8 py-4 px-12 w-full md:w-[60%] bg-LolGold font-FF_Mark_W05 rounded-md hover:brightness-105 text-black">LEARN MORE</button>
            </div>

            {/* Image Cover */}
            <div className='w-full xl:w-1/2'>
                <img src={wildRiftCover} alt="wildrift-cover" />
            </div>
        </div>

        {/* Section-2 Latest News*/}
        <div className='pb-20'>
            {/* Heading */}
            <h2 className='font-FF_Mark_W05 italic text-2xl md:text-3xl lg:text-4xl px-5 pt-20'>LATEST NEWS</h2>
            {/* Cards */}
            <div className='flex flex-col md:flex-row justify-between gap-8 p-4 w-full md:w-1/3'>
                <img className='cursor-pointer hover:scale-105 duration-300' src={prime1} alt="card-1" />
                <img className='cursor-pointer hover:scale-105 duration-300' src={patchNotes} alt="card-2" />
                <img className='cursor-pointer hover:scale-105 duration-300' src={prime2} alt="card-3" />
            </div>
        </div>

        {/* Section-3 Cards World of Wild Rift */}
        <div className='bg-rose-500 min-h-[600px] rounded-t-lg pb-20'>
            {/* Heading */}
            <div className='px-5 py-10 lg:px-10 xl:px-48'>
                <h1 className='font-FF_Mark_W05_Bold italic text-white text-5xl lg:text-7xl'>THE WORLD</h1>
                <h1 className='font-FF_Mark_W05_Bold italic text-white text-5xl lg:text-7xl'>OF WILD RIFT</h1>
            </div>
            
            {/* Cards */}
            <div className='flex flex-col md:flex-row gap-10 p-4 justify-center text-center xl:px-52'>
                <div className='w-full md:w-1/3'>
                    <img className='mx-auto cursor-pointer hover:scale-105 duration-300' src={card1} alt="card-1" />
                    <p className='w-full pt-4 text-white font-Proxima text-lg'>Explore the universe of League of Legends, the world of Runeterra, and a global community of incredible fans.</p>
                </div>
                
                <div className='w-full md:w-1/3'>
                    <img className='mx-auto cursor-pointer hover:scale-105 duration-300' src={card2} alt="card-2" />
                    <p className='w-full pt-4 text-white font-Proxima text-lg'>Dive into massive events, top-tier League esports, and unforgettable in-game experiences.</p>
                </div>
                
                <div className='w-full md:w-1/3'>
                    <img className='mx-auto cursor-pointer hover:scale-105 duration-300' src={card3} alt="card-3" />
                    <p className='w-full pt-4 text-white font-Proxima text-lg'>With our focus on player experience, you can count on us to support and improve the game for years to come.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WildRift