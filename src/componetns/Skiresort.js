import React from 'react'

export default function Skiresort({season}) {
    return (
        <div>
            {season === "summer"? (
            <Summer name="Jijel" />
            ) : season === "winter"? (
                <Winter name="Biskra" />
                ) : (
                    <h1>Come back in winter or summer.</h1>
                )
            }
        </div>
    );


    function Summer ({name}){
        return(
            <div>
                <h1>Visite {name}.</h1>
            </div>
        );
    }

    function Winter ({name}){
        return(
            <div>
                <h1>Visite {name}.</h1>
            </div>
        );
    }
}

