import { useState } from "react";

interface AddGameProps {
    addGame: (name: string) => void;
}

export default function AddGame({ addGame }: AddGameProps) {
    const [gameName, setGameName] = useState("");

    function checkName() {
        if (gameName === "") {
            return;
        }
        addGame(gameName);
    }

    return (
        <>
            <input
                placeholder="Enter game name"
                value={gameName}
                onChange={(e) => setGameName(e.target.value)}
            />
            <button onClick={() => checkName()}>Add</button>
        </>
    );
}
