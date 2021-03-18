import React from 'react'

export default function Welcome(props) {
    console.log(props);
    console.log(Object.keys(props));
    let {library, message, number} = props;
    return (
        <div>
            <h1>Welcome to React!</h1>
            <p>Let's build somthing cool.</p>
            <p>{message} with {library}</p>
            <p>{number} Props total.</p>
            <p>{Object.keys(props).length} Props total.</p>
            

        </div>
    )
}
