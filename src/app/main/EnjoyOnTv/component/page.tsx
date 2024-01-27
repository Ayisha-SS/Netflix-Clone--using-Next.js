import React from 'react'
import Description from './description'
import Image from './image'
import Divider from '@/app/_component/general/divider'

export default function EnjoyOnTv() {
  return (
    <>
    	<Divider/>
        <div className='bg-black '>
            <div className='flex justify-between items-center py-10 wrapper max-md:flex-wrap max-lg:px-0  max-xl:px-10 '>
                <Description/>
                <Image/>
            </div>
        </div>
    </>
  )
}
