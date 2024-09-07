import { useState, useRef, useEffect } from "react";


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
            <h1>Count: {count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )

}
