import Button from '@/app/_component/general/button'
import React from 'react'
import Link from 'next/link'

export default function SignIn() {
  return (
    <>
        <div>
          <Link href="/login">
            <Button label='Sign In' className='box-border  rounded py-1 font-sans  px-3 inline-flex justify-center tracking-normal'/>
          </Link>
          {/* <Link href="/login" className='box-border font-sans rounded bg-red-600 px-3 inline-flex justify-center tracking-normal py-1'>Sign In</Link> */}
        </div>
    </>
  )
}
