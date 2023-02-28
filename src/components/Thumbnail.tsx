import React from 'react';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { Movie } from '@/@types/typings';
import { baseUrlMedium } from '@/constants/movie';
import { modalState, movieState } from '@/atoms/modalAtom';
import { DocumentData } from 'firebase/firestore';

interface ThumbnailProps {
  // When using firebase
  movie: Movie | DocumentData

  //movie: Movie
}

function Thumbnail({ movie }: ThumbnailProps) {

  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200
    ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        setCurrentMovie(movie)
        setShowModal(true)
      }}
    >
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
