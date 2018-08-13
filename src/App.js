import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './components/header'
import CartFooter from './components/footer'
import CartItems from './components/cartitems'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <CartHeader />
        </div>
        <div>
          <CartItems />
        </div>  
        <div>
          <CartFooter />
        </div>
      </div>
    );
  }
}

export default App;
