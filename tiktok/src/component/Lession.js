import { useState, useEffect } from "react";


const lessions = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'Javascript'
    },
    {
        id: 3,
        name: 'ReactJS'
    }
]

function Lession() {
    const [lessionID, setLession] = useState(1);
    useEffect(() => {
        const hanndleComment = (e) => {
            console.log('Comment: ', e.detail);
        }
        window.addEventListener(`lesson-${lessionID}`, hanndleComment);

        return () => {
            window.removeEventListener(`lesson-${lessionID}`, hanndleComment);
        }
    }, [lessionID]);
    return (
        <div>
            {lessions.map(lession => (
                <li key={lession.id}
                    style={{
                        cursor: 'pointer',
                        color: lessionID === lession.id ? 'red' : 'black'
                    }}
                    onClick={() => setLession(lession.id)}
                >
                    {lession.name}
                </li>
            ))}
        </div>
    )
}

export default Lession
