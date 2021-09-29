import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { DataContext } from '../context/DataContext'

export const InputData = () => {

    const{setChange}=useContext(DataContext)
    
    const handleChange=(e)=>{
        e.preventDefault();
        setChange((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    return (
        <div>
            Nombre:<input placeholder='Tipe the info...' onChange={handleChange} name='nombre'/>
            Edad:<input placeholder='Tipe the info...' onChange={handleChange} name='edad'/>
        </div>
    )
}
