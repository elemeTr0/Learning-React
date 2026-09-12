import {useState, useEffect} from 'react'

export default function Stopwatch(){
const [elapsed, setElapsed] = useState(0);
const [isRunning, setIsRunning] = useState(false);
const [laps, setLaps] = useState<string[]>([]);


useEffect(() => {
    if(!isRunning) return;

    const interval = setInterval(() => {
      setElapsed(prev => prev + 10);

    }, 10);
    return() => clearInterval(interval)
    }, [isRunning])

  function startSW(){
    setIsRunning(true)
  }

  function stopSW(){
    setIsRunning(false)
  }

  function restartSW(){
    setIsRunning(false)
    setElapsed(0)
    setLaps([])
  }

function formatTime(time: number) {
    const milliseconds = Math.floor(time % 1000);
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 60000) % 60;
    const hours = Math.floor(time / 3600000);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(3, "0")}`;
}

const time = formatTime(elapsed)

  function lapSW(time: string){
    setLaps(prev => [...prev, time]);
  }

  const listItem = (p: string) => <li>{p}</li>;

    return(<>
    <h1>{time}</h1>
    <button onClick={startSW}>START</button>
    <button onClick={stopSW}>PAUSE</button>
    <button onClick={restartSW}>RESTART</button>
    <button onClick={() => lapSW(time)}>LAP</button>
            <h1>Laps</h1>
    <ul>
        {laps.map(listItem)}
    </ul>
    </>)
}