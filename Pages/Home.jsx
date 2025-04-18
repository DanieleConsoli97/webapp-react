
import { useEffect } from 'react'
import { useMoviesContext } from "../hooks/MoviesContextHooks"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Home = () => {
    const { movies, MoviesFetch } = useMoviesContext()
    useEffect(MoviesFetch, [])
    return (
        <div className='w-full'>
        
            <Swiper navigation={true} modules={[Navigation]} className=" h-200 w-full">
                {
                    !movies ? (
                        <p>Nessun Film trovato</p>
                    ) : (
                        movies?.map((movie) => {

                            return (
                                <SwiperSlide key={movie.id}><img className='object-contain md:object-contain w-full ' src={movie.image} /></SwiperSlide>
                            )
                        })
                    )
                }
            </Swiper>
            <div className='flex justify-center items-center  w-full bg-gray-800 text-white flex-col py-10 '>
                <h1 className='text-5xl my-5'>Benvenuti sul nostro sito</h1>
                <div><p>Preparati a immergerti in un mondo di emozioni</p></div>
            </div>
        </div>
    )
}
export default Home