import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import { MovieList } from './get-request/MovieList';

export default function RenderApp(){
    const [movie,setMovieF]=useState([])
    async function fecthMovieHandler(){
        const response= await fetch('https://swapi.dev/api/films/')
        const data = await response.json();

        const transformData=data.results.map(mData=>{
                return{
                    title:mData.title,
                    id:mData.episode_id,
                    text:mData.opening_crawl
                }
            })
            setMovieF(transformData)
    }

    useEffect(()=>{
        fecthMovieHandler();
    },[])
    const deleteMovie = (id) => {
        const filterData = movie.filter(item => item.id !== id)
        setMovieF(filterData)
    }

    return (
        <React.Fragment>
            <secton>
                <button onClick={fecthMovieHandler}>Fetch Movies</button>
            </secton>
            <section>
                <MovieList movie={movie} fn={deleteMovie}/>
            </section>
        </React.Fragment>
    )
}
