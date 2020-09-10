import React,{Component} from 'react';
import './App.css';
import Reset from './component/Reset';
import Result from './component/Result';
import ColorPicker from './component/ColorPicker';
import SizeSetting from './component/sizeSetting';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      color : 'red',
      fontSize : 15
    }
    this.setColor = this.setColor.bind(this);
    this.getNewSize = this.getNewSize.bind(this);
    this.oldColor = this.getNewSize.bind(this);
    this.oldFontSize = this.oldFontSize.bind(this);
  }
  setColor(params){
   this.setState({
    color : params
   });
  }
  getNewSize(params){
    console.log(params);
    this.setState({
      fontSize : params
    });
  }
  oldColor(color){
    console.log(color);
    this.setState({
      color : color,
    });
  }
  oldFontSize(fontSize){
    console.log(fontSize);
    this.setState({
      fontSize : fontSize,
    });
  }
  render(){
    return (
      <div className="container mt-50">
      <div className="row">
        <ColorPicker color = {this.state.color} setColor = {this.setColor}></ColorPicker>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting 
              size = {this.state.fontSize} 
              newSize = {this.getNewSize}>
            </SizeSetting>
            <Reset 
                  oldColor = {this.oldColor}
                  oldFontSize = {this.oldFontSize}
            />
        </div>
        <Result color = {this.state.color} fontSize = {this.state.fontSize}></Result>
      </div>
    </div>);
    
    
  }
}
export default App;
