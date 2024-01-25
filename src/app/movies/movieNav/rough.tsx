"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Movie {
//   poster_path: string;
  backdrop_path:string;
  title: string;
}

// Import statements and interface declaration remain the same

export default function Recommended() {
    const [movieLists, setMovieLists] = useState<Array<Movie[]>>([]);
    const [isLoading, setIsLoading] = useState(true);
  
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=5bcc0dd557136d5008b5eebbc96092f6"
        );
        const json = await response.json();
        return json.results;
      } catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
      }
    };
  
    const loadMovieLists = async () => {
      try {
        const lists = [];
        for (let i = 0; i < 5; i++) {
          const movies = await fetchMovies();
          lists.push(movies);
        }
        setMovieLists(lists);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      loadMovieLists();
    }, []);
  
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
    };
  
    return (
      <>
        <div className="pt-10">
          {/* Add any other common header or content here */}
          <div className="mb-12">
            <div>
              <h4 className="text-white text-xl my-4">Popular on Netflix</h4>
            </div>
            <div className="pb-5">
              {isLoading ? (
                <p className="text-base text-red-500">Loading movies...</p>
              ) : (
                <Slider className="w-[100%]" {...settings}>
                  {movieLists.map((movieList, listIndex) => (
                    <div key={listIndex} className="block">
                      {movieList.slice(0, 5).map((item, index) => (
                        <div key={index} className="w-[80%]">
                          <img
                            src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                            alt={item.title}
                            className="mb-2 w-[300px] h-[250px]"
                          />
                          <span className="text-white text-base">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
  