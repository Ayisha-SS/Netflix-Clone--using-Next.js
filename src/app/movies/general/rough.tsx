import React, { useState, useEffect } from 'react';

interface Movie {
  keywords: {
    id: number;
    title: string;
    release_date: string;
  }[];
}

const MovieSearch: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [movies, setMovies] = useState<Movie>({ keywords: [] });
  const [loading, setLoading] = useState<boolean>(false);


  const searchMovies = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=5bcc0dd557136d5008b5eebbc96092f6&query=${query}`
      );
      const data = await response.json();

      setMovies({ keywords: data.results });
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query.trim() !== '') {
      searchMovies();
    } else {
      setMovies({ keywords: [] });
    }
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {movies.keywords && movies.keywords.map((movie) => (
            <li key={movie.id}>
              {movie.title} - Release Date: {movie.release_date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieSearch;
