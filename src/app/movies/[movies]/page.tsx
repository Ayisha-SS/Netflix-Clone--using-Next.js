'use client';
import React from 'react'
import MoviesNavbar from '../movieNav/moviesNav'
import { Videos } from './videos'
import Trailer from "./trailer"
import { Episodes } from './episodes'
import { MoreSimilar } from './similar'
import MovieFooter from '../footer/page'
import { UpcomingMovies } from './upcoming'

export default function MovieTrailer({ params }: { params: { movies: number } }) {

    return (
        <div >
            <MoviesNavbar />
            <Trailer movieid={params.movies} />
            <div className='bg-[#181818]'>
                <Videos movieid={params.movies} />
                <Episodes movieid={params.movies} />
                <MoreSimilar movieid={params.movies} />
                <UpcomingMovies movieid={params.movies} />
            </div>
            <div className=' bg-[#181818]'>
                <MovieFooter />
            </div>

        </div>
    )
}
