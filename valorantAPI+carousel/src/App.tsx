import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Page from './Page'
import type { Agent } from './types'
import './App.css'

const URL = "https://valorant-api.com/v1/agents/";


export default function App(){
  const [array, setArray] = useState <Agent[]>([])
  const [active, setActive] = useState (0)


  // function activeAgent(c:number){
  //   setActive(c)
  // }

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL)
        const json = await result.json()

        setArray(json.data)
      }

    fetchData()
}, [])


  return(
    <div className='full'>
      <div className='Navbar'>
      <Navbar agents={array} active={active} activeAgent={setActive}/>
      </div>
      <div>
      {array.length > 0 && (
    <Page agent={array[active]} />
)}</div>
    </div>
  )
}