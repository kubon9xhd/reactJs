import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Product from './component/product';

class App extends Component{
  render(){
    return (
      <div>
        <Header></Header>        
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product></Product>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
