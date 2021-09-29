import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

export const ButChangeData = () => {
    const {change,setShowUser,setChange,initial}=useContext(DataContext)
    const handleSubmit=(e)=>{
        setShowUser(change)

    }
    return (
        <div>
            <button onClick={handleSubmit}>Change it</button>
        </div>
    )
}
