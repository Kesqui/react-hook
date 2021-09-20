import React,{ createContext, useState } from "react";

export const DataContext = createContext();

const dataN= {
    nombre: 'Kevin',
    Edad:23
}


export const DataProvider=({children})=>{
    const [name,setName]=useState(dataN)
    return(
        <DataContext.Provider value={{name,setName}}>
            {children}
        </DataContext.Provider>
    )
}