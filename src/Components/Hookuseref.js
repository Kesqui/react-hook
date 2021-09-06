import React,{useState,useRef,useEffect} from 'react'

export default function Hookuseref(){

    const [accountName,setAccountName]=useState(
        'Kesqui07'
    )
    const prevName=useRef('')

    useEffect(()=>{
        prevName.current=accountName
    },[])

    const changeAccount=(event)=>{
        
        setAccountName(event.target.value)
    }
    const onChangee=(e)=>{
        accountName:
        console.log(e.target.value)
    } 
    return(
        <div>
            <input type='text' onChange={changeAccount} />
            <button onClick={onChangee}>Change it</button>
            <p>Current account name: {accountName}</p>
            <p>Previus account name: {prevName.current}</p>
        </div>
    )

}