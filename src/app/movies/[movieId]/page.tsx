import React from 'react'
import MoviesNavbar from '../movieNav/moviesNav'
import { MovieSlider } from '../general/slider'
import Button from '../../_component/general/button'
import Videos from './videos'
import Trailer from "./trailer"


export default function MovieTrailer({ params }: { params: {  movieId:Number; } }){

  const { movieId } = params;
  
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
