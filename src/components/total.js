import React, { Component } from 'react'

const Total = ({ cartItemsList }) => {
    const total = JSON.stringify(cartItemsList.reduce(function(acc, item) {
        return acc += Number(item.product.priceInCents)
    }, 0))
    const newTotal = `${total.slice(0, total.length-2)}.${total.slice(total.length-2, total.length)}`

    return (
        <div className="container">
        <p>Total Price: ${ newTotal }</p>
        </div>
    )
}

export default Total