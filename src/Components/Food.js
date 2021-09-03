import React, { useState } from 'react'

export default function Food() {
    const [quanty, setQuanty] = useState({
        apple: {
            name: 'Apple',
            price: '5',
            ref: '123e1',
            quant: 22
        },
        banana: {
            name: 'Banana',
            price: '2',
            ref: '123e2',
            quant: 18
        },
        pineapple: {
            name: 'Pineapple',
            price: '4',
            ref: '123e3',
            quant: 5
        }
    })
    const { apple, banana, pineapple } = quanty;
    const [add, setAdd] = useState(0)
    const addEvent = (name) => (e) => {
        e.preventDefault();
        setAdd((prev) => prev + 1)
        setQuanty((prev) => {
            const { quant, ...prevItemSelect } = prev[name]
            return { ...prev, [name]: { ...prevItemSelect, quant: quant - 1 } }
        })
    }
    const removeFunction = () => {
        setAdd((remove) => remove - 1)
    }
    const clearAll = (e) => {
        setAdd(0)
    }


    return (
        <div>
            <div>
                <h1>FOOD MARKET</h1>

                {/* <p>{`${apple.name}`}</p>
                <p>Price: ${`${apple.price}`}</p>
                <p>Ref: {`${apple.ref}`}</p>
                <p>No: {`${apple.quant}`}</p>
                <button onClick={addEvent}>Add</button>
                <button onClick={removeFunction}>Remove</button>
                <hr />
                <p>{`${banana.name}`}</p>
                <p>Price: ${`${banana.price}`}</p>
                <p>Ref: {`${banana.ref}`}</p>
                <p>No: {`${banana.quant}`}</p>
                <button onClick={addEvent}>Add</button>
                <button onClick={removeFunction}>Remove</button>

                <hr />
                <p>{`${pineapple.name}`}</p>
                <p>Price: ${`${pineapple.price}`}</p>
                <p>Ref: {`${pineapple.ref}`}</p>
                <p>No: {`${pineapple.quant}`}</p>
                <button onClick={addEvent}>Add</button>
                <button onClick={removeFunction}>Remove</button>
                <hr /> */}
                {
                    Object.keys(quanty).map(i => ({ ...quanty[i], key: i })).map(j => (
                        <>
                        {
                            console.log(j)
                        }
                            <p>{`${j.name}`}</p>
                            <p>Price: ${`${j.price}`}</p>
                            <p>Ref: {`${j.ref}`}</p>
                            <p>No: {`${j.quant}`}</p>
                            <button onClick={addEvent(j.key)}>Add</button>
                            <button onClick={removeFunction}>Remove</button>
                            <hr />
                        </>
                    ))
                }

            </div>
            <div>
                <h2>Car</h2>
                items: {add}
                <button onClick={clearAll}>Clear all</button>
            </div>
        </div>
    )
}