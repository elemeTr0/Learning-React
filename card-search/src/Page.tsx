import {games} from'./data'
interface PageProps{
    page: string
    name: string
}



export default function Page( {page, name}:PageProps){

    const filteredGames = page === "All Games" ? games : games.filter((p) => p.status === page)

    const showGames = name === "" ? filteredGames : filteredGames.filter((m)=> m.name.toLowerCase().includes(name.toLowerCase()))


        return(
            <ul>
               {showGames.map((p) => (
                <GameCard name={p.name} rating={p.rating} status={p.status} />
               ))}
            </ul>
        )
}
    
interface GameCardProps{
    name: string,
    rating: number,
    status: string,
}
function GameCard({name, rating, status}:GameCardProps){
    return(
        <div className='Card'>
        <h1>{name}</h1>
        <h2>{rating}/10 ⭐</h2>
        <p>{status}</p>
        </div>
    )
}