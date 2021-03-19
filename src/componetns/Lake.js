import React from 'react'

export default function Lake({lakes, items}) {
    return (
        <div>
            <h1>Lakes List:</h1>
            <ul>
                {lakes.map(lake => (
                    items.map((item, i) => (
                        <li key={i}>{item}. {lake}</li>
                    ))
                    
                ))}
            </ul>
        </div>
    );
}
