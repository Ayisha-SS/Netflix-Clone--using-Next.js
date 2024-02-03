import React, { useEffect, useState } from 'react';

interface VideoProps {
  key: string;
  name: string;
  site: string;
  type: string;
}

interface MovieDetailsProps {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  // Add other properties you need from the movie details
}
interface Props{
    movieid:number;
}
const MovieDetails: React.FC<Props> = ({ movieid }) => {
  const [videos, setVideos] = useState<VideoProps[]>([]);
  const [movieDetails, setMovieDetails] = useState<MovieDetailsProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        // Fetch movie details
        const movieDetailsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieid}?api_key=YOUR_API_KEY`
        );
        const movieDetailsJson = await movieDetailsResponse.json();
        setMovieDetails(movieDetailsJson);

        // Fetch videos
        const videosResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=5bcc0dd557136d5008b5eebbc96092f6`
        );
        const videosJson = await videosResponse.json();
        setVideos(videosJson.results || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie data:', error);
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [movieid]);

  console.log('video:',movieDetails);
  

  return (
    <div className='text-black'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{movieDetails?.title}</h1>
          <p>{movieDetails?.overview}</p>
          <p className='mb-1'>Release Date: {movieDetails?.release_date}</p>

          <h2>Videos</h2>
          <ul className='m-2 gap-2'>
            {videos.map((video) => (
              <li key={video.key} className='flex gap-2'>
                <p>Name: {video.name}</p>
                <p>Site: {video.site}</p>
                <p>Type: {video.type}</p>
                <p>Key: {video.key}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
