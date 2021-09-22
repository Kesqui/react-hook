import React, { useState } from 'react'

export const InputData = ({setUser}) => {
    
    const handleChange=(e)=>{
        e.preventDefault();
        setUser((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    return(
        <div>
            <input type='text' onChange={handleChange} name={'nombre'} placeHolder={'Nombre...'}/>
            <input type='text' onChange={handleChange} name={'edad'} placeHolder={'Edad...'}/>
        </div>
    )
}
