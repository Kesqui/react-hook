import React from 'react'
export const ButChangeData = ({setUserFinal,user}) => {
    const handleClick=()=>{
        console.log(user)
        setUserFinal(user)
    }
    return (
        <div>
            <button onClick={handleClick}>Change Data</button>
        </div>
    )
}
