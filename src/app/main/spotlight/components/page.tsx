import React from 'react'
import Poster from "../../../../../public/images/poster.jpg"
import Image from 'next/image'
import Logo from './logo'
import Language from './language'
import SignIn from './signIn'
import Content from './content'

export default function Spotlight() {
  return (
    <>
        <div className='relative'>
            <div className='w-full h-[100vh]'>
                <Image src={Poster} className='w-full h-full' alt="Netflix" />
            </div>
            <div className='absolute w-full h-full top-0 right-0 left-0 bottom-0  bg-black bg-opacity-70 '>
				<div className='flex justify-between px-12 py-6 m-auto max-w-[83%] wrapper'>
			    	<Logo/>
					<div className='flex gap-2'>
						<Language/>
						<SignIn/>
					</div>
				</div>
          <Content/>
            </div>
        </div>
    </>
  )
} 
