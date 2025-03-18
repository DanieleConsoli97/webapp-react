import { createContext,useContext } from "react";
import { useState } from "react";
const MoviesContext = createContext();
function MoviesProvider ({children}) {
    
    const [movies,setMovies]=useState([])
    
    const [movie,setMovie] = useState([])
    
    function MoviesFetch() {
        fetch('http://localhost:3000/movies/')
        .then(response=>(response.json()))
        .then(data=> setMovies(data) )
        .catch(error => console.error('Errore:', error))
    }
    function MovieSingle(id) {
      fetch(`http://localhost:3000/movies/${id}`)
      .then(response=>(response.json()))
      .then(data=> setMovie(data) )
      .catch(error => console.error('Errore:', error))
  }
const value={
movies,
MoviesFetch,
MovieSingle,
movie
}
  return (
    <MoviesContext.Provider value={value}>
     {children}
    </MoviesContext.Provider>
  );
}
const useMoviesContext= ()=> useContext (MoviesContext)
// eslint-disable-next-line react-refresh/only-export-components
export {useMoviesContext,MoviesProvider}