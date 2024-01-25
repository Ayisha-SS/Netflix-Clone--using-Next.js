import Button from '@/app/_component/general/button'
import React from 'react'
import {FaAngleRight} from "react-icons/fa6"

export default function Content() {
  return (
    <>
        <div className='flex flex-col justify-center  items-center pt-40 w-[100%]'>
            <div className='w-[80%] text-center'>
                <h2 className='text-white text-[48px] text-nowrap font-black font-sans m-0 '>Enjoy big movies, hit series and more from &#8377;149.</h2>
            </div>
            <div className='pt-6 '>
                <p className='text-white font-sans text-2xl font-normal tracking-wide'>Join today. Cancel anytime.</p>
            </div>
            <div className='pt-6 '>
                <h3 className='text-white text-xl font-sans font-normal leading-6'>Ready to watch? Enter your email to create or restart your membership.</h3>
            </div>
            <div className='flex items-center justify-center pt-6'>
                <form action="#" className='text-base text-gray-500 font-normal py-4 pr-32 pl-8 rounded-md border border-gray-400'>
                   <input type="text" placeholder='Email address' className='bg-transparent font-sans outline-none' />
                </form>
                <div className='flex ml-2 bg-red-600 rounded-md text-white py-3 px-8 '>
                    <Button label='Get started' icon={<FaAngleRight/>} className='flex items-center gap-1 text-2xl font-sans font-normal '/>  
                </div>
            </div>
        </div>
    </>
  )
}
