
import { useEffect } from 'react'
import Card from '../components/Card.jsx'
import { useMoviesContext } from "../hooks/MoviesContextHooks.jsx"
import { useParams } from 'react-router-dom'
import Review from '../components/Review.jsx'

const Film = () => {
    const { id } = useParams()
    const { movie, MovieSingle } = useMoviesContext()
    useEffect(() => MovieSingle(id), [])
    const reviews=movie.reviews
    return (
        <>
            <div className="container flex flex-wrap gap-2 m-auto justify-center mt-3">
                {
                    !movie ? (
                        <p>Nessun Film trovato</p>
                    ) : (
                       
                                <Card key={id} movie={movie} />

                    )
                }
            </div>
            
            <div className="container flex flex-col gap-2 m-auto items-center mt-3 text-center" >
                {  
                       reviews?.map((review) => {
                            return (
                                <Review key={review.id} review={review} />
                            )
                        })
                }
            </div>
        </>
    )
}
export default Film