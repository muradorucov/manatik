import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const cartList = useSelector(state => state)
    console.log(cartList);
    return (
        <div>Cart</div>
    )
}

export default Cart