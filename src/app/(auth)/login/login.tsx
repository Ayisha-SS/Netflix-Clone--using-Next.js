import React from 'react'
import NetflixLogo from "../../../../public/images/netflix-logo.png"
import Image from 'next/image'
import Button from '@/app/_component/general/button'
import LoginFooter from './footer'

export default function LoginFunction() {
  return (
   <>
    <div className='font-sans'>
        <div className='w-52 ml-[3%] bg-gradient-to-t from-black via-transparent to-transparent leading-[90px]'>
            <Image src={NetflixLogo} alt="Netflix-Logo"/>
        </div>
        <div className='mx-auto max-w-[450px]  bg-transparent mb-12'>
            <div className='box-border flex flex-col rounded bg-black bg-opacity-75'>
                <div className='m-16'>
                    <h3 className='text-3xl font-medium mb-7 text-white'>Sign In</h3>
                    <form action="#" className='flex flex-col gap-5'>
                        <input type="email/number" placeholder='Email or phone number' className='bg-[#333] rounded pt-4 px-5 h-[50px] text-base placeholder:text-[#8c8c8c]'/>
                        <input type="password" placeholder='Password' className='bg-[#333] rounded pt-4 px-5 h-[50px] text-base placeholder:text-[#8c8c8c]'/>
                    </form>
                    <div>
                        <Button label='Sign In' className='rounded text-base font-medium mt-8 mb-3 p-3 w-full'/>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="#" className='text-[#8c8c8c] text-sm ml-2'>Remember me</label>
                        </div>
                        <a href="#" className='text-[#8c8c8c] text-sm'>Need Help?</a>
                    </div>
                    <div className='text-[#8c8c8c] mt-4 font-sans'>
                        <div>
                            New to Netflix?
                            <a href="#" className='text-white ml-1'>Sign up now.</a>
                        </div>
                        <div className='mt-[14px] text-xs tracking-wide mb-20'>
                            <p className='w-[90%]'>This page is protected by Google reCAPTCHA to ensure you're not a bot.
                                <a href="#" className='text-[#0071eb]'> Learn More.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className='bg-black bg-opacity-75 w-full absolute mt-0'>
            <LoginFooter/>
        </div> */}
            
    </div>
   </>
  )
}
