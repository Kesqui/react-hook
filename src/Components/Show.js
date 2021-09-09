import { replaceResultTransformer } from 'common-tags';
import react, {useState,useEffect,useRef} from 'react'

export default function Show() {
    

    const [quanty] = useState({
        apple: {
            name: 'Apple',
            price: 5,
            ref: '123e1',
            quant: 22
        },
        banana: {
            name: 'Banana',
            price: 2,
            ref: '123e2',
            quant: 18
        },
        pineapple: {
            name: 'Pineapple',
            price: 8,
            ref: '123e3',
            quant: 5
        }
    })
    const [someThing,setSomeThing] = useState([])
    const showFruit=(index)=>(e)=>{
        e.preventDefault();
        const newArray=Object.keys(quanty).map(j=>({...quanty[j],key:j}))
        setSomeThing(
            
            `Price: ${newArray[index].price} 
            \n Fruta: ${newArray[index].name}`)
    }

    return(
        <div>
            <button onClick={showFruit(0)} >apple</button>
            <button onClick={showFruit(1)}>banana</button>
            <button onClick={showFruit(2)}>pineapple</button>
            <div><p>{someThing}</p></div>
            
        </div>
    )
}