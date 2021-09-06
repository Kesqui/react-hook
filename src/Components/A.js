import React from "react";
import { useState,useRef } from "react/cjs/react.development";

export default function A (){
    const setAddref=useRef('')
    const [add,setAdd]=useState('')
    const handleChange=(e)=>(
        setAdd(e.target.value)
    )
    const clickB=(e)=>{
        e.preventDefault();
        const add=setAddref.current.value+'hola';
        console.log(add);
        setAdd(' ')
    }
    return(
        <div>
            <form onSubmit={clickB}>
                <input type='text' onChange={handleChange} value={add} ref={setAddref}/>
                <button>Add</button>
            </form>

        </div>
    )
}