import Button from '@/app/_component/general/button'
import React from 'react'
import {FaAngleRight} from "react-icons/fa6"

export default function Content() {
  return (
    <>
        <div className='flex flex-col justify-center items-center pt-44 w-[100%] xl:pt-32 lg:pt-20 md:pt-16 sm:pt-12'>
            <div className='w-[80%] text-center'>
                <h2 className='text-white text-5xl font-black  font-sans m-0 lg:w-[90%] lg:text-[38px] md:text-[29px] md:leading-10 md:font-extrabold sm:text-[25px] sm:font-extrabold sm:leading-10'>Enjoy big movies, hit series and more from &#8377;149.</h2>
            </div>
            <div className='pt-12 xl:pt-6 lg:pt-4 md:pt-2 sm:pt-0'>
                <p className='text-white font-sans text-2xl font-normal tracking-wide md:text-xl sm:text-[20px]'>Join today. Cancel anytime.</p>
            </div>
            <div className='pt-6 md:pt-4 sm:pt-2'>
                <h3 className='text-white text-xl font-sans font-normal leading-6 md:text-xl sm:text-[18px]'>Ready to watch? Enter your email to create or restart your membership.</h3>
            </div>
            <div className='flex items-center justify-center pt-6 md:pt-4'>
                <form action="#" className='text-base text-gray-500 font-normal py-4 pr-32 pl-8 rounded-md border border-gray-400 md:py-3 md:pr-30 md:pl-6 sm:py-2 sm:pr-25 sm:pl-4'>
                   <input type="text" placeholder='Email address' className='bg-transparent font-sans outline-none' />
                </form>
                <div className='flex ml-2 bg-red-600 rounded-md text-white py-3 px-8 md:px-6 md:py-[10px] sm:py-[8px] sm:px-4'>
                    <Button label='Get started' icon={<FaAngleRight/>} className='flex items-center gap-1 text-2xl font-sans font-normal md:text-xl sm:text-base'/>  
                </div>
            </div>
        </div>
    </>
  )
}
