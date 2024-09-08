import { useState, useRef, useEffect } from "react";
import * as Mui from "@mui/material";
import Memo from "./Memo";


export default function UseRefHook() {

    const [count, setCount] = useState(0);
    const timerID = useRef(null);

    const handleStart = () => {
        timerID.current = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 100)
    }

    const handleStop = () => {
        clearInterval(timerID.current)
        console.log(timerID.current);
        
    }

    return (
        <>
            <Memo />
            <Mui.InputLabel>Count: {count}</Mui.InputLabel>
            <Mui.ButtonBase onClick={handleStart}>Start</Mui.ButtonBase>
            <Mui.Button onClick={handleStop}>Stop</Mui.Button>
        </>
    )

}
