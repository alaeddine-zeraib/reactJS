import React from 'react'

export default function LakeObjects({lakes}) {
    return (
        <div>
            <h1>Lakes Objects:</h1>
            {lakes.map(lake => (
                <div key={lake.id}>
                    <h2>{lake.name}</h2>
                    <p>Accessed by: {lake.trailhead}</p>
                </div>
            ))}
        </div>
    )
}
