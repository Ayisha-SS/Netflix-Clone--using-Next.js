import React from 'react'
import NetflixLogo from "../../../../public/images/netflix-logo.png"
import Image from 'next/image'
import Link from "next/link"
import SignupFunction from './signup'

export default function Signup() {
  return (
    <>
       <div className='flex justify-between px-10 border-b-2'>
          <div className='w-56'>
            <Image src={NetflixLogo} alt="Netflix-logo"/>
          </div>
          <div className='text-xl font-sans font-bold flex items-center '>
            <Link href="/login">SignIn</Link>
          </div>
        </div> 
        <SignupFunction/>
    </>
  )
}
