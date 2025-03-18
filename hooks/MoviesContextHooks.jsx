import { createContext,useContext } from "react";
import { useState } from "react";
const MoviesContext = createContext();
function MoviesProvider ({children}) {
    
    const [movies,setMovies]=useState([])
    
    function MoviesFetch() {
        fetch('http://localhost:3000/movies/')
        .then(response=>(response.json()))
        .then(data=> setMovies(data) )
        .then(data=>console.log(data))
        .catch(error => console.error('Errore:', error));
    }

const value={
movies,
MoviesFetch
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