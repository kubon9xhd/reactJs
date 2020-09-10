import React, {Component} from 'react';
import './App.css';
import Product from './component/product';
class App extends Component{
  onClick(){
    console.log("Day la App Component");
  }
  addProduct = () =>{
    console.log(this.refs.name.value);
  }
  render(){
    var product = [
      {
        id : 1,
        name : "Apple IPHONE 12",
        price : 150000000,
        img : "https://cdn.dnd.com.pk/wp-content/uploads/2020/08/iPhone-12.jpg",
        status : true
      },
      {
        id : 2,
        name : "Apple IPHONE 11",
        price : 15000000,
        img : "https://cdn.mos.cms.futurecdn.net/AMy8yKfkz6jcitetyzPLXi-1200-80.jpg",
        status : true
      },
      {
        id : 3,
        name : "Apple IPHONE 10",
        price : 1500000,
        img : "https://i.ebayimg.com/images/i/382394089410-0-1/s-l1000.jpg",
        status : true
      }
    ];
    let element = product.map((value,index)=>{
      if(value.status){
        return  <Product
                      key = {value.id}
                      price = {value.price}
                      img = {value.img}
                >{value.name}</Product>
      }
      return '';
    });
    return(
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="#">Props</a>
        </nav>
        <div className="container">
          <div className="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
              <div class="panel panel-success">
                  <div class="panel-heading">
                    <h3 class="panel-title">Thêm sản phẩm</h3>
                  </div>
                  <div class="panel-body">                   
                     <div class="form-group">
                       <label for="">label</label>
                       <input type="text" class="form-control" onChange = {this.addProduct} placeholder="Input field" ref="name"/>
                     </div>
                     <button type="submit" class="btn btn-primary" onClick = {this.addProduct}>Lưu</button>
                   
                  </div>
              </div>
              
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {element}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-default" onClick={ this.onClick }>
                Click Me
              </button>        
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
