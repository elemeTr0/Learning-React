interface SearchGameProps{
    findGame: (m:string) => void,
}

export default function SearchGame({findGame}: SearchGameProps){
    
    return(
        <input onChange={(e) => findGame(e.target.value)} ></input>
    )
}