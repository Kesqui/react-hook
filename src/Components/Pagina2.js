import React,{useState,useContext} from 'react'
import { DataContext } from '../context/DataContext'


export function Pagina2 () {
    const{name}=useContext(DataContext)
    return (
        <div>
            <h1>Página 2</h1>
            <p>{JSON.stringify(name)}</p>
            <hr/>

        </div>
    )
}
