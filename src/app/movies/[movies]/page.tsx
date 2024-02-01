import React from 'react'
import MoviesNavbar from '../movieNav/moviesNav'
import Videos from './videos'
import Trailer from "./trailer"
import Episodes from './episodes'
import MoreSimilar from './similar'
import FooterCntnt from '@/app/main/footer/components/footerCntnt'


export default function MovieTrailer({params}:{params :{movies:string}}){
//  console.log();
 
  
  return (
    <div >
        <MoviesNavbar/>
        <Trailer movieid={params.movies}/>
            <div className='bg-[#181818]'>
                <Videos/>
        {/* <h1 className='text-white'>{params.movies}</h1> */}
                <Episodes/>
                <MoreSimilar/>
                <div className='trailer-wrapper '>
                    <FooterCntnt/>
                </div>
            </div>
    </div>
  )
}
