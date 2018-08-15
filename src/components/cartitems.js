import React from 'react'
import CartItemsComponent from './cartitemcomponent'

const CartItems = ({ cartItemsList }) => {
    return (
    <div className="container">
    <h1>Cart Items</h1>
    <div className="list-group">
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-8">Product</div>
          <div className="col-md-2">Quantity</div>
          <div className="col-md-2">Price</div>
        </div>
      </div>
        { cartItemsList.map((item, index) => <CartItemsComponent key={ index } item={item} />)}
    </div>
  </div>
)}

export default CartItems