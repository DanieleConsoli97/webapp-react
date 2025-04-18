import { Link } from "react-router-dom"
import { FaHeart,FaStar } from "react-icons/fa6";
const Card = ({ movie }) => {
  console.log(movie)
  const { id, title, director, genre, release_year, abstract, image } = movie
  return (
    <>



      
        <div  className="max-w mx-auto">
          
          <div
            className="relative flex w-full  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div
              className="relative  text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img  src={image}
                alt="ui/ux review check" />
              <div
                className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
              </div>
              <button
                className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  
                  <FaHeart size={"1.5em"} />
                </span>
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h5
                  className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                  {title}
                </h5>
                <p
                  className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                  <FaStar color="gold" />
                  5.0
                </p>
              </div>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                {director}
              </p>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                {genre}
              </p>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                {release_year}
              </p>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                {abstract}
              </p>
            </div>
            <div className="p-6 pt-3">
              <Link to={`/film/${id}`}>
                <button
                  className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button">
                  ClickMe
                </button>
              </Link>
            </div>
          </div>
        </div>
     

    </>
  )
}
export default Card