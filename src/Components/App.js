import React, {useState} from 'react'


export default function App(){

  const[click,setClick]=useState('')

  const doIt=(event)=>()=>{
    setClick((event))
  }

  return(
    <>
      <div>
        <button onClick={doIt('Post')}>Post</button>
        <button onClick={doIt('Users')}>Users</button>
        <button onClick={doIt('Comments')}>Comments</button>
      </div>
      <div>
        <h1>{click}</h1>
      </div>
    </>
  )
}