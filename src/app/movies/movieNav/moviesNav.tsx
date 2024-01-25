"use client"
import React from 'react'
import NetflixLogo from "../../../../public/images/netflix-logo.png"
import Image from 'next/image'
import Button from '@/app/_component/general/button'
import Link from 'next/link'

import { auth } from '../../../../lib/firebase/firebase'
import { signOut } from 'firebase/auth'

export default function MoviesNavbar() {

const logout = () =>{
    auth.signOut();
}

  return (
    <>
        <div className='bg-black '>
            <div className='flex justify-between movies-wrapper'>
                {/* <div className='flex justify-between'> */}
                <div className='w-36 cursor-pointer'>
                    <Link href="/main">
                    <Image src={NetflixLogo} alt='Netflix-Logo'/></Link>
                </div>
                <div className='font-sans text-white text-sm flex items-center '>
                    <p>UNLIMITED TV SHOWS & MOVIES</p>
                    <div className='text-sm ml-3 flex gap-3'>
                        <Link href="/main">
                            <Button label='JOIN NOW' className='bg-red-600 text-white py-2 px-6 text-xs rounded-sm'/>
                        </Link>
                        {/* <Link href="/login"> */}
                            <Button label='SIGN OUT' className='bg-transparent text-white py-2 rounded-sm px-6 text-xs border' onClick={logout}/>
                        {/* </Link> */}
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    </>
  )
}
