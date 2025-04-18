import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa6";
const Card = ({ movie }) => {
  console.log(movie)
  const { title, director, genre, release_year, abstract, image } = movie
  return (
    <>
      <div className="flex flex-col  items-center  bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover  rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{abstract}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{director}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{genre}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{release_year}</p>
          <p
            className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed dark:text-white antialiased">
            <FaStar color="gold" />
            5.0
          </p>
        </div>
      </div>
    </>
  )
}
export default Card