'use client';
import React, { useState, useEffect } from 'react'
import Button from '@/app/_component/general/button'
import { usePathname, useSearchParams } from 'next/navigation'

interface TrailerProps {
	// params: { movies: string };
	movieid:number;
}
interface Trailer{
	original_title:string;
  overview:string;
  // logo_path:string;
  poster_path:string;
  backdrop_path:string;
}
interface LogoProps{
  logos:{file_path:string}[];
}

export const Trailer:React.FC<TrailerProps>=({movieid})=> {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const movieId = searchParams.get('movieId')

  const [movieDetails, setMovieDetails] = useState<Trailer | null>([]);
  const [logoPath,setLogoPath] = useState<LogoProps | null>([])
  const [loading, setLoading] = useState(true);

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
  
const Movie = async () =>{
  try{
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=5bcc0dd557136d5008b5eebbc96092f6`)
    const json = await response.json();
    setMovieDetails(json);
    setLoading(false);
  }catch(error){
    console.error("Error fetching movie data:",error);
    setLoading(false);
    
  }
} ;

const Logo = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/images?api_key=5bcc0dd557136d5008b5eebbc96092f6`);
    const json = await response.json();

    if (json && json.logos) {
      const eng = json.logos.filter(({ iso_639_1 }: { iso_639_1: string }) => iso_639_1 === "en");
      setLogoPath({ logos: eng });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

useEffect(() => {
       Movie();
       Logo();
	},[]);
console.log("result:",movieDetails?.original_title);
               

  return (
    <>
	{
		loading?<p>loading....</p>:
      <div className='relative h-screen z-auto' style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}')`,backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className='absolute z-[1] w-full h-full bg-black bg-opacity-70 '>
          <div className='trailer-wrapper z-[1] pt-[120px]'>
            <div className='w-[30%] mt-[30px]'>
                {logoPath && logoPath.logos && logoPath.logos[0] &&(<img src={`https://image.tmdb.org/t/p/original/${logoPath?.logos[0]?.file_path}`} alt="Logo" className='w-[60%]' />)}
            </div>
            
            <div className='pt-[20px] pb-[30%]'>
              <h1 className='text-2xl font-medium text-white'>{movieDetails?.original_title }</h1> 
              <div className='pt-4 text-[#a3a3a3] '>
                <p>2023 | <span className='border border-[#a1a1a1] px-1'>U/A 7+</span> | 1 Season | Kids</p>
              </div>
              <div className='pt-4 text-white'>
                <div className='w-[38%] mb-2'>
                  <p>{movieDetails?.overview}</p>
                </div>
                <div className='text-base font-normal'>
                  <p><span className='text-[#a3a3a3] mr-1'>Starring:</span> Sara Garcia,Sadie Laflamme-Snow,Kamaia Fairburn</p>
                </div>
              </div>
            </div>
            <div className='absolute -bottom-11 left-20 right-24 flex justify-between items-center bg-gradient-to-r from-[#252424] to-[#000] py-2 px-[25px] '>
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
}
    </>
  )
}

export default Trailer;

// import React from 'react'

// export default function Trailer() {
//   return (
// 	<div>
// 		{movieid}
// 	</div>
//   )
// }
