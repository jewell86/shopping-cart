import React from 'react'

const CartItemsComponent = ({item}) => {


  const total = item.product.priceInCents
  const totalAmount = `${(total/100).toFixed(2)}`
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


