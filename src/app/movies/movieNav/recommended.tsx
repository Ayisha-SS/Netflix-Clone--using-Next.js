"use client";
import React, { useEffect, useState } from "react";
import MovieSlider from "../general/slider";




export default function Recommended() {
  

 
const movieSliderData = [
    {genre:"Popular on Netflix",genreId:16},
    {genre:"Sitcoms",genreId:28},
    {genre:"K-Dramas",genreId:35},
    {genre:"US TV Dramas",genreId:80},
    {genre:"Made in India",genreId:10751},
    {genre:"Critically Acclaimed TV Shows",genreId:10763},
    {genre:"Children & Family TV",genreId:18}
    
]

  return (
    <>
      <div className="pt-10">
        {movieSliderData.map((sliderData,index) => (
            <MovieSlider key={index} genre={sliderData.genre}  genreId={sliderData.genreId}/>
        ))}
      </div>
    </>
  );
}
