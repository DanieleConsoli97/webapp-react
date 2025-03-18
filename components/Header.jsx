import { Link } from "react-router-dom"
const Header = ()=>{
    return(
        <>
        <div className="flex-no-wrap relative flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
         <nav>
          <Link className="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0" to={'http://localhost:5173/'} >Home</Link>
         </nav> 
        </div>
        </>
        
    )
}
export default Header