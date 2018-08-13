import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './components/header'
import CartFooter from './components/footer'
import CartItems from './components/cartitems'
import CartItemsComponent from './components/cartitemcomponent'


class App extends Component {
  render() {

    const cartItemsList = [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]

  
    return (
      <div className="App">
        <div>
          <CartHeader />
        </div>
        <div>
          <CartItems cartItemsList={ cartItemsList }/>
        </div>  
        <div>
          <CartFooter copyright="2016"/>
        </div>
      </div>
    );
  }
}

export default App;
