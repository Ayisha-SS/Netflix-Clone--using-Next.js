import Divider from '@/app/_component/general/divider'
import React from 'react'
import FooterCntnt from './footerCntnt'

export default function Footer() {
  return (
    <>
        <Divider/>
        <div className='bg-black'>
            <div className='wrapper lg:wrapper2'>
                <FooterCntnt/>
            </div>
        </div>
    </>
  )
}
