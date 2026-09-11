import { useEffect, useState } from "react";
import Panel from "./Panel";

const API_KEY = import.meta.env.VITE_API_KEY;

const URL = `https://api.openweathermap.org/data/2.5/weather?q=Kumanovo&appid=${API_KEY}`

export default function App(){
  const [temp, setTemp] = useState(0)
  const [maxTemp, setMaxTemp] = useState(0)
  const [feels_like, setFeelsLike] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL)
        const json = await result.json()

        console.log(json)


        setTemp(json.main.temp)
        setFeelsLike(json.main.feels_like)
        setMaxTemp(json.main.temp_max)
      }

    fetchData()
}, [])


  return(
    <div>
      <Panel title={"At the moment"} temp={temp} />
      <Panel title={"Max today"} temp={maxTemp}/>
      <Panel title={"Feels like"} temp={feels_like}/>
    </div>
  )
}