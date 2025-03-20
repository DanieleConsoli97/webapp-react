import { useMoviesContext } from "../hooks/MoviesContextHooks"
import { useEffect } from "react"
import Card from './Card'
const Main = () => {
    const { movies, MoviesFetch } = useMoviesContext()
    useEffect(MoviesFetch,[])
    return (
        <>
        <div className="container m-auto">
            <div className="flex flex-row flex-wrap m-auto gap-3 mt-3">
            {
        !movies  ? (
            <p>Nessun Film trovato</p>
        ):(
        movies?.map((movie) => {
          return (
                <Card key={movie.id} movie={movie}/>
          )
        })
      )
      }
      </div>
            </div>
        </>
    )
}
export default Main