import React, { useState,useEffect } from 'react'

export default function HookuseEffect() {

    const initialValues={
        email:'',
        password: ''
    }
    const [value,setValue]=useState({initialValues})

    useEffect(()=>{
        console.log('render')
    },[value.password,value.email])

    const onChange=(e)=>{
        setValue((prev)=>({
            ...prev,
            [e.target.name]:e.target.value}))
    }

    return(
        <>
            <div>
               Email: <input name='email' type='email' onChange={onChange} value={value.email}/>
               Password: <input name='password' type='password' onChange={onChange} value={value.password}/>
            </div>
        </>
    )




}  