import { useMoviesContext } from "../hooks/MoviesContextHooks"
import { useEffect } from "react"
import Card from './Card'
const Main = () => {
    const { movies, MoviesFetch } = useMoviesContext()
    useEffect(MoviesFetch, [])
    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 w-full my-5 ">
                <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {
                        !movies ? (
                            <p>Nessun Film trovato</p>
                        ) : (
                            movies?.map((movie) => {
                                return (
                                    <Card key={movie.id} movie={movie} />
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