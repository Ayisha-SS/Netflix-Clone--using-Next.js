"use client";
import React, { useEffect, useState } from "react";
import MovieSlider from "../general/slider";
import Footer from "@/app/main/footer/components/page";
import FooterCntnt from "@/app/main/footer/components/footerCntnt";




export default function Recommended() {
  

 
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
]

  return (
    <>
      <div className="pt-10">
        {movieSliderData.map((sliderData,index) => (
            <MovieSlider key={index} genreId={sliderData.genreId}/>
        ))}
      </div>

      <FooterCntnt/>
    </>
  );
}
