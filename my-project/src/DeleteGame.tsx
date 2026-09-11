// import type { Game } from "./App"
import { useState } from "react";

interface deleteGameProps{
    deleteGame: (name: string) => void;
}
export default function DeleteGame({deleteGame}: deleteGameProps){

    const [gameName, setGameName] = useState("")

    function checkName() {
        if (gameName === "") {
            return;
        }
        deleteGame(gameName);
    }

    return(
        <>
        <input placeholder="Enter game name"
                value={gameName}
                onChange={(e) => setGameName(e.target.value)}></input>
        <button onClick={() => checkName()}>Delete</button>
        </>
    )
}