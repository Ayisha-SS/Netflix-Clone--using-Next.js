import React from 'react'
import NetflixLogo from "../../../../../public/images/netflix-logo.png"
import Image from 'next/image'
export default function Logo() {
  return (
    <div className='w-44'>
        <Image src={NetflixLogo} alt="Logo" className='w-full'/>
    </div>
  )
}
 