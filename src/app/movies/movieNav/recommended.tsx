"use client"
import React, { useEffect, useState } from 'react'


export default function Recommended() {
  const [movieList,setMovieList] = useState([]);
  const movies = ()=>{
    fetch ("https://api.themoviedb.org/3/discover/movie?api_key=5bcc0dd557136d5008b5eebbc96092f6")
    .then (res => res.json())
    .then (json => setMovieList(json.results))
   
  }
useEffect(() =>{
  movies();
},[]) 
console.log(movieList);

  
  return (
    <>
        <div className='pt-10'>
            <h3 className='text-white text-xl pb-4 cursor-pointer'>We Think You'll Love These</h3>
            {/* <div>
              <ul className='flex'>
                {movieList.map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </ul>
            </div> */}
            <div className='mb-12'>
              <div>
                <h4 className='text-white text-xl my-4'>Critically Acclaimed TV Shows</h4>
              </div>
              <ul className='flex flex-col '>
                <li className='w-[30%]'>
                  <img src="images\mh.jpg" alt="Money Heist" />
                </li>
                  <span className='text-white text-base mt-3'>Money Heist</span>
              </ul>
            </div>
            
        </div>
    </>
  )
}
