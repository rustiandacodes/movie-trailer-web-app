import { AiFillStar } from 'react-icons/ai'
import { BsFillPeopleFill } from 'react-icons/bs'

import { getNowPlaying } from '../../services/TheMovieDB'
import { useState, useEffect } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination, Autoplay } from 'swiper'

const Hero = () => {
  const [nowPlaying, setNowPlaying] = useState([])

  useEffect(() => {
    getNowPlaying().then((result) => {
      setNowPlaying(result)
    })
  }, [])

  return (
    <>
      <p className="title ">Now Playing</p>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper max-w-[1050px]"
      >
        {nowPlaying.map((movie) => {
          return (
            <SwiperSlide key={movie.title}>
              <div className="container mx-auto cursor-pointer bg-hitam-darker rounded-xl">
                <div className="flex justify-between items-center">
                  <div className="px-10 w-[40%] hidden sm:block">
                    <h2 className="lg:text-3xl text-2xl text-white font-bold truncate">
                      {movie.title}
                    </h2>
                    <p className="mt-3 h-16 overflow-hidden text-sm hidden lg:block">
                      {movie.overview}
                    </p>
                    <p>...</p>
                    <div className="flex items-center gap-5 mb-5 mt-5">
                      <div className="flex items-center gap-2">
                        <AiFillStar className="text-yellow-400" />{' '}
                        <p className="text-white text-sm">
                          {movie.vote_average}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <p>
                          <BsFillPeopleFill className="text-slate-600" />
                        </p>
                        <p className="text-white text-sm">{movie.popularity}</p>
                      </div>
                    </div>
                    <button className="text-white bg-red-600 text-sm font-semibold rounded-lg py-2 px-4">
                      View
                    </button>
                  </div>
                  <div className="md:w-[60%] w-full relative">
                    <div className="w-full h-full gradient rounded-lg md:rounded-0 right-0 absolute"></div>
                    <div className="sm:hidden absolute left-5 top-[27%]">
                      <h2 className="text-lg text-white font-bold truncate">
                        {movie.title}
                      </h2>
                      <div className="flex items-center gap-5 my-3">
                        <div className="flex items-center gap-2">
                          <AiFillStar className="text-yellow-400" />{' '}
                          <p className="text-white text-xs">
                            {movie.vote_average}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>
                            <BsFillPeopleFill className="text-slate-600" />
                          </span>
                          <p className="text-white text-xs">
                            {movie.popularity}
                          </p>
                        </div>
                      </div>
                      <button className="text-white bg-red-600 text-xs font-semibold rounded-lg py-2 px-4">
                        View
                      </button>
                    </div>
                    <img
                      className="w-full rounded-lg "
                      src={`${process.env.REACT_APP_BASEIMGURL}${movie.backdrop_path}`}
                      alt="ready-player-one"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default Hero