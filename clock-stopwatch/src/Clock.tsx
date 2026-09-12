
interface ClockProps{
    time: string
}
export default function Clock({time}:ClockProps){
    
    return(<>
    <h1>{time.toString()}</h1>
    </>)
}