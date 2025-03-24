
import { useEffect } from 'react'
import Card from '../components/Card.jsx'

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
            <div className='container flex justify-center'>
                <div className="flex flex-wrap gap-2 m-auto justify-center mt-3 basis-1/3">
                    {
                        !movie ? (
                            <p>Nessun Film trovato</p>
                        ) : (
                            <Card key={id} movie={movie} />
                        )
                    }
                </div>

                <div className="container flex flex-col gap-2 m-auto items-center mt-3 text-center basis-1/3" >
                    {
                        reviews?.map((review) => {
                            return (
                                <Review key={review.id} review={review} />
                            )
                        })
                    }
                </div>
                <FormRewiew key={movie.id} movie_id={movie.id} />
            </div>
            
        </>
    )
}
export default Film