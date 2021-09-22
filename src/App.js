import React,{useState} from 'react'
import { Pagina1 } from './components/Pagina1'
import { Pagina2 } from './components/Pagina2'
import { ButChangeData } from './components/ButChangeData'
import { InputData } from './components/InputData'


export default function App(){
    const initial={
        nombre:'',
        edad:''
    }
    const [user,setUser]=useState(initial)
    const [userFinal,setUserFinal]=useState([])
    return (
        <div>
            
            <InputData setUser={setUser} />
            <ButChangeData setUserFinal={setUserFinal} user={user}/>
            <Pagina1 userFinal={userFinal}/>
            <Pagina2 userFinal={userFinal}/>
            
        </div>
    )
}
