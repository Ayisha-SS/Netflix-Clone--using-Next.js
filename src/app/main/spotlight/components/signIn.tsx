import Button from '@/app/_component/general/button'
import React from 'react'
import Link from 'next/link'

export default function SignIn() {
  return (
    <>
        <div className='max-sm:flex'>
          <Link href="/login">
            <Button label='Sign In' className='box-border text-base rounded py-1 font-sans px-4 inline-flex justify-center tracking-normal'/>
          </Link>
        </div>
    </>
  )
}
