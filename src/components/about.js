import React from 'react'

import Cart from '../assets/images/cart.png'

const about = () => {
  return (
    <div className=" bg-neutral-200">
    <div className='fullscreen-background flex  justify-center items-start  sm:border-lime-700 md:border-amber-400 lg:border-indigo-600'>
    
    <div class=" bg-gradient-to-b from-teal-300 to-teal-200 left-0 top-0 opacity-70 absolute w-200 h-200 p-16 rounded-full rounded-ss-sm fullscreen-background "></div>
    <div class=" bg-gradient-to-b from-teal-200 to-teal-100 absolute opacity-50 left-0 top-20 rounded-ss-sm p-10 w-200 h-200 rounded-full  fullscreen-background "></div>
        <div className='bg-teal-400 flex gap-5 w-full flex-col justify-center items-center'>
         <div class="  flex flex-col justify-center items-center mt-20 mb-5 ">
            <img src={Cart} className='  object-contain h-48 w-full m-2 ml-20'></img>
            <h1 className='font-bold text-3xl text-white'>Premium PRO</h1>
            <h1 className='font-bold text-3xl text-white'>$329</h1>
            <p className='text-xl font-medium text-white'>billed just once</p>
       </div>
       
       </div>
       </div>
       <div className='flex flex-col justify-center items-center max-h-screen '>
       <div className="flex flex-col justify-center mb-2  pt-10 pr-1 pb-3.5 pl-3.5 mt-6 max-w-full text-sm leading-7 text-gray-700 bg-white rounded-xl w-[318px]">
      <div className="text-lg font-medium leading-7 text-black">
        Access these features when you get this pricing package for your
        business.
      </div>
      <div className="flex gap-1.5 self-start mt-12 text-gray-700 max-md:mt-10">
        <img
          loading="lazy"
          src={Cart}
           className="shrink-0 self-start aspect-[1.32] w-[17px] mt-2"
        />
        <div className="flex-auto">International calling and messaging API</div>
      </div>
      <div className="flex gap-1.5 mt-3.5">
        <img
          loading="lazy"
          src={Cart} className="shrink-0 self-start aspect-[1.32] w-[17px] mt-2"
        />
        <div className="flex-auto">Additional phone numbers</div>
      </div>
      <div className="flex gap-1.5 mt-3">
        <img
          loading="lazy"
          src={Cart} className="shrink-0 self-start aspect-[1.32] w-[17px] mt-2"
        />
        <div className="flex-auto">Automated messages via Zapier</div>
      </div>
      <div className="flex gap-1.5 mt-3">
        <img
          loading="lazy"
          src={Cart}
           className="shrink-0 self-start aspect-[1.32] w-[17px] mt-2"
        />
        <div className="flex-auto">24/7 support and consulting</div>
      </div>
      <div className="flex gap-2.5 mt-11 text-lg font-semibold leading-8 text-white max-md:mt-10">
        <img
          loading="lazy"
          src={Cart}
          className="bg-teal-400 shrink-0 aspect-[1.2] h-16 w-16"
        />
        <div className="justify-center items-center px-16 py-3.5 bg-teal-400 rounded-md">
          Buy Now
        </div>
      </div>
    </div>
    </div>



       
       </div>
       
  )
}

export default about
