import Button from '@/app/_component/general/button'
import React from 'react'
import {FaAngleRight} from "react-icons/fa6"

export default function Content() {
  return (
    <>
        <div className='flex flex-col justify-center items-center w-[100%] pt-40  max-sm:pt-24 max-md:pt-32'>
            <div className='w-[80%] text-center'>
                <h2 className='text-white  text-[48px]  text-wrap font-black font-sans m-0 max-sm:text-[32px] max-md:text-[40px] '>Enjoy big movies, hit series and more from &#8377;149.</h2>
            </div>
            <div className='pt-6 max-sm:pt-[12px] max-md:pt-[16px] max-lg:pt-[20px]'>
                <p className='text-white text-2xl font-sans font-normal tracking-wide max-sm:text-sm max-md:text-base max-lg:text-[18px] max-xl:text-xl '>Join today. Cancel anytime.</p>
            </div>
            <div className='max-sm:pt-[12px] max-md:pt-[16px] max-lg:pt-[20px] pt-6 '>
                <h3 className='text-white font-sans font-normal leading-6 text-wrap max-md:text-base text-xl '>Ready to watch? Enter your email to create or restart your membership.</h3>
            </div>
            <div className='flex flex-wrap gap-3 items-center justify-center max-sm:pt-[12px] max-md:pt-[16px] max-lg:pt-[20px] pt-6'>
                <form action="#" className='text-base text-gray-500 font-normal rounded-[4px] border border-gray-400 max-sm:py-3 max-sm:pr-26 max-sm:pl-4 max-md:py-3 max-md:pr-28 max-md:pl-6 py-4 pr-32 pl-8 '>
                   <input type="text" placeholder='Email address' className='bg-transparent font-sans outline-none' />
                </form>
                <div className='flex ml-2 bg-red-600 rounded-[4px] text-white  max-sm:py-[10px] max-sm:px-3 max-md:py-[10px] max-md:px-4 py-3 px-8 '>
                    <Button label='Get started' icon={<FaAngleRight/>} className='flex items-center gap-1  font-sans font-normal max-sm:text-xl max-md:text-xl text-2xl'/>  
                </div>
            </div>
        </div>
    </>
  )
}
