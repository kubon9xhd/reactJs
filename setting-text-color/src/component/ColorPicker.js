import React,{Component} from 'react';
class ColorPicker extends Component{
  constructor(props) {
    super(props);
    this.state = {
      color : ['red','yellow','green','blue']
    }
  }
  setBackground(color){
    return {
      backgroundColor : color
    }
  }
  setActiveColor(color){
    this.props.setColor(color);
  }
  render(){
    var elementColor = this.state.color.map((color,index)=>{
      return  <span  key = {index} 
                    onClick={()=>{this.setActiveColor(color)}}
                    style={this.setBackground(color)}
                    className = {color === this.props.color ? 'active' : ''}
              ></span>
    });
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Color Picker</h3>
          </div>
          <div className="panel-body">
            {elementColor}
          </div>
        </div>
      </div>
    );
    
    
  }
}
export default ColorPicker;
