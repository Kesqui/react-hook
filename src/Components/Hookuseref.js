import React,{useState,useRef,useEffect} from 'react'

export default function Hookuseref(){

    const [accountName,setAccountName]=useState(
        'Kesqui07'
    )
    const prevName=useRef('')

    useEffect(()=>{
        prevName.current=accountName
    },[accountName])

    const changeAccount=(event)=>(
        
        setAccountName(event.target.value)
    )

    const onChangee=(e)=>(
        setAccountName(e.target.value)
    )
    return(
        <div>
            <input type='text' />
            <button onClick={changeAccount}>Change it</button>
            <p>Current account name: {accountName}</p>
            <p>Previus account name: {prevName.current}</p>
        </div>
    )

}