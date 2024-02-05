import React, { useState, useEffect } from 'react'
import Button from '@/app/_component/general/button'
import Link from 'next/link';

interface TrailerProps {
    movieid: number;
}
interface Trailer {
    original_title: string;
    overview: string;
    backdrop_path: string;
}
interface LogoProps {
    logos: { file_path: string }[];
}
interface CastProps {
    cast: { original_name: string }[];
}

export const Trailer: React.FC<TrailerProps> = ({ movieid }) => {

    const [movieDetails, setMovieDetails] = useState<Trailer | null>(null);
    const [logoPath, setLogoPath] = useState<LogoProps | null>(null);
    const [castName, setCastName] = useState<CastProps | null>(null);
    const [loading, setLoading] = useState(true);

    const getMovie = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieid}?api_key=5bcc0dd557136d5008b5eebbc96092f6`
            );
            const json = await response.json();
            setMovieDetails(json);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching movie data:", error);
            setLoading(false);
        }
    };

    const Logo = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieid}/images?api_key=5bcc0dd557136d5008b5eebbc96092f6`
            );
            const json = await response.json();

            if (json && json.logos) {
                const eng = json.logos.filter(({ iso_639_1 }: { iso_639_1: string }) => iso_639_1 === "en");
                setLogoPath({ logos: eng });
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const Cast = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=5bcc0dd557136d5008b5eebbc96092f6`);
            const json = await response.json();
            if (json) {
                setCastName(json);
                setLoading(false);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        Promise.all([getMovie(), Logo(), Cast()])
            .then(() => {
                setLoading(false);
            })
    }, [movieid])

    console.log("result:", movieDetails?.original_title);

    return (
        <>
            {
                loading ? <p>loading....</p> :
                    <div className='relative h-screen ' style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='absolute z-[1] w-full h-full bg-gradient-to-r from-[#181818] via-[hsla(0,0%,9%,.98)] to-[hsla(0,0%,9%,0)]'>
                            <div className='trailer-wrapper z-[1] pt-[120px] '>
                                <div className='flex flex-col justify-center w-full'>
                                    <div className='w-[30%] mb-[50px] bg-cover'>
                                        {logoPath && logoPath.logos && logoPath.logos[0] && ( <img src={`https://image.tmdb.org/t/p/original/${logoPath?.logos[0]?.file_path}`} alt="Logo" width={170} /> )}
                                    </div>

                                    <div className='pt-[20px] pb-[30%]'>
                                        <h1 className='text-2xl font-medium text-white'>{movieDetails?.original_title}</h1>
                                        <div className='pt-5 text-[#a3a3a3] '>
                                            <p>2023 | <span className='border border-[#a1a1a1] px-1'>U/A 7+</span> | 1 Season | Kids</p>
                                        </div>
                                        <div className='pt-4 text-white'>
                                            <div className='w-[50%] mb-4'>
                                                <p>{movieDetails?.overview}</p>
                                            </div>
                                            <div className='text-base font-normal'>
                                                <p>
                                                    <span className='text-[#a3a3a3] mr-1'>Starring:</span>{' '}
                                                        {castName?.cast && castName.cast.length > 0 ?
                                                        castName.cast
                                                            .slice(0, 5)
                                                            .map((actor) => actor.original_name)
                                                            .join(',') : 'N/A'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='absolute -bottom-14 left-20 right-24 flex justify-between items-center bg-gradient-to-r from-[#252424] to-[#000] py-2 px-[25px] '>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-10'>
                                                <img src="\images\N.jpeg" alt="Netflix-logo" />
                                            </div>
                                            <h3 className='text-white font-sans text-base'>Watch all you want.</h3>
                                        </div>
                                        <Link href='/login'><Button label='JOIN NOW' className='bg-red-600 text-white py-3 px-6 text-sm rounded' /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Trailer;
