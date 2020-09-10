import React, {Component} from 'react';

class product extends Component{
  render(){
    return(
     <div> 
         <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
             <div className="thumbnail">
                 <img data-src="#" src={this.props.img} alt={this.props.name}/>
                 <div className="caption">
                    <h3>{this.props.children}</h3>
                     <p>
                     {this.props.price} VND
                     </p>
                     <p>
                         <a href="#" className="btn btn-primary">Mua Ngay</a>
                         <a href="#" className="btn btn-default">Action</a>
                     </p>
                 </div>
             </div>
         </div>
         
     </div>
    );
  }
}

export default product;
