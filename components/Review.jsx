const Review = ({review}) => {
    const {id,name,vote,text} = review
    return (
        <div className="rounded-xl dark:bg-neutral-700  dark:text-neutral-300 " >
            <p className="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">Recensione numero {id}</p>
            <p>Nome: {name}</p>
            <p>Votazione: {vote}</p>
            <p>{text}</p>
        </div>
    )
}
export default Review