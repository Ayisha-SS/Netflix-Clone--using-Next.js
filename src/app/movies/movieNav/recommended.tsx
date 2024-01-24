"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Movie {
  poster_path: string;
  title: string;
}

export default function Recommended() {
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);

  const movies = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=5bcc0dd557136d5008b5eebbc96092f6"
    )
      .then((res) => res.json())
      .then((json) => {
        setMovieList(json.results);
        setIsLoading(false);
      });
  };

  useEffect( () => {
    movies();
  }, []);
  console.log(movieList);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <>
      <div className="pt-10">
        {/* <h3 className="text-white text-xl pb-4 cursor-pointer">
            We Think You'll Love These
        </h3> */}
        <div className="mb-12">
          <div>
            <h4 className="text-white text-xl my-4">Popular on Netflix</h4>
          </div>
          <div className="pb-5">
            <ul className="flex w-[100%]">
              {isLoading ? (
                <p className="text-base text-red-500">Loading movies...</p>
              ) : (
                <Slider className="w-[100%]" {...settings}>
                  {movieList.slice(0,20).map((item, index) => (
                    <li key={index} className="">
                      <div className="w-[80%]">
                        <img
                            key={index}
                            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                            alt={item.title}
                            className="mb-2 w-[300px] h-[250px]"
                            />
                      </div>
                      <span className="text-white text-base">{item.title}</span>
                    </li>
                  ))}
                </Slider>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
