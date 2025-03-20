import { Link } from "react-router-dom"
const Card = ({ movie }) => {

  const { id,title,director, genre, release_year, abstract } = movie
  return (
    <>
      {
        <div key={id} className="block rounded-xl bg-white shadow-xl dark:bg-neutral-700 text-center basis-126 ">
          <Link>
            <img className="rounded-t-xl" src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg" alt="" />
          </Link>
          <div className="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
            <h5 className="flex items-center justify-center text-neutral-500 dark:text-neutral-300">
              <span className="mr-2">
                Novità
              </span>
              <span
                className="inline-block whitespace-nowrap rounded-[0.27rem] bg-blue-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-blue-700">
                New
              </span>
            </h5>
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
              {title}
            </h5>
            <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">
              {abstract}
            </p>
            <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">
              {director}
            </p>
            <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">
              {genre}
            </p>
            <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">
              {release_year}
            </p>
            <Link to={`/film/${id}`}>
              <button href="#"
                className="mt-3 inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                Click Me
              </button>
            </Link>
          </div>
        </div>
      }
    </>
  )
}
export default Card