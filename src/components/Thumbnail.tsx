import { Movie } from '@/@types/typings';
import { baseUrlMedium } from '@/constants/movie';
import Image from 'next/image';
import React from 'react';

interface ThumbnailProps {
  // When using firebase
  // movie: Movie | DocumentData
  movie: Movie
}

function Thumbnail({ movie }: ThumbnailProps) {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200
    ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        fill
        alt={movie.title || ''}
        className='rounded-sm object-cover md:rounded'
        src={`${baseUrlMedium}${movie.backdrop_path || movie.poster_path}`}
      />
    </div>
  )
}

export default Thumbnail
