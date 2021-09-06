import { replaceResultTransformer } from 'common-tags';
import react, {useState,useEffect,useRef} from 'react'

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
            quant: 5
        }
    })

    const [add,setAdd] = useState(0)
    const addEvent=(name)=>(e)=>{
        e.preventDefault();
        
            setAdd((prev)=>(
                prev + 1
            ))
         
        setQuanty((prev)=>{
            const {quant,...prevEvent}= prev[name]

                return{
                    ...prev,
                    [name]: {...prevEvent,
                        quant:quant-1}
                }

        })
    }
    const clearAll=()=>(
        setAdd(0)
    )
    const removeEvent=(name)=>()=>{
        
            setAdd((prev)=>prev -1)
        
            if(setQuanty<=quanty){
                setQuanty((prevs)=>{
                    const {quant,...rest}= prevs[name]
                    return{
                        ...prevs,
                        [name]: {...rest, quant:quant+1}
                    }
                })
            } 
        
    }
    const [total,setTotal]=useState(0)

    
    
    const arr = [1, 2, 3, 4];
    const reducer = (a, b) => a + b;
    console.log(arr.reduce(reducer))
    

    return(
        <div>
             <div>
                <h1>FOOD MARKET</h1>
                {Object.keys(quanty).map(i => ({...quanty[i], key:i})).map(j=>(
                    <>
                        <h4>{`${j.name}`}</h4>
                        <p>Price: ${`${j.price}`}</p>
                        <p>Ref: {`${j.ref}`}</p>
                        <p>No:{`${j.quant}`}</p>
                        
                        <button onClick={addEvent(j.key)}>Add</button>
                        <button onClick={removeEvent(j.key)}>Remove</button>
                        <hr/>
                    </>
                ))
            }
                </div>
            <div>
               <h2>Car </h2>
               <hr/>
               <div>
                    In-car:  {add}
                    
                </div>
                <div>
                    
                    Total:  {total}
                </div>
                <hr/>
                <div>
                    <button >Go to pay</button>
                    <button >See</button>
                    <button onClick={clearAll}>Clear all</button>
                </div>
            </div>
        </div>
            
       
    )
}