import React,{useContext} from 'react'
import { DataContext } from '../context/DataContext'

export const Pagina1 = () => {

    const {name} = useContext(DataContext)

    return (
        <div>
            <h1>Página 1</h1>
            <p>{JSON.stringify(name,null,2)}</p>
        </div>
    )
}
