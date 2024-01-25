"use client"
import Image from 'next/image'
import MainHome from './main/page'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../lib/firebase/firebase'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {


const router = useRouter();
useEffect(()=>{
  onAuthStateChanged(auth,(user)=>{
    if(user){
      const uid = user.uid;
      router.push('/movies')
    } else {
      router.push("/login")
    }
  });
})

  return (
    <>
    <MainHome/>
    
    </>
  )
}
