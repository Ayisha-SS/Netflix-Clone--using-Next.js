import React from 'react'
import MoviesNavbar from './movieNav/moviesNav'
import Recommended from './movieNav/recommended'

export default function Movies
() {
  return (
    <>
      <MoviesNavbar/>
      <div className='bg-[#181818]'>
    	<div className='movies-wrapper'>
          <div className='pt-4'>
            <h2 className='text-5xl font-bold text-white font-sans'>Movies</h2>
            <p className='font-san text-base text-white w-[40%] mt-4 tracking-wide'>Movies move us like nothing else can, whether they're scary, funny, 
              dramatic, romantic or anywhere in-between. So many titles, so much to 
              experience.</p>
          </div>
          <Recommended/>

        </div>
      </div>
    </>
  )
}
