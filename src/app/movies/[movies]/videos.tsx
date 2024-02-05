import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SimilarProps {
    movieid: number;
}

interface VideoProps {
    results: {
        key: string;
        name: string;
        site: string;
        type: string;
    }[];
}

interface TitleProps {
    original_title: string;
    overview: string;
}

export const Videos: React.FC<SimilarProps> = ({ movieid }) => {
    const [videos, setVideos] = useState<VideoProps>({ results: [] });
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState<TitleProps>({
        original_title: "string",
        overview: "string",
    });
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const openModal = (videoKey: string) => {
        setSelectedVideo(videoKey);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedVideo(null);
        document.body.style.overflow = 'auto'
    };

    const getVideo = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=5bcc0dd557136d5008b5eebbc96092f6`
            );
            const json = await response.json();
            setVideos(json || { results: [] });
            setLoading(false);
        } catch (error) {
            console.error("Error fetching movie data:", error);
            setLoading(false);
        }
    };

    const Title = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieid}?api_key=5bcc0dd557136d5008b5eebbc96092f6`
            );
            const json = await response.json();
            setTitle(json);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching movie data:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        Promise.all([getVideo(), Title()])
            .then(() => {
                setLoading(false);
            });
    }, [movieid]);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.2,
        slidesToScroll: 2.2,
    };

    if (loading || !videos || videos.results.length === 0) {
        return null;
    }

    return (
        <>
            <div className="trailer-wrapper pt-[130px] pb-[50px]">
                <div className="border-y-2 border-[#777] py-6">
                    <p className="text-[#a3a3a3] text-base font-normal max-w-[500px] mx-auto text-center">
                        {title.overview &&
                            title.overview.split("").slice(0, 100).join("") + "..."}
                    </p>
                </div>
                <div className="mt-[100px]">
                    <div className="font-sans mb-[50px]">
                        <h2 className="text-white font-medium text-3xl mt-4">
                            Videos
                            <span className="text-[#a3a3a3] ml-1 mr-2">|</span>
                            <span className="text-[#a3a3a3] text-xl font-normal">
                                {title.original_title}
                            </span>
                        </h2>
                    </div>
                    <div>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <ul>
                                <Slider {...settings}>
                                    {videos &&
                                        videos.results
                                            .filter(
                                                (video) =>
                                                    video.site.toLowerCase() === "youtube" &&
                                                    video.type.toLowerCase() === "trailer"
                                            )
                                            .map((video, index) => (
                                                <li key={index} onClick={() => openModal(video.key)}>
                                                    <div className="relative">
                                                        {video.site.toLowerCase() === "youtube" &&
                                                            video.type.toLowerCase() === "trailer" && (
                                                                <img
                                                                    src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
                                                                    alt={`Video ${index}`}
                                                                    className="w-[97%] cursor-pointer"
                                                                />
                                                            )}
                                                    </div>
                                                    <h2 className="text-white mt-2 font-sans font-normal text-base">
                                                        {title.original_title}
                                                    </h2>
                                                </li>
                                            ))}
                                </Slider>
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            {selectedVideo && (
                <div className="fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-70 flex items-center justify-center">
                    <div className="relative p-8  w-full max-w-screen-md overflow-auto">
                        <button
                            className="absolute top-0 right-0 text-white cursor-pointer"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                        <iframe
                            title={selectedVideo}
                            width="800"
                            height="450"
                            src={`https://www.youtube.com/embed/${selectedVideo}`}
                            allowFullScreen
                            className="w-full"
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
};
