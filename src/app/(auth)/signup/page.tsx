import React from 'react'
import NetflixLogo from "../../../../public/images/netflix-logo.png"
import Image from 'next/image'
import Link from "next/link"
import SignupFunction from './signup'
import Button from '@/app/_component/general/button'

export default function Signup() {
  return (
    <>
       <div className='flex justify-between px-10 border-b-2'>
          <div className='w-56'>
            <Image src={NetflixLogo} alt="Netflix-logo"/>
          </div>
          <div className='text-xl font-sans font-bold flex items-center '>
            <Link href="/login" >
              <Button label='SigIn' className='box-border  rounded py-1 font-sans  px-3 inline-flex justify-center tracking-normal'/>
            </Link>
          </div>
        </div> 
        <SignupFunction/>
    </>
  )
}
