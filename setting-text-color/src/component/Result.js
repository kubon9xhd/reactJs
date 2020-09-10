import React,{Component} from 'react';
class Result extends Component{
  constructor(props) {
    super(props);  
  }

  setBackGround(){
    return{
      color : this.props.color,
      fontSize : this.props.fontSize,
      borderColor : this.props.color
    }
  }

  render(){
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-50">
        <div className="panel panel-default">
          <div className="panel-body">
            <p>Color : {this.props.color}: - Font-size : {this.props.fontSize}</p>
            <div className="content" style={this.setBackGround()}>
            <p>Noi dung</p>
            </div>
          </div>
        </div>
      </div>
    );
    
    
  }
}
export default Result;
