import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

export const Pagina1 = () => {
    const {showUser}=useContext(DataContext)
    return (
        <div>
            <h1>Página 1</h1>
            <p>Nombre: {showUser.nombre}</p>
            <p>Edad: {showUser.edad}</p>
        </div>
    )
}
