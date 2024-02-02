'use client';
import React, { useState,useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SimilarProps {
    movieid: number;
  }
interface VideoProps{
    file_path:string;
    
}
interface TitleProps{
	original_title:string;
	overview:string;
}
export const Videos: React.FC<SimilarProps> = ({movieid}) => {

    const [videos,setVideos] = useState<VideoProps[]>([]);
    const [loading, setLoading] = useState(true);
	const [title,setTitle] = useState<TitleProps>([])

    const video = async () =>{
        try{
          const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/images?api_key=5bcc0dd557136d5008b5eebbc96092f6`)
          const json = await response.json();
          setVideos(json.backdrops || []);
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
			Promise.all([video(), Title()])
			.then(() => {
				setLoading(false)
			});
		},[movieid]);

    console.log("Similar Movies:", Videos);
 
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.2,
    slidesToScroll: 2.2,
  };
  
//   const videoData = [
//     {
//       image: "/images/v1.jpg",
//       title: "Chapter 1 Trailer: Unicorn Academy",
//     },
//     {
//       image: "/images/v2.jpg",
//       title: "Chapter 1 Teaser: Unicorn Academy",
//     },
//     {
//       image: "/images/v3.jpg",
//       title: "Chapter 1 Teaser 2: Unicorn Academy",
//     },
//   ];

  return (
    <>
      <div className='trailer-wrapper pt-[130px] pb-[50px]'>
        <div className='border-y-2 border-[#777] py-6'>
          <p className='text-[#a3a3a3] text-base font-normal max-w-[500px] mx-auto text-center'>
		  {title.overview && title.overview.split('. ')[0] + '.'}
          </p>
        </div>
        <div className='mt-[100px]'>
          <div className='font-sans mb-[50px]'>
            <h2 className='text-white font-medium text-3xl'>
              Videos
              <span className='text-[#a3a3a3] ml-1 mr-2'>|</span>
              <span className='text-[#a3a3a3] text-xl font-normal'>{title.original_title}</span>
            </h2>
          </div>
          <div>
            <ul>
              <Slider {...settings}>
                {videos.map((video, index) => (
                  <li key={index}>
                    <div className='relative'>
                      <img src={`https://image.tmdb.org/t/p/w500/${video.file_path}`} alt={`Video ${index}`} className='w-[97%]' />
                    </div>
                    <svg viewBox="0 0 50 50" data-uia="additional-video-play-icon" className='absolute bottom-[30px] left-0 h-[90px] p-5'>
                      <g fill="none" fill-rule="nonzero">
                        <path fill="#fff" d="M25 50C11.2 50 0 38.8 0 25S11.2 0 25 0s25 11.2 25 25-11.2 25-25 25z"></path>
                        <path fill="#000" d="M35.3 25l-15.6-8.6v17.2z"></path>
                      </g>
                    </svg>
                    <h2 className='text-white mt-2 font-sans font-normal text-base'>{title.original_title}</h2>
                  </li>
                ))}
              </Slider>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
