"use client";
import React ,{ useEffect, useState }from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

interface Movie {
    backdrop_path:string;
    title: string;
    id:number;
  }

interface SliderProps {
    genreId:number; 
}

interface Genre {
    id: number;
    name: string;
  }

const MovieSlider :React.FC<SliderProps> = ({genreId}) => {

  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [genres, setGenres] = useState<Genre[]>([]);

  const movies = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=5bcc0dd557136d5008b5eebbc96092f6&with_genres=${genreId}`
    )
    .then((res) => res.json())
    .then((json) => {
        setMovieList(json.results);
        setIsLoading(false);
    });
  };

  const Genres = () => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=5bcc0dd557136d5008b5eebbc96092f6`
    )
      .then((res) => res.json())
      .then((json) => {
        setGenres(json.genres);
      });
  };

  useEffect(() => {
    Genres();
    movies();
  }, [genreId]);
  console.log(movieList);

  const genreName = genres.find((genre) => genre.id === genreId)?.name || 'Unknown';

  const settings = {
    dots:false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 5,   
  };

  return (
    <>
        <div className="mb-12">
            <div>
                <h4 className="text-white text-xl my-4">{genreName}</h4>
            </div>
        <Link href="/movieTrailer/[genreId]" as={`/moviesTrailer/${genreId}`} key={genreId}>
            <div className="pb-5">
                <ul className="flex w-[100%]">
                {isLoading ? (
                    <p className="text-base text-white">Loading movies...</p>
                ) : (
                    <Slider className="w-[100%]" {...settings}>
                    {movieList.slice(0, 20).map((item, index) => (
                        <li key={index} className="">
                        <div className='flex flex-col items-center '>
                            <div className="w-[95%] h-[50%]">
                            <img
                                key={index}
                                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                                alt={item.title}
                                className="mb-2 w-[100%] h-[200px]"
                            />
                            </div>
                            <span className="text-white text-base">{item.title}</span>
                        </div>
                        </li>
                    ))}
                    </Slider>
                )}
                </ul>
          </div>  
     </Link>
        </div>
    </>
  )
}
export default MovieSlider
