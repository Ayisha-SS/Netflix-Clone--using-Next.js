// // import React from 'react'
// import MoviesNavbar from '../movies/movieNav/moviesNav'
// import Trailer from './trailer'

// export default function MovieTrailer() {
//   return (
//     <div>
//       <MoviesNavbar/>
//       <Trailer/>
//     </div>
//   )
// }

import { useRouter } from 'next/router';

export default function MovieTrailer() {
  const router = useRouter();
  const { movieId } = router.query;

  return (
    <div>
      <h1>Movie Trailer Page</h1>
      <p>Movie ID: {movieId}</p>
    </div>
  );
}
