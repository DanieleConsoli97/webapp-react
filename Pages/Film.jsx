
import { useEffect } from 'react'
import Card from '../components/Card.jsx'
import { useMoviesContext } from "../hooks/MoviesContextHooks.jsx"
import { useParams } from 'react-router-dom'

const Film = () => {
    const {id} = useParams()
    const {movie,MovieSingle} = useMoviesContext()
     useEffect (()=>MovieSingle(id), [])
    
    
     return (
        <>
        <div className="container flex flex-wrap gap-2 m-auto justify-center mt-3">
            {
        !movie  ? (
            <p>Nessun Film trovato</p>
        ):(
        movie?.map((movie) => {
          return (
                <Card movie={movie}/>
          )
        })
      )
      }
            </div>
        </>
    )
}
export default Film