
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
            
          <section className='mt-10'>
            <h2 className='mb-5 text-2xl'>Lascia una recensione</h2>
             <FormRewiew key={movie.id} movie_id={movie.id} />
          </section>
           
                <div className="flex flex-wrap flex-col gap-5 my-10 text-center" >
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