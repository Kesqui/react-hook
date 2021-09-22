import React from 'react'

export const Pagina2 = ({userFinal}) => {
    return (
        <div>
            <h1>Página 2</h1>
            <p>Nombre:{userFinal.nombre}</p>
            <p>Edad:{userFinal.edad}</p>
            <hr/>
        </div>
    )
}
