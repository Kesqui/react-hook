import React from 'react'
import { Movie } from './Movie'

export const MovieList = (props) => {
    return (
        <ul>
            {props.movie.map(moviemap=>(
                <Movie
                    title={moviemap.title}
                    id={moviemap.id}
                    text={moviemap.text}
                    fn={()=>props.fn(moviemap.id)}
                />
            ))}
        </ul> 
    )
}
