'use client';
import React, { useState,useEffect } from 'react'

interface SimilarProps {
    movieid: number;
  }
interface EpisodeProps{
    file_path:string;
}
interface TitleProps{
	original_title:string;
	overview:string;
}

export const Episodes:React.FC<SimilarProps> = ({movieid}) => {

    const [episodes,setEpisodes] = useState<EpisodeProps[]>([]);
    const [loading,setLoading] = useState(true);
    const [title,setTitle] = useState<TitleProps>([]);

    const Episode = async () =>{
        try{
          const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/images?api_key=5bcc0dd557136d5008b5eebbc96092f6`)
          const json = await response.json();
          setEpisodes(json.backdrops || []);
          setLoading(false);
        }catch(error){
          console.error("Error fetching movie data:",error);
          setLoading(false);
        }
      };
	  
	  const Title = async () =>{
		  try{
			  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=5bcc0dd557136d5008b5eebbc96092f6`)
			  const json = await response.json();
			  setTitle(json);
			  setLoading(false);
			}catch(error){
				console.error("Error fetching movie data:",error);
				setLoading(false); 
			}
		} ;
		
	useEffect( () => {
			Promise.all([Episode(), Title()])
			.then(() => {
				setLoading(false)
			});
		},[movieid]);

    return (
      <>
        <div className='pt-[50px] pb-[50px] trailer-wrapper text-white'>
          <div className='font-sans mb-[10px]'>
            <h2 className='text-white font-medium text-3xl'>
              Episodes
              <span className='text-[#a3a3a3] ml-1 mr-2 '>|</span>
              <span className='text-[#a3a3a3] text-xl font-normal'>{title.original_title}</span>
            </h2>
          </div>
          <div className='mb-[15px]'>
            <p>Chapter 1</p>
          </div>
          <div>
            <h5>Release year: 2023</h5>
            <p className='text-[#a3a3a3] text-sm w-[46%] my-1'>
            {title.overview && title.overview.split('. ')[0] + '.'}            </p>
          </div>
          <div className='pt-4 inline-grid grid-cols-4 gap-4'>
            {episodes.map((episode,index) => (
              <div key={index}>
                <div className='w-[100%]'>
                  <img src={`https://image.tmdb.org/t/p/w500/${episode.file_path}`}  alt={`Episode ${index}`} />
                </div>
                <p className='my-2'>{index}. {title.original_title}</p>
                <div className='pt-1'>
                  <p className='text-[#a3a3a3] text-xs'>
                    At Unicorn Academy, regular teen Sophia has a lot to learn about fantastical creatures, but a dark force threatens to return and destroy unicorn magic!
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  
