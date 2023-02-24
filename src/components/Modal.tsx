import { BsX } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import MuiModal from '@mui/material/Modal';
import ReactPlayer from 'react-player/lazy';
import { AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineThumbUp } from 'react-icons/hi';
import React, { useEffect, useState } from 'react';
import { Element, Genre, Movie } from '@/@types/typings';
import { modalState, movieState } from '@/atoms/modalAtom';
import { BsVolumeMute, BsVolumeUp } from 'react-icons/bs';
/* 
import ReactPlayer from 'react-player'

// Render a YouTube video player
<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
*/
function Modal() {
  //  const [movie, setMovie] = useState<Movie | null>(null);
  const [muted, setMuted] = useState(true);
  const [trailer, setTrailer] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [movie, setMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);

  useEffect(() => {
    if (!movie) return

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY
        }&language=en-US&append_to_response=videos`
      )
        .then((response) => response.json())
        .catch((error) => console.log(error.message));

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === 'Trailer'
        );

        setTrailer(data?.videos?.results[index]?.key);
      }

      if (data?.genres) {
        setGenres(data.genres)
      }
    }

    fetchMovie();
  }, [movie]);


  function handleClose() {
    setShowModal(false);
  }

  console.log(trailer)

  return (
    <MuiModal open={showModal} onClose={handleClose}
      className='fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden
    overflow-y-scroll rounded-md scrollbar-hide'>
      <>
        <button onClick={handleClose}
          className='modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]'>
          <BsX className='h-6 w-6' />
        </button>

        <div className='relative pt-[56.25%]'>
          <ReactPlayer
            playing
            width="100%"
            height="100%"
            muted={muted}
            url={`https://www.youtube.com/watch?v=${trailer}`}
            style={{ position: 'absolute', top: '0', left: '0' }}
          />

          <div className='absolute bottom-10 flex w-full items-center justify-between px-10'>
            <div className='flex space-x-2'>
              <button className='flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold
              text-black transition hover:bg-[#e6e6e6]'>
                <FaPlay className='h-7 w-7 text-black' />
                Play
              </button>

              <button className='modalButton'>
                <AiOutlinePlus className='h-7 w-7' />
              </button>

              <button className='modalButton'>
                <HiOutlineThumbUp className='h-7 w-7' />
              </button>
            </div>

            <button
              className='modalButton'
              onClick={() => setMuted(!muted)}>
              {muted ? (
                <BsVolumeMute className='h-7 w-7' />
              ) : (
                <BsVolumeUp className='h-7 w-7' />
              )}
            </button>
          </div>
        </div>

        <div>
          <div className="">
            <div className='flex items-center space-x-2 text-sm'>
              <p className='font-semibold text-green-400'>
                {movie!.vote_average * 10}% Match
              </p>
              <p className='font-light'>
                {movie?.release_date || movie?.first_air_date}
              </p>
              <div className='flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs'>
                HD
              </div>
            </div>

            <div>
              <p>{movie?.overview}</p>
            </div>
          </div>
        </div>

      </>
    </MuiModal>
  )
}

export default Modal
