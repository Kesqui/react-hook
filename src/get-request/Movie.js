import React from 'react'

export const Movie = (props) => {
    return (
        <li>
            <h1>{props.title}</h1>
            <h4>{props.id}</h4>
            <p>{props.text}</p>
            <button onClick={props.fn}>Borrar</button>
        </li>
    )
}
