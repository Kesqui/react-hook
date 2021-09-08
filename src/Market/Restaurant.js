import React, { useState } from 'react'
import Cart from './Cart'
import "./style.css"
import Cartpage from './Cartpage'



const OrderList = ({ foodList }) => (
    <>
        {console.log(foodList)}
        {foodList?.map((item) => (
            <>
            <li>{`${item.key}  ${item.quantity}`}</li>
            </>
        ))}
    </>
)

export default function Restaurant() {

    const [order, setOrder] = useState([])
    const [quanty, setQuanty] = useState({})
    const [foods] = useState({
        burguer: {
            name: 'Hamburguer',
            price: 17,
            id: 'b1'
        },
        pizaa: {
            name: 'Pizza',
            price: 9,
            id: 'p1'
        },
        hotDog: {
            name: 'Hot Dog',
            price: 11,
            id: 'h1'
        },
        tacos: {
            name: 'Mexican Tacos',
            price: 5,
            id: 't1'
        }
    })

    const handleChange = (event) => {
        event.preventDefault();
        console.log(event.target.name, event.target.value)
        setQuanty((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }


    const handleOrder = (e) => {
        e.preventDefault();
        const newAray =Object.keys(quanty).map(key => ({key, quantity: quanty[key]}))
        setOrder(Object.values(newAray))
    }



    return (
        <div>
            <form onSubmit={handleOrder} style={{ position: 'relative', height: '100vh' }}>
                <div className='title'>
                    <h1>FAST FOOD RESTAURANT</h1>
                </div>
                <div >
                    <button className='cart'>Cart:</button>
                </div>
                <div className='food-box'>
                    {Object.keys(foods).map(i => ({ ...foods[i], key: i })).map(j => (
                        <div className='minibox'>
                            <h3 className='meal-box'>{`${j.name}`}</h3>
                            <h4 className='meal-box'> Price: ${`${j.price}`}</h4>
                            <div className='input-buy'>
                                Quantity: <input type='number' onChange={handleChange} value={quanty[j.key]} name={j.key} />
                            </div>

                            <Cart onClick={handleOrder} />
                        </div>
                    ))}
                </div>
                <Cartpage />
            </form>
            <OrderList foodList={order} />
        </div>
    )
}