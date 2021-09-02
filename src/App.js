import React, {useState} from 'react'


export default function App(){
  const [clicks,setClicks]=useState('')

  const clickState=(state)=>()=>{
    setClicks(state)
  }
  return(
    <>
      <div>
        <button onClick={clickState('post')} > Posts</button>
        <button onClick={clickState('Users')} >Users</button>
        <button onClick={clickState('Comments')}>Comments</button>
      </div>
      <h1>{clicks}</h1>
    </>
  )
}