import React from 'react'
import Image from 'next/image'
import LoginPoster from "../../../../public/images/login-poster.jpg"
import LoginFunction from './login'

export default function Login() {
  return (
    <>
        <div className='relative'>
          <div className='w-full h-auto'>
              <Image src={LoginPoster} alt="Netflix-poster" className='w-full h-full'/>
          </div>
          <div className='absolute w-full h-full top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 '>
            <LoginFunction/>
          </div>
        </div>
    </>
  )
}
