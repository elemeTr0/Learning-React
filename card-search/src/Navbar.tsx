interface NavbarProps{
    setStatus: (c:string) => void
}

export default function Navbar({ setStatus }:NavbarProps){
    return (
        <ul>
            <li onClick={() => setStatus("All Games")}>All Games</li>
            <li onClick={() => setStatus("Playing")}>Playing</li>
            <li onClick={() => setStatus("Completed")}>Completed</li>
            <li onClick={() => setStatus("Wishlist")}>Wishist</li>
        </ul>
    )
}