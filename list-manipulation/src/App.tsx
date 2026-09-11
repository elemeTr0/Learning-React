import { useState } from "react"
import AddGame from "./AddGame"
import List from "./List"
import DeleteGame from "./DeleteGame"

export interface Game {
    id: string
    name: string
}

function App() {

    const [list, setList] = useState<Game[]>([
        {
            id: "1",
            name: "Valorant"
        },
        {
            id: "2",
            name: "League of Legends"
        }
    ])

    const addGame = (name:string) => {
      if (list.some((game) => game.name.toLowerCase() === name.toLowerCase())) {
        return
    }
        setList([...list, {
            id: String(list.length + 1),
            name: name
        }])
    }

    const deleteGame = (name:string)=>{
      if (!list.some((game) => game.name.toLowerCase() === name.toLowerCase())) {
        return
    }
    
    setList(
        list.filter((game) => game.name.toLowerCase() !== name.toLowerCase())
    )

    }

    return (
        <>
            <AddGame addGame={addGame} />
            <DeleteGame deleteGame={deleteGame}/>
            <List list={list} />
        </>
    )
}

export default App