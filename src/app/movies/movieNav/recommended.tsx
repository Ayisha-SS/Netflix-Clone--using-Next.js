"use client";
import React, { useEffect, useState } from "react";
import MovieSlider from "../general/slider";




export default function Recommended() {
  

 
const movieSliderData = [
    {genre:"Popular on Netflix",api_link:"https://image.tmdb.org/t/p/w500/",genreId:16},
    {genre:"Sitcoms",api_link:"https://image.tmdb.org/t/p/w500/",genreId:28},
    {genre:"K-Dramas",api_link:"https://image.tmdb.org/t/p/w500/",genreId:35},
    {genre:"US TV Dramas",api_link:"https://image.tmdb.org/t/p/w500/",genreId:80},
    {genre:"Made in India",api_link:"https://image.tmdb.org/t/p/w500/",genreId:10751},
    {genre:"Critically Acclaimed TV Shows",api_link:"https://image.tmdb.org/t/p/w500/",genreId:10763},
    {genre:"Children & Family TV",api_link:"https://image.tmdb.org/t/p/w500/",genreId:10762}
    
]

  

  return (
    <>
      <div className="pt-10">
        {movieSliderData.map((sliderData,index) => (
            <MovieSlider key={index} genre={sliderData.genre} api_link={sliderData.api_link} genreId={sliderData.genreId}/>
        ))}
      </div>
    </>
  );
}
