import React,{Component} from 'react';
class Reset extends Component{
  restAll(color,fontSize){
    this.props.oldColor(color);
    this.props.oldFontSize(fontSize);
  }
  render(){
    return (
        <button type="button" className="btn btn-default" onClick={()=>this.restAll('red',15)}>Reset</button>
    );
    
    
  }
}
export default Reset;
