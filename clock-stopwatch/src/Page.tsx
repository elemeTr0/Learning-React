import {  } from 'react'
import Clock from './Clock'

import Stopwatch from './Stopwatch'

interface PageProps{
    tab:number
    time: string
}

export default function Page({tab,time}: PageProps){

    if(tab === 0) return (
    <Clock time={time}/>
)
    if(tab === 1) return <Stopwatch/>
}