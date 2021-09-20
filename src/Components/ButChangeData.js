import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { DataContext } from '../context/DataContext'


const data={
    nombre:'Carlos',
    edad:28
}

export const ButChangeData = () => {
    const{setName}=useContext(DataContext)
    return (
        <div>
            <button onClick={()=>setName
                (data)}>Change Data</button>
        </div>
    )
}
