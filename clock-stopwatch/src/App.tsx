import { useState, useEffect } from "react";

import Page from "./Page";

import Navbar from "./Navbar";

import "./App.css";

function App() {
  const [tab, setTab] = useState(-1);
  const [time, setTime] = useState(new Date());

  function setActive(index: number) {
    setTab(index);
  }
  function filterTime(time:Date):string{
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    return `${hours}:${minutes}:${seconds}`
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      filterTime(time)
    }, 1000);

    return () => clearInterval(interval);
  });

  const timeString:string = filterTime(time)


  return (
    <>
      <Navbar setActive={setActive} />
      <Page tab={tab} time={timeString}/>
    </>
  );
}

export default App;
