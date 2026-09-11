import type { Agent } from './types'


interface NavbarProps{
    agents: Agent[]
    activeAgent: (c: number) => void
    active: number
}
interface BtnProps {
    showAgent: (c:number) => void
    active: number
}
interface IconProps{
    agents: Agent[]
    active: number
    direction?: string
}

export default function Navbar( {agents, activeAgent, active}: NavbarProps) {


    if (agents.length === 0) {
        return null
    }
    


    return(
        <div className="carousel">

    <div className="prevnext">
        {active !== 0 && (
            <>
                <PrevBtn showAgent={activeAgent} active={active} />
                <Icon agents={agents} active={active - 1} />
            </>
        )}
    </div>

    <ul>
        <Icon agents={agents} active={active} />
    </ul>

    <div className="prevnext">
        {active !== agents.length - 1 && (
            <>
                <Icon agents={agents} active={active + 1} />
                <NextBtn showAgent={activeAgent} active={active} />
            </>
        )}
    </div>

</div>
    )

}

function NextBtn ({showAgent, active}: BtnProps){
    return(
        <button onClick={() => {showAgent(active+1)}}>next</button>
    )
}

function PrevBtn ({showAgent, active}: BtnProps){
    return(
        <button onClick={() => showAgent(active-1)}>prev</button>
    )
}

function Icon({agents, active, direction}: IconProps) {
    return (
        <li>
            <img key={active} className={direction} src={agents[active].displayIconSmall} />
        </li>
    )
}