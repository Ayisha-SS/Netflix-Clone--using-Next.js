import React ,{ useEffect, useState }from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Movie {
    backdrop_path:string;
    title: string;
  }

interface SliderProps {
    genre:string;
    api_link:string;
    genreId:number;
    
}


const MovieSlider :React.FC<SliderProps>=({genre,api_link,genreId}) => {

const [movieList, setMovieList] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    movies();
  }, [genreId]);
  console.log(movieList);

  const settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    
  };

  return (
    <>
         <div className="mb-12">
          <div>
            <h4 className="text-white text-xl my-4">{genre}</h4>
          </div>

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
                            src={api_link + item.backdrop_path  }
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
        </div>
    </>
  )
}
export default MovieSlider
