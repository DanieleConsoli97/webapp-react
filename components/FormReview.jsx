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
            body: JSON.stringify(review)
        }).then(MovieSingle(movie_id))
            .then(setReview(initialValues))
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Errore:', error));
    }
    return (
        <>
            <div className="w-full max-w-sm">
                <div className="relative rounded-2xl bg-white p-6 shadow">
                    <div className="mb-4 flex items-center justify-between">
                        <form onSubmit={HandleSubmit} className="form flex flex-col gap-2 m-auto items-center mt-3 text-center basis-1/3" >
                            <label className="text-xl font-semibold text-gray-900" htmlFor="">Name</label>
                            <input className="mb-3 w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" name="name" type="text" value={review.name} onChange={addDataForm} />
                            <label className="text-xl font-semibold text-gray-900" htmlFor="">Text</label>
                            <input className="mb-3 w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" name="text" type="text" value={review.text} onChange={addDataForm} />
                            <label className="text-xl font-semibold text-gray-900" htmlFor="">Vote</label>
                            <input className="mb-3 w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" name="vote" type="text" value={review.vote} onChange={addDataForm} />
                            <button className="w-full rounded-lg bg-gray-900 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-gray-800">Invia recensione</button>
                        </form>
                    </div>
                </div>
            </div>
        </>


    )
}
export default FormRewiew