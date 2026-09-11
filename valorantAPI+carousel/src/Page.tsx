import type { Agent } from './types'

interface PageProps{
    agent: Agent,
}

export default function Page({agent}: PageProps){

    return(
        <div className='Page'>
        <div>
        <h1 className="animate" >{agent.displayName}</h1>
        <p className="animate">{agent.description}</p>
        </div>
        <img className="animate" src={agent.fullPortrait}></img>
        </div>
    )

}