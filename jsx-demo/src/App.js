import React, { Component } from 'react';
import './App.css';

class App extends Component{
  showInfoProduct(product) {
    if(product.status){
      return  <h3>
                id : {product.id}<br/>
                name : {product.name}<br/>
                price : {product.price}<br/>
                status : {(product.status)? 'active' : 'pending'}
              </h3>
            
    }
  }
  render(){
    var a = 5;
    var b =6;
    var name = "hùng";
    var product = {
      id  : 1,
      name : "Gamming",
      price : 1200,
      status : true
    }

    var user = [
      {
        id : 1,
        name : "Nguyen Van A",
        age : 18
      },      
      {
        id : 2,
        name : "Nguyen Van B",
        age : 18
      },      
      {
        id : 3,
        name : "Nguyen Van C",
        age : 18
      }
    ];
    var element =  user.map((value,index) =>{
      return <div key={value.id}> 
        <h2>Ten : {value.name}</h2>
        <p>Tuoi : {value.age}</p>
      </div>
    });
    return (
      <div>
        <nav className="navbar navbar-inverse">
        <a className="navbar-brand" href="#">Title</a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
        </ul>
      </nav>
      <div className="ml-30">
        <h3>
          a: {a}<br/>
          b: {b}<br/>
          a+b : {a+b}
        </h3>
        {this.showInfoProduct(product)}
        <br/>
        <hr/>
        {element}
        <h3>name : {name}</h3>
      </div>
    </div>
    );
  }
}


export default App;
