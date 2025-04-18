const Review = ({review}) => {
    const {id,name,vote,text} = review
    return (
        <div className="rounded-xl dark:bg-neutral-700  dark:text-neutral-300 " >
            <p className="border-b-2 border-neutral-100  py-3 dark:border-neutral-500">Recensione numero {id}</p>
            <p className="py-2">Nome: {name}</p>
            <p className="py-2">Votazione: {vote}</p>
            <p className="py-5">{text}</p>
        </div>
    )
}
export default Review