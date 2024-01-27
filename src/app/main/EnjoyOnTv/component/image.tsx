import React from 'react'

export default function Image() {
  return (
    <>
      <div className='relative '>
        <div>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt='Tv-video'  />
        </div>
        <div className='absolute left-[14%] top-[21%] max-h-[50%] max-w-[72%] z-[]'>
            <video autoPlay loop muted playsInline>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4">
                </source>
            </video>
        </div>
      </div>
    </>
  )
}
