import type { Game } from "./App"

interface ListProps {
    list: Game[]
}

export default function List({ list }: ListProps) {

    return (
        <ul>
            {list.map((p) => (
                <li key={p.id}>{p.name}</li>
            ))}
        </ul>
    )
}