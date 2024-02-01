// 'use client';
import React from 'react';

interface SimilarProps {
  movieid: number;
}

export const MoreSimilar: React.FC<SimilarProps> = ({ movieid }) => {
  const similarImages = [
    '/images/v1.jpg',
    '/images/v2.jpg',
    '/images/v3.jpg',
    '/images/v1.jpg',
    '/images/v2.jpg',
    '/images/v3.jpg',
    '/images/v1.jpg',
    '/images/v2.jpg',
  ];

  return (
    <div className='pt-[50px] trailer-wrapper pb-[50px]'>
      <h1>{movieid}</h1>
      <div>
        <h3 className='text-white font-medium text-3xl'>More Like This</h3>
      </div>
      <div className='pt-4 inline-grid grid-cols-4 gap-4'>
        {similarImages.map((image, index) => (
          <div key={index}>
            <div>
              <img src={image} alt={`Similar Image ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
