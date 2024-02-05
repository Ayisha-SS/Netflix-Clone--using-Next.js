import React, { useState, useEffect } from 'react'

interface SimilarProps {
    movieid: number;
}
interface EpisodeProps {
    file_path: string;
}
interface TitleProps {
    original_title: string;
    overview: string;
    release_date: string;
}

export const Episodes: React.FC<SimilarProps> = ({ movieid }) => {

    const [episodes, setEpisodes] = useState<EpisodeProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState<TitleProps>({
        original_title: 'string',
        overview: 'string',
        release_date: 'string',
    });

    const fetchEpisodes = async () => {
        try {
            const response = await fetch(`
          https://api.themoviedb.org/3/movie/${movieid}/images?api_key=5bcc0dd557136d5008b5eebbc96092f6`
            )
            const json = await response.json();
            setEpisodes(json.backdrops || []);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching movie data:", error);
            setLoading(false);
        }
    };

    const fetchTitle = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=5bcc0dd557136d5008b5eebbc96092f6`)
            const json = await response.json();
            setTitle(json);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching movie data:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        Promise.all([fetchEpisodes(), fetchTitle()])
            .then(() => {
                setLoading(false)
            });
    }, [movieid]);

    const isEnglish = (text: string) => {
        const englishRegex = /^[a-zA-Z\s]+$/;
        return englishRegex.test(text);
    };

    if (loading || !episodes || episodes.length === 0) {
        return null;
    }

    return (
        <>
            <div className='pt-[30px] pb-[50px] trailer-wrapper text-white'>
                <div className='font-sans mb-[10px]'>
                    <h2 className='text-white font-medium text-3xl mt-4'>
                        Episodes
                        <span className='text-[#a3a3a3] ml-1 mr-2 '>|</span>
                        <span className='text-[#a3a3a3] text-xl font-normal'>{title.original_title}</span>
                    </h2>
                </div>
                <div className='mb-[15px]'>
                    <p>Chapter 1</p>
                </div>
                <div>
                    <h5>Release year: {title.release_date && title.release_date.split('-')[0]}</h5>
                    <p className='text-[#a3a3a3] text-sm w-[46%] my-1'>
                        {title.overview && title.overview.split('. ')[0] + '.'} </p>
                </div>
                <div className='pt-4 inline-grid grid-cols-4 gap-4'>
                    {episodes
                        .slice(0, 12)
                        .filter((episode) => episode.file_path)
                        .map((episode, index) => (
                            <div key={index}>
                                <div className='w-[100%]'>
                                    <img src={`https://image.tmdb.org/t/p/w500/${episode.file_path}`} alt={`Episode ${index}`} />
                                </div>
                                <p className='my-2'>{index + 1}. {title.original_title}</p>
                                <div className='pt-1'>
                                    <p className='text-[#a3a3a3] text-xs'>
                                        {title.overview && title.overview.split('. ')[0] + '.'}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}

