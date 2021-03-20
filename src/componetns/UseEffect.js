/* eslint-disable no-template-curly-in-string */
import React, {useState, useEffect} from 'react'

export default function UseEffect() {
    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");

    useEffect(() => {
        console.log(`field 1: ${val1}`); // template litiral
    }, [val1]);

    useEffect(() => {
        console.log(`field 2: ${val2}`);
    }, [val2]);
    return (
        <div>
            <label>
                Favorite Word: 
                <input
                    value={val1}
                    onChange={e => setVal1(e.target.value)}
                />
            </label>    
            <br />
            <label>
                Favorite Sentence: 
                <input
                    value={val2}
                    onChange={e => setVal2(e.target.value)}
                />
            </label> 

        </div>
    )
}
