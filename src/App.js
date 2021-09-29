import React from 'react'
import { ButChangeData } from './components/ButChangeData'
import { CleanAll } from './components/CleanAll'
import { InputData } from './components/InputData'
import { Pagina1 } from './components/Pagina1'
import { Pagina2 } from './components/Pagina2'
import { DataProvider } from './context/DataContext'
 
const App = () => {
    return (
        <DataProvider>
            <InputData/>
            <hr/>
            <ButChangeData/>
            <hr/>
            <Pagina1/>
            <hr/>
            <Pagina2/>
            <hr/>
            <CleanAll/>
        </DataProvider>
    )
}
export default App