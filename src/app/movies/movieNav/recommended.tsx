"use client" 
import React from "react";
// import { useRouter } from "next/navigation";
import { MovieSlider } from "../general/slider";
import MovieFooter from "../footer/page";

export default function Recommended() {
  // const navigation = useRouter();
const movieSliderData = [
    {genreId:16},
    {genreId:28},
    {genreId:35},
    {genreId:18},
    {genreId:36},
    {genreId:10751},
    {genreId:27},
    {genreId:14},
    {genreId:10749},
    {genreId:99},   
];


  return (
    <>
      <div className="pt-10">
        {movieSliderData
        .filter((sliderData) => sliderData)
        .map((sliderData,index) => (
            <MovieSlider key={index} genreId={sliderData.genreId} />
        ))}
      </div>

      <MovieFooter/>
    </>
  );
}
