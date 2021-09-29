import React,{useState} from 'react'
import { createContext } from 'react'

export const DataContext=createContext();

export const DataProvider = ({children}) => {
    const initial={
        nombre:'Camilo',
        edad:28
    }
    const [change,setChange]=useState(initial)
    const [showUser,setShowUser]=useState(initial)
    return (
        <DataContext.Provider value={{change,setChange,showUser,setShowUser}}>
            {children}
        </DataContext.Provider>
    )
}
