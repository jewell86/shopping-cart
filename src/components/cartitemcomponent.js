import React from 'react'

const CartItemsComponent = (item) => {
    console.log(item)
    return (
<div className="list-group-item">
<div className="row">
  <div className="col-md-8">{ item.item.product.name }</div>
  <div className="col-md-2">{ item.item.quantity}</div>
  <div className="col-md-2">{ item.item.product.priceInCents }</div>
</div>
</div>
)}
export default CartItemsComponent