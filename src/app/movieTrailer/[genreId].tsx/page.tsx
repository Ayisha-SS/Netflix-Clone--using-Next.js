// pages/movieTrailer/[genreId].tsx
import React from "react";
import { useRouter } from "next/navigation";
import Trailer from "../trailer";
import MovieSlider from "@/app/movies/general/slider";

const MovieTrailerPage = () => {
  const router = useRouter();
  const { genreId } = router.query;

  if (!genreId) {
    // Render loading state or handle the absence of genreId
    return <p>Loading...</p>;
  }

  return <Trailer genreId={Number(genreId)} />;
};

export default MovieTrailerPage;
