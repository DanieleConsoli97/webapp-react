
import { useEffect } from 'react'

import CardSingleFilm from '../components/CardSingleFilm.jsx'

import { useMoviesContext } from "../hooks/MoviesContextHooks.jsx"

import { useParams } from 'react-router-dom'

import Review from '../components/Review.jsx'

import FormRewiew from '../components/FormReview.jsx'

const Film = () => {
    const { id } = useParams()
   
    const { movie, MovieSingle } = useMoviesContext()
    
    useEffect(() => MovieSingle(id), [id])
    
    const reviews = movie.reviews
    
    return (
        <>
            <div className='mt-10 mx-5'>
                <div className="flex flex-1/2 gap-6  ">
                    {
                        !movie ? (
                            <p>Nessun Film trovato</p>
                        ) : (
                            <CardSingleFilm key={id} movie={movie} />
                        )
                    }
                </div>
            
          
            <FormRewiew key={movie.id} movie_id={movie.id} />
                <div className="flex gap-3 m-20 text-center" >
                    {
                        reviews?.map((review) => {
                            return (
                                <Review key={review.id} review={review} />
                            )
                        })
                    }
                </div>
                </div>
        </>
    )
}
export default Film