'use client';
import React from 'react'
import MoviesNavbar from './movieNav/moviesNav'
import Recommended from './movieNav/recommended'

export default function Movies() {

  return (
    <>
      <MoviesNavbar/>
      <div className='bg-[#181818]'>
    	<div className='movies-wrapper'>
          <div className='pt-[100px]'>
            <h2 className='text-6xl font-black text-white font-sans mt-5'>TV Shows</h2>
            <p className='font-sans text-[17px] text-white w-[40%] mt-4 tracking-wide'>These days, the small screen has some very big things to offer. From 
            sitcoms to dramas to travel and talk shows, these are all the best shows 
            on TV.
              </p>
          </div>
          <Recommended/>
                       
        </div>
      </div>
    </>
  )
}
