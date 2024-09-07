import { useState, useLayoutEffect, useEffect } from "react";


export default function LayOutEffect() {
    const [count, setCount] = useState(0);


    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0);
        }
    }, [count]);
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }
    return (
        <>
            <h1> {count}</h1>
            <button onClick={handleIncrement} >Incresement</button>
        </>
    )
}