import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

export const CleanAll = () => {
    const {setShowUser,initial}=useContext(DataContext)
    const handleClean=()=>{
        setShowUser('')
    }
    return (
        <div>
            <button onClick={handleClean}>Clean All</button>
        </div>
    )
}