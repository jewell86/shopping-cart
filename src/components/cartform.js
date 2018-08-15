import React, { Component } from 'react'
import Products from './products'



class CartForm extends Component { 
  constructor(props) {
    super(props)
    this.state = {  
       name: '',
       quantity: '',
    }
}

onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })  
}

onSubmit = (event) => {
    event.preventDefault()
    const prodToAdd = this.props.cartProducts.find(product => product.name === this.state.name)
    this.props.addProducts({ id: 4, product: { ...prodToAdd }, quantity: this.state.quantity })
    this.setState({
      name: '',
      quantity: '',

    })
}



render() {
    // console.log(this.props.cartProducts)
    return (
        <div className="container">
            <form onSubmit={ this.onSubmit }>
                <label htmlFor="quantity">Quantity</label>
                <input 
                onChange={ this.onChange }
                type="number" 
                name="quantity" 
                id="quantity" 
                value={ this.state.quantity }>
                </input>
                <label htmlFor="products">Products</label>
                <select 
                onChange={ this.onChange }
                name="name" 
                value={ this.state.id }>
                    { this.props.cartProducts.map((prop, index) => <Products key={ index } product={prop} />)}
                </select>  
                <button type="submit">Submit</button>         
            </form>
        </div>
    )   
        
      
    
}

} 


export default CartForm