import React from 'react'
import { useState } from 'react'
import { champions } from '../data/champions'

const Champions = () => {
    return (
    <div className='container mx-auto pb-20'>
        {/* LOL Champions */}
        <div className='py-20 text-center'>
            <h1 className='font-Beaufort_for_LOL italic text-2xl'>CHOOSE YOUR</h1>
            <h1 className='font-Beaufort_for_LOL italic text-7xl lg:text-8xl xl:text-9xl'>CHAMPION</h1>
            {/* Heading Paragraph */}
            <div className='font-Spiegel w-full sm:w-[60%] md:w-[50%] lg:w-[50%] xl:w-[40%] mx-auto p-4'>
                <p>With more than 140 champions, you’ll find the perfect match for your playstyle. Master one, or master them all.</p>
            </div>
        </div>

        {/* Champions List from JSON */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4 gap-4 md:gap-8'>
            {champions.map((champion, index) => {
                return (
                    <div key={index} className='cursor-pointer group hover:scale-105 duration-500'>
                        <img src={champion.image} alt="champion-image" className='w-full h-[80%]'/>
                        <h1 className='py-4 px-4 bg-[#042028] text-white text-xl md:text-2xl uppercase font-Beaufort_for_LOL italic border border-white group-hover:text-LolGold'>{champion.name}</h1>
                    </div>
                )   
            })}
        </div>
    </div>
  )
}

export default Champions