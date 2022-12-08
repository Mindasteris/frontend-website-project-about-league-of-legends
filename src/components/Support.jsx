import React from 'react'
import card1 from '../img/support/1.jpg'
import card2 from '../img/support/2.jpg'
import card3 from '../img/support/3.jpg'
import card4 from '../img/support/4.jpg'
import card5 from '../img/support/5.jpg'
import card6 from '../img/support/6.jpg'

const Support = () => {
  return (
    <div className='container mx-auto pt-20 px-4'>
        {/* Support */}
        <div>
            <div className='text-5xl md:text-6xl font-Proxima'>
                <h1>WELCOME TO <span className='text-red-600'>RIOT</span> SUPPORT.</h1>
                <h1>HOW CAN WE HELP ?</h1>
            </div>
            {/* Button */}
            <button className='bg-red-600 py-4 px-40 mt-10 text-white font-Proxima rounded-md hover:bg-red-500'>FAQ</button>
        </div>

        {/* Support Games Cards */}
        <div className='py-20 grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:px-28'>
            <img className='mx-auto cursor-pointer hover:scale-105 duration-500 hover:brightness-75' src={card1} alt="card-1" />
            <img className='mx-auto cursor-pointer hover:scale-105 duration-500 hover:brightness-75' src={card2} alt="card-2" />
            <img className='mx-auto cursor-pointer hover:scale-105 duration-500 hover:brightness-75' src={card3} alt="card-3" />
            <img className='mx-auto cursor-pointer hover:scale-105 duration-500 hover:brightness-75' src={card4} alt="card-4" />
            <img className='mx-auto cursor-pointer hover:scale-105 duration-500 hover:brightness-75' src={card5} alt="card-5" />
            <img className='mx-auto cursor-pointer hover:scale-105 duration-500 hover:brightness-75' src={card6} alt="card-6" />
        </div>
    </div>
  )
}

export default Support