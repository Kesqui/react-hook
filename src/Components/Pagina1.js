import React,{useContext} from 'react'


export const Pagina1 = ({userFinal}) => {
    return (
        <div>
            <h1>Página 1</h1>
            <p>Nombre:{userFinal.nombre}</p>
            <p>Edad:{userFinal.edad}</p>
            <hr/>
        </div>
    )
}
