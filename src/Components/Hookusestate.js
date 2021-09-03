import React, { useState } from 'react'

export default function Hookusestate() {

    const initialState = {
        fName: '',
        lName: '',
        age: ''
    }

    const [fill, setFill] = useState({ initialState })

    const List = ({ block }) => (
        block.map((item) => (
            <li>{`${item.fName} ${item.lName} ${item.age}`}</li>
        ))
    )

    const functClick = (event) => {
        setFill((prev) => ({
            ...prev,
            [event.target.name]: event.target.value

        }))

    }

    const [hist, setHist] = useState([])

    const fillhistory = (e) => {
        e.preventDefault()
        setHist((prev) => ([
            ...prev,
            fill]))
        cleanall()
    }
    const cleanall = () => {
        setFill({ ...initialState })
    }



    return (
        <>
            <div>
                <form onSubmit={fillhistory}>
                    <div> First Name: <input type='text' onChange={functClick} value={fill.fName} name='fName' /></div>
                    <div> Last Name: <input type='text' onChange={functClick} value={fill.lName} name='lName' /></div>
                    <div> Age: <input type='number' onChange={functClick} value={fill.age} name='age' /></div>
                    <button type='submit' onClick={fillhistory }>Submit</button>
                </form>

            </div>
            <div>
                <List block={hist} />

            </div>
        </>
    )
}