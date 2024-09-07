import { useEffect, useState } from "react";



export default function ContentEffectTimeout() {
    const [countDown, setCountDown] = useState(180);
    useEffect(() => {
        setInterval(() => {
            setCountDown(prevState => prevState - 1);
        }, 1000);

        return () => {
            clearInterval()
        }
    }, [])
    return (
        <h1>{countDown}</h1>
    )
}