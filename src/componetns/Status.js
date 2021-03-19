import React, {useState} from 'react'

export default function Status() {
    const [status, setStatus] = useState("Open");
    const [manager, setManager] = useState("Moncef");
    const [year, setYear] = useState(2020);
    return (
        <div>
            <div>
                <h1>Status: {status}</h1>
                <button onClick={() => setStatus("Open")}>Open</button>
                <button onClick={() => setStatus("Closed")}>Closed</button>
                <button onClick={() => setStatus("Back in 5s")}>Break</button>
            </div>
            <div>
                <h1>The manager is: {manager}</h1>
                <button onClick={() => setManager("Ala Eddine")}>New Manager</button>
            </div>
            <div>
                <h1>{year}</h1>
                <button onClick={() => setYear(year +1)}>Next Year</button>
            </div>
        </div>
    )
}
