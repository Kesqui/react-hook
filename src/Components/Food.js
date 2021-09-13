import { replaceResultTransformer } from 'common-tags';
import react, {useState,useEffect,useRef} from 'react'

const List=({fillItem})=>(
    fillItem.map(item=>(
        <li>{`${item.key} ${item.No} ${item.ref}` }</li>
    ))
)

export default function Food() {
    const [quanty, setQuanty] = useState({
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
            quanty: 5
        }
    })

    const [quant,setQuant]=useState([])
    const [cartItem,setCartItem]=useState([])

    const handleChange=(e)=>{
        setQuant((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    const handleCar=(e)=>{
        e.preventDefault();
        const cartArray= Object.keys(quant).map(key => ({key,No:quant[key], ref: quanty[key].ref}))
        setCartItem(Object.values(cartArray))
    }



    return(
        <div>
            <form onSubmit={handleCar}>
                <div>
                    <h1>FOOD MARKET</h1>
                    {Object.keys(quanty).map(i => ({...quanty[i], key:i})).map(j=>(
                        <>
                            <h4>{`${j.name}`}</h4>
                            <p>Price: ${`${j.price}`}</p>
                            <p>Ref: {`${j.ref}`}</p>
                            <p>No:{`${j.quant}`}</p>
                            <input type='number' onChange = {handleChange} value={quant[j.key]} name={j.key}/>
                            <button >Add</button>
                            <button >Remove</button>
                            <hr/>
                        </>
                    ))
                }
                    </div>
                <div>
                <h2>Car </h2>
                <hr/>
                <div>
                        In-car:  {<List fillItem={cartItem}/>}
                        
                    </div>
                    <div>
                        
                        Total:  {}
                    </div>
                    <hr/>
                    <div>
                        <button >Go to pay</button>
                        <button >See</button>
                        <button >Clear all</button>
                    </div>
                </div>
            </form>
        </div>
            
       
    )
}