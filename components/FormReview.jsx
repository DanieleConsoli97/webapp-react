import { useState } from "react";
import { useMoviesContext } from "../hooks/MoviesContextHooks.jsx"
const FormRewiew = ({ movie_id }) => {
    const { MovieSingle } = useMoviesContext()
    const endpoint = `http://localhost:3000/movies/${movie_id}/reviews`;    // localhost:3000/movies/id/reviews

    const initialValues = {
        name: "",
        text: "",
        vote: ""
    }

    const [review, setReview] = useState(initialValues)

    const addDataForm = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        setReview({
            ...review, [name]: value
        })
    }
    
    const HandleSubmit = (e) => {
        e.preventDefault()
        fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(review)
          }).then(MovieSingle(movie_id))
          .then(setReview(initialValues))
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Errore:', error));
    }
    return (
        <form onSubmit={HandleSubmit} className="form flex flex-col gap-2 m-auto items-center mt-3 text-center basis-1/3" >
            <label htmlFor="">Name</label>
            <input name="name" type="text" value={review.name} onChange={addDataForm} />
            <label htmlFor="">Text</label>
            <input name="text" type="text" value={review.text} onChange={addDataForm} />
            <label htmlFor="">Vote</label>
            <input name="vote" type="text" value={review.vote} onChange={addDataForm} />
            <button type="submit">Invia recensione</button>
        </form>
    )
}
export default FormRewiew