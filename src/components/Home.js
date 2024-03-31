import React from 'react'
import imagenew from '../assets/images/cart.png'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    
 <div className='fullscreen-background flex  justify-center items-start h-screen sm:border-lime-700 md:border-amber-400 lg:border-indigo-600'>
    
    <div class=" bg-gradient-to-b from-teal-300 to-teal-200 left-0 top-0 opacity-70 absolute w-200 h-200 p-16 rounded-full rounded-ss-sm fullscreen-background "></div>
    <div class=" bg-gradient-to-b from-teal-200 to-teal-100 absolute opacity-50 left-0 top-20 rounded-ss-sm p-10 w-200 h-200 rounded-full  fullscreen-background "></div>
         <div class="flex flex-col justify-center items-center mt-32 ">
        <img src={imagenew} className=' object-contain h-48 w-96 m-20'></img>
        <h1 className=' font-semibold text-3xl'>Simple pricing for your business</h1>
        <p className='mt-5 text-lg'>Plans that are carefully crafted to suit your business.</p>
        <Link  to="/2ndpage">
        <button className='bg-teal-300 px-8 py-1 rounded-md m-5 text-white font-semibold text-xl'>Get Started</button>
        </Link>
            </div>
            </div>
          
  )
}

export default home
