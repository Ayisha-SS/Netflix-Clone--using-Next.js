import React from 'react'
import MoviesNavbar from '../movieNav/moviesNav'
import { Videos } from './videos'
import Trailer from "./trailer"
import { Episodes } from './episodes'
import { MoreSimilar }  from './similar'
import FooterCntnt from '@/app/main/footer/components/footerCntnt'
import MovieFooter from '../footer/page'


export default function MovieTrailer({params}:{params :{movies:string}}){
 
  return (
    <div >
        <MoviesNavbar/>
        <Trailer movieid={params.movies}/>
        <div className='bg-[#181818]'>
          <Videos movieid={params.movies}/>
          <Episodes movieid={params.movies}/>
          <MoreSimilar movieid={params.movies} />
          </div>
          <div className=' bg-[#181818]'>
            <MovieFooter/>
          </div>
    </div>
  )
}
