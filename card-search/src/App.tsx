import { useState } from 'react'
import Navbar from './Navbar'
import Page from './Page'
import SearchGame from './SearchGame'
import './App.css'

function App() {
  const [status, setStatus] = useState("All Games")
  const [search, searchGame] = useState ("")

  function findGame(m: string){
    searchGame(m)
  }

  function setCat(c: string){
    setStatus(c)
  }

  return (
    <>
    <div>
      <p>Game Library</p>
      <SearchGame findGame={findGame}/>
    </div>
    <div>
      <Navbar setStatus={setCat}/>
      <Page page={status} name={search}/>
      </div>
    </>
  )
}

export default App
