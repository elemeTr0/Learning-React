interface PanelProps{
    title:string;
    temp: number
}

export default function Panel({title, temp}: PanelProps){
    return(
        <div>
            <h1>{title}</h1>
            <span>{temp}</span>
        </div>
    )
}