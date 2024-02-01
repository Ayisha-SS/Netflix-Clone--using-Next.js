'use client';
import React, { useState, useEffect } from 'react'
import Button from '@/app/_component/general/button'
import { usePathname, useSearchParams } from 'next/navigation'

interface Trailer{
    title:string | [];
}

export const Trailer:React.FC = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const movieId = searchParams.get('movieId')

  const [movieDetails, setMovieDetails] = useState<Trailer >();

//   useEffect(() => {
//     if (movieId) 
//     {
//       fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5bcc0dd557136d5008b5eebbc96092f6`)
//         .then((res) => res.json())
//         .then((json) => {
//           setMovieDetails(json.results)
//         });
//     }
//   }, [movieId])
//   console.log("result:",movieDetails);
  
const Movie = () =>{
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5bcc0dd557136d5008b5eebbc96092f6`)
    .then((res) => res.json())
    .then((json) => {
        setMovieDetails(json)
    });
} ;

useEffect(() => {
    if(movieId){
        Movie();
    }
},[movieId]);
console.log("result:",movieDetails);
               
//   if (!movieDetails) {
//     return <p>Loading...</p>
//   }

  return (
    <>
      <div className='relative bg-cover bg-center h-screen z-auto' style={{ backgroundImage: "url('/images/unicorn.jpg')" }}>
        <div className='absolute z-[1] w-full h-full bg-black bg-opacity-70 '>
          <div className='trailer-wrapper z-[1] pt-[120px]'>
            <div className='w-[30%] mt-[56px]'>
                <img src="\images\film-logo.png" alt="Logo" />
            </div>
            <div className='mt-[50px]'>
              <h1 className='text-2xl font-medium text-white'>Migration</h1> 
            </div>
            <div className='pt-4 '>
              <h3 className='text-2xl font-medium text-white'>Unicorn Academy</h3>
              <div className='pt-4 text-[#a3a3a3] '>
                <p>2023 | <span className='border border-[#a1a1a1] px-1'>U/A 7+</span> | 1 Season | Kids</p>
              </div>
              <div className='pt-4 text-white'>
                <div className='w-[38%] mb-2'>
                  <p>When a dark force threatens to destroy Unicorn Island, a brave teen and her five schoolmates must rise up to protect their beloved magical academy.</p>
                </div>
                <div className='text-base font-normal'>
                  <p><span className='text-[#a3a3a3] mr-1'>Starring:</span> Sara Garcia,Sadie Laflamme-Snow,Kamaia Fairburn</p>
                </div>
              </div>
            </div>
            <div className='absolute -bottom-10 left-20 right-24 flex justify-between items-center bg-gradient-to-r from-[#252424] to-[#000] py-2 px-[25px] '>
              <div className='flex items-center gap-2'>
                <div className='w-10'>
                  <img src="\images\N.jpeg" alt="Netflix-logo" />
                </div>
                <h3 className='text-white font-sans text-base'>Watch all you want.</h3>
              </div> 
              <Button label='JOIN NOW' className='bg-red-600 text-white py-3 px-6 text-sm rounded'/>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Trailer;