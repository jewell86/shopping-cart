import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/header'
import CartFooter from './components/footer'
import CartItems from './components/cartitems'
import CartForm from './components/cartform'
import Total from './components/total'


class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
      cartItemsList: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ]
      
    }
  }
  
  addProducts = ( product ) => {
    const newItem = { ...product }
    this.setState({ cartItemsList: [ ...this.state.cartItemsList, newItem ]})
  }

  render() {

    
    return (
      <div className="App">
        <div>
          <CartHeader />
        </div>
        <div>
          <CartItems cartItemsList={ this.state.cartItemsList } />
        </div>  
        <div>
          <Total cartItemsList={ this.state.cartItemsList }/>
        </div>
        <div>
          <CartForm addProducts={ this.addProducts } cartProducts={ this.state.products } />
        </div>
        <div>
          <CartFooter copyright="2016"/>
        </div>
      </div>
    );
  }
}

export default App;
