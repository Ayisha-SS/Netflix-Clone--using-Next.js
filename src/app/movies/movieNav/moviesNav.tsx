"use client"
import React from 'react'
import NetflixLogo from "../../../../public/images/netflix-logo.png"
import Image from 'next/image'
import Button from '@/app/_component/general/button'
import Link from 'next/link'
import { auth } from '../../../../lib/firebase/firebase'
import MovieSearch from '../general/rough'


export default function MoviesNavbar() {

const logout = () =>{
    auth.signOut();
}

  return (
    <>
        <div className='bg-black '>
            <div className='flex justify-between movies-wrapper'>
                <div className='w-36 cursor-pointer'>
                    <Link href="/main">
                    <Image src={NetflixLogo} alt='Netflix-Logo'/></Link>
                </div>

                <div className='font-sans text-white  flex items-center '>
                    <h5 className='2xl:text-sm'>UNLIMITED TV SHOWS & MOVIES</h5>
                    <div className='text-sm ml-3 flex gap-3'>
                        <Link href="/main">
                            <Button label='JOIN NOW' className='bg-red-600 text-white py-2 px-6 text-xs rounded-sm'/>
                        </Link>
                            <Button label='SIGN OUT' className='bg-transparent text-white py-1 rounded-sm px-6 text-xs border' onClick={logout}/>
                    </div>
                </div>
            </div>
                {/* <MovieSearch/> */}
        </div>
    </>
  )
}
