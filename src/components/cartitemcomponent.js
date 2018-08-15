import React from 'react'

const CartItemsComponent = ({item}) => {
  const total = JSON.stringify(item.product.priceInCents)
  const totalAmount = ((Number(`${total.slice(0, total.length-2)}.${total.slice(total.length-2, total.length)}`)*(Number(item.quantity))))
  console.log(totalAmount)
    return (
<div className="list-group-item">
<div className="row">
  <div className="col-md-8">{ item.product.name }</div>
  <div className="col-md-2">{ item.quantity}</div>
  <div className="col-md-2">${`${ totalAmount }`}</div>
</div>
</div>
)}
export default CartItemsComponent 


