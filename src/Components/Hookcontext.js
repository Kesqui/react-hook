import React from 'react'

export default function Hookcontext(){

const a =(e)=>{
    console.log(e.target.value)

}

    return(
        <div>
            Name: <input type='text' />
            <button onClick={a}>Change it</button>
        </div>
    )

}