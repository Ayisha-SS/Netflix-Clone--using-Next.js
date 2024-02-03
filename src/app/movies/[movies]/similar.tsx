'use client';
import React, { useState,useEffect } from 'react';

interface SimilarProps {
  movieid: number;
}
interface MovieProps{
  backdrop_path:string;
}

export const MoreSimilar: React.FC<SimilarProps> = ({ movieid }) => {
 
  const [similarMovies,setSimilarMovies] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState(true);

  const similar = async () =>{
    try{
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/similar?api_key=5bcc0dd557136d5008b5eebbc96092f6`)
      const json = await response.json();
      setSimilarMovies(json.results || []);
      setLoading(false);
    }catch(error){
      console.error("Error fetching movie data:",error);
      setLoading(false);
    }
  };
  useEffect( () => {
    similar();
  },[movieid]);
  console.log("Similar Movies:", similarMovies);

  if(loading || !similarMovies || similarMovies.length === 0){
    return null;
  }

  return (
    
    <div className='pt-[50px] trailer-wrapper pb-[50px]'>
      <div>
        <h3 className='text-white font-medium text-3xl mt-4'>More Like This</h3>
      </div>
      {loading ? (
        <p>Loading...</p> 
      ) : (
        <div className='pt-4 inline-grid grid-cols-4 gap-4'>
          {similarMovies
          .slice(0,12)
          .filter((movie) => movie.backdrop_path)
          .map((movie, index) => (
            <div key={index}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={`similar movie ${index}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  
  );
};
