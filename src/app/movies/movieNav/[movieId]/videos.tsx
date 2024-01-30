'use client';
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Videos() {

    const settings = {
        dots:false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.2,
        slidesToScroll: 2.2,   
      };


  return (
    <>
        <div className='trailer-wrapper pt-[130px] pb-[100px]'>
            <div className='border-y-2 border-[#777] py-6'>
                <p className='text-[#a3a3a3] text-base font-normal max-w-[500px] mx-auto text-center'>This fantastical animated adventure series is based on the books by Julie Sykes.</p>
            </div>
            <div className='mt-[100px]'>
                <div className='font-sans mb-[50px]'>
                    <h2 className='text-white font-medium text-3xl'>Videos <span className='text-[#a3a3a3] ml-1 mr-2 '>|</span><span className='text-[#a3a3a3] text-xl font-normal'>Unicorn Academy</span></h2>
                </div>
                <div>
                    <ul>
                        <Slider {...settings}>
                        <li>
                            <div className='relative'><img src="\images\v1.jpg" alt="" className='w-[97%]'/></div>
                            <svg viewBox="0 0 50 50" data-uia="additional-video-play-icon" className='absolute bottom-[30px] left-0 h-[90px] p-5'>
                                <g fill="none" fill-rule="nonzero"><path fill="#fff" d="M25 50C11.2 50 0 38.8 0 25S11.2 0 25 0s25 11.2 25 25-11.2 25-25 25z"></path>
                                <path fill="#000" d="M35.3 25l-15.6-8.6v17.2z"></path></g>
                            </svg>
                            <h2 className='text-white mt-2 font-sans font-normal text-base'>Chapter 1 Trailer: Unicorn Academy</h2>
                        </li>
                        <li>
                            <div className='relative'><img src="\images\v2.jpg" alt="" className='w-[97%]'/></div>
                            <svg viewBox="0 0 50 50" data-uia="additional-video-play-icon" className='absolute bottom-[30px] left-0 h-[90px] p-5'>
                                <g fill="none" fill-rule="nonzero"><path fill="#fff" d="M25 50C11.2 50 0 38.8 0 25S11.2 0 25 0s25 11.2 25 25-11.2 25-25 25z"></path>
                                <path fill="#000" d="M35.3 25l-15.6-8.6v17.2z"></path></g>
                            </svg>
                            <h2 className='text-white mt-2 font-sans font-normal text-base'>Chapter 1 Teaser: Unicorn Academy</h2>
                        </li>
                        <li>
                            <div className='relative'><img src="\images\v3.jpg" alt="" className='w-[97%]'/></div>
                            <svg viewBox="0 0 50 50" data-uia="additional-video-play-icon" className='absolute bottom-[30px] left-0 h-[90px] p-5'>
                                <g fill="none" fill-rule="nonzero"><path fill="#fff" d="M25 50C11.2 50 0 38.8 0 25S11.2 0 25 0s25 11.2 25 25-11.2 25-25 25z"></path>
                                <path fill="#000" d="M35.3 25l-15.6-8.6v17.2z"></path></g>
                            </svg>
                            <h2 className='text-white mt-2 font-sans font-normal text-base'>Chapter 1 Teaser 2: Unicorn Academy</h2>
                        </li>
                        </Slider>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}
