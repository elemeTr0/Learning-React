interface NavbarProps{
    setActive: (c:number) => void
}

export default function Navbar({setActive}: NavbarProps){
    return(
        <>
        <h3 onClick={() => setActive(1)}>Stopwatch</h3>
        <h3 onClick={() => setActive(0)}>Clock</h3>
        </>
    )
}