import React, { Component } from 'react'

const Total = ({ cartItemsList }) => {

    const total = cartItemsList.reduce(function(acc, item) {
        acc += (item.product.priceInCents)*item.quantity
        return acc
    }, 0)
    
    const newTotal = `${(total/100).toFixed(2)}`

    return (
        <div className="container">
        <p>Total Price: ${ newTotal }</p>
        </div>
    )
}

export default Total