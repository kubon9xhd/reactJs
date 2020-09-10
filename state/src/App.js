import React, {Component, useRef} from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      product : [
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
      ],
      isACtive : false
    };
  }
  
  onClick = () => {
      this.setState({
        isACtive : !this.state.isACtive
      });
  }
  addProduct = () =>{
    console.log(this.refs.name.value);
  }
 Show(active){
  if(active){
    return <table className="table table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên SP</th>
                  <th>Giá tiền</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>IP 6PLS</td>
                  <td>500000</td>
                </tr>
              
              </tbody>
            </table>
  }
  return '';
 }
  render(){
    let element = this.state.product.map((value,index)=>{
      if(value.status){
        return  <tr key = {value.id}>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.price}</td>
                </tr>
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
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
              <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">Thêm sản phẩm</h3>
                  </div>
                  <div className="panel-body">                   
                     <div className="form-group">
                       <label htmlFor="">label</label>
                       <input type="text" className="form-control" placeholder="Input field" ref ="name"/>
                     </div>
                     <button type="submit" className="btn btn-primary" onClick = {this.addProduct}>Lưu</button>
                   
                  </div>
              </div>
              
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {this.Show(this.state.isACtive)}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-default" onClick={ this.onClick }>
                {this.state.isACtive + ""}
              </button>        
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
