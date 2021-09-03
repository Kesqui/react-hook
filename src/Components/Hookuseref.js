import React,{useState,useRef,useEffect} from 'react'

export default function Hookuseref(){

    const[name,setName]=useState('')
    const prevName= useRef('')

    useEffect(()=>{
        prevName.current=name
    },[name])
    const handleChange=(e)=>{
        e.preventDefault();
        setName(e.target.value
        )

    }

    return(
        <>
            <input type='text' onChange={handleChange} name='this'/>
            <h2>My name is {name} and my previus name is {prevName.current}</h2>
        </>
    )
}