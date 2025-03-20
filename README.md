# Progetto di Gestione Film

## Descrizione del Progetto

Questo progetto è un'applicazione web sviluppata con React e React Router per la gestione e visualizzazione di una collezione di film. L'applicazione permette agli utenti di visualizzare una lista di film, vedere i dettagli di ciascun film e navigare tra le diverse sezioni del sito.

## Struttura del Progetto

Il progetto è organizzato in diverse cartelle e file principali:

- **components/**: Contiene i componenti riutilizzabili come `Card`, `Header`, e `Footer`.
- **hooks/**: Contiene i custom hook per la gestione dello stato dei film.
- **Layouts/**: Contiene i layout principali dell'applicazione, come `MainLayout`.
- **node_modules/**: Contiene le dipendenze del progetto.
- **Pages/**: Contiene le pagine principali dell'applicazione, come `Home` e `Film`.
- **public/**: Contiene i file statici come `index.html`.
- **src/**: Contiene il codice sorgente principale dell'applicazione.

## Componenti Principali

### `App.jsx`

Il componente `App` è il punto di ingresso dell'applicazione. Utilizza `BrowserRouter` per gestire il routing e `MoviesProvider` per fornire lo stato dei film a tutti i componenti figli.

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout.jsx";
import Home from '../Pages/Home.jsx';
import { MoviesProvider } from '../hooks/MoviesContextHooks.jsx';
import Film from "../Pages/Film.jsx";

function App() {
  return (
    <MoviesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/film/:id" element={<Film />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MoviesProvider>
  );
}

export default App;
```
Card.jsx
Il componente Card visualizza le informazioni di un singolo film e include un link per vedere i dettagli del film.

```jsx
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const { id, title, director, genre, release_year, abstract } = movie;

  return (
    <div className="block rounded-xl bg-white shadow-xl dark:bg-neutral-700 text-center basis-126">
      <Link to={`/film/${id}`}>
        <img className="rounded-t-xl" src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg" alt="" />
      </Link>
      <div className="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
        <h5 className="flex items-center justify-center text-neutral-500 dark:text-neutral-300">
          <span className="mr-2">Novità</span>
          <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-blue-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-blue-700">New</span>
        </h5>
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">{title}</h5>
        <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">{abstract}</p>
        <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">{director}</p>
        <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">{genre}</p>
        <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">{release_year}</p>
        <Link to={`/film/${id}`}>
          <button className="mt-3 inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Click Me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
```

MoviesContextHooks.jsx

Questo file contiene il context e il provider per la gestione dello stato dei film.

```jsx

import { createContext, useContext, useState } from "react";

const MoviesContext = createContext();

function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);

  function MoviesFetch() {
    fetch('http://localhost:3000/movies/')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Errore:', error));
  }

  function MovieSingle(id) {
    fetch(`http://localhost:3000/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Errore:', error));
  }

  const value = {
    movies,
    MoviesFetch,
    MovieSingle,
    movie
  };

  return (
    <MoviesContext.Provider value={value}>
      {children}
    </MoviesContext.Provider>
  );
}

const useMoviesContext = () => useContext(MoviesContext);

export { useMoviesContext, MoviesProvider };
```

# Dipendenze
React: Libreria per la costruzione di interfacce utente.

React Router: Libreria per la gestione del routing.

Vite: Strumento di build e sviluppo veloce.

