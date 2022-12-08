import React from 'react'
import { Link } from 'react-router-dom'
import notFoundImage from '../img/404.png'

const NotFoundPage = () => {
  return (
    <div>
        {/* 404 */}
        <div className='py-20'>
            <h1 className='font-Beaufort_for_LOL italic text-7xl lg:text-8xl xl:text-9xl pl-[65%] md:pl-[62%] lg:pl-[58%] xl:pl-[54%]'>???</h1>
            <img className='mx-auto' src={notFoundImage} alt="not-found-image" />
            <p className='font-Proxima pt-10 text-center text-2xl'>Oops! Page Not Found. The enemy has stolen the page, return home and reclaim what is yours.</p>
            
            {/* Home Button */}
            <div className='text-center'>
                <button className='bg-black text-white font-Proxima py-4 px-10 mt-5 rounded-md hover:bg-lolGray'><Link to='/'>GO HOME</Link></button>
            </div>
        </div>
    </div>
  )
}

export default NotFoundPage