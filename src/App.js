import React from 'react'
import { Pagina1 } from './components/Pagina1'
import {Pagina2} from './components/Pagina2'
import { ButChangeData } from './components/ButChangeData'
import { DataProvider } from './context/DataContext'


export default function App (){

    
    return (
        <DataProvider>
            <div>
                <Pagina1 />
                <Pagina2 />
                <ButChangeData/>
            </div>
        </DataProvider>
    )
}
