import React from 'react'
import MoviesNavbar from '../movies/movieNav/moviesNav'
import Trailer from './trailer'
import Videos from './videos'

export default function MovieTrailer() {
  return (
    <div>
      <MoviesNavbar/>
      <Trailer/>
      <div className='bg-[#181818]'>
        <Videos/>
      </div>
    </div>
  )
}