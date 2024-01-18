import React from 'react'
import Description from './description'
import Image from './image'
import Divider from '@/app/_component/general/divider'

export default function EnjoyOnTv() {
  return (
    <>
    	<Divider/>
        <div className='bg-black '>
            <div className='max-w-[83%] flex px-10'>
                <Description/>
                <Image/>
            </div>
        </div>
    </>
  )
}
