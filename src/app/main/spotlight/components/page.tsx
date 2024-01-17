import React from 'react'
import Poster from "../../../../../public/images/poster.jpg"
import Image from 'next/image'
import Logo from './logo'
import Language from './language'
import SignIn from './signIn'
export default function Spotlight() {
  return (
    <div className=''>
        <div className='relative overflow-hidden '>
            <Image src={Poster} alt="Netflix" className='w-full object-fill'/>
            <div className='absolute w-full h-full top-0 right-0 left-0 bottom-0  bg-black bg-opacity-70 '>
				<div className='flex justify-between px-12 py-6 m-auto max-w-[83%]'>
			    	<Logo/>
					<div className='flex'>
						<Language/>
						<SignIn/>
					</div>

				</div>
            </div>
        </div>
    </div>
  )
} 
