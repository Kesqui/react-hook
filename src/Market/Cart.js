import react, {useState} from 'react'
import "./style.css"

export default function Cart({onClick}){

    return(
        <form>
            <button className='button-origin' type='submit' onClick={onClick}>Buy</button>
        </form>
    )
}