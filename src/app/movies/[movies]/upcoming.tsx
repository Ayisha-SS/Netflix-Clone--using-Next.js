import React, { useEffect, useState } from 'react'

interface SimilarProps {
    movieid: number;
}
interface UpcomingProps {
    results: {
        original_title: string;
        overview: string;
    }[];
}

export const UpcomingMovies: React.FC<SimilarProps> = ({ movieid }) => {

    const [upcoming, setupcoming] = useState<UpcomingProps | null>(null);
    const [loading, setLoading] = useState(true);

    const Upcoming = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=5bcc0dd557136d5008b5eebbc96092f6`)
            const json = await response.json();
            setupcoming(json);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching movie data:", error);
            setLoading(false);
        }
    };
    useEffect(() => {
        Upcoming();
    }, [])

    const isEnglish = (text: string) => {
        const englishRegex = /^[a-zA-Z\s]+$/;
        return englishRegex.test(text);
    };

    const truncatText = (text: string, limit: number) => {
        const words = text.split('');
        if (words.length > limit) {
            return words.slice(0, limit).join('') + '...';
        } else {
            return text;
        }
    };

    return (
        <>
            <div className='text-white font-sans trailer-wrapper pt-8'>
                <div className='pb-4'>
                    <h2 className='text-4xl text-white font-sans font-medium '>Coming soon</h2>
                </div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                <div className='pt-3 inline-grid grid-cols-4 gap-2'>
                    {upcoming && upcoming.results
                        .filter((movie) => isEnglish(movie.original_title))
                        .slice(0, 8)
                        .map((movie, index) => (
                            <div key={index} className='mb-3'>
                                <h4 className='hover:underline text-base mb-1'>{movie.original_title}</h4>
                                <p className='text-sm text-[#a3a3a3]'>{truncatText(movie.overview, 100)}</p>
                            </div>
                        ))}
                </div>
                )}
            </div>
        </>
    )
}
