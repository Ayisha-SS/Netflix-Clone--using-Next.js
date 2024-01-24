import React from 'react'
import Description from './description'
import Image from './image'
import Divider from '@/app/_component/general/divider'

export default function EnjoyOnTv() {
  return (
    <>
    	<Divider/>
        <div className='bg-black '>
            <div className='max-w-[83%] flex px-10 wrapper lg:wrapper2 lg:px-0 lg:py-10 md:flex-col md:py-6 sm:py-3 sm:flex-col'>
                <Description/>
                <Image/>
            </div>
        </div>
    </>
  )
}
