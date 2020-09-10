import React, {Component, Children} from 'react';

class product extends Component{
//   constructor(props){
//     super(props);
//     this.Buy = this.Buy.bind(this);
//   }
//   Buy(){
//     alert(this.props.children);
//   }
  Buy2 = () => {
    alert(this.props.children + ' - ' + this.props.price)
  }
  render(){
    return(
     <div> 
         <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
             <div className="thumbnail">
                 <img data-src="#" src={this.props.img} alt={this.props.name}/>
                 <div className="caption">
                    <h3>{this.props.children}</h3>
                    <p>{this.props.price}</p>

                     <p>
                         <a href="#" className="btn btn-primary" onClick = 
                             {this.Buy2}
                        >Mua Ngay</a>
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
