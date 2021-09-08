import React, {useState,useRef} from 'react'

const List=({guestList,onDelete})=>(
    guestList.map((item,index)=>(
        <>
            <li>{item}</li>
            <button onClick={onDelete(index)}>Remove guest</button>
        </>
    ))
)


export default function Todolist(){
    const inputRef = useRef();
    const [name,setName]=useState(' ') 
    const [guest,setGuest]=useState([])
    
    const handleChange=(e)=>{
        setName(e.target.value)
    }
    const handleClick=(e)=>{
        e.preventDefault();
        setGuest((prev)=>([
            ...prev,
            name]
        ));
        //const name=inputRef.current.value;
        //console.log(name)
        setName('')

    }

    const deleteGuest=(index)=>()=>{
        const newGuestArray=guest.filter((_item,i)=> i !== index)

        setGuest(newGuestArray)
    }

    
    
    return(
        <>
            <form onSubmit={handleClick}>
                <h1>Guest List</h1>
               Name: <input ref={inputRef} type='text' onChange={handleChange} value={name} />
               <button>Submit</button>
               <button>Clean all</button>
               
            </form>

            <h2>Guests</h2>
            <div>
                <List guestList={guest} onDelete={deleteGuest}/>
                
            </div>

        </>
    )
}