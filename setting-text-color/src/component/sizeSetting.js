import React,{Component} from 'react';
class sizeSetting extends Component{
  upgradeSize(size){
    var newSize = size+2;
    if(newSize > 8 && newSize < 36){
      this.props.newSize(newSize);
    }else{
      this.props.newSize(size);
    }
  }
  downSize(size){
    var newSize = size-2;
    if(newSize > 8){
      this.props.newSize(newSize);
    }else{
      this.props.newSize(size);
    }
  }
  render(){
    return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Size:{this.props.size}</h3>
          </div>
          <div className="panel-body">
            <button type="button" className="btn btn-success" onClick={()=>this.upgradeSize(this.props.size)}>Tang</button>
            <button type="button" className="btn btn-success" onClick={()=>this.downSize(this.props.size)}>Giam</button>
          </div>
        </div>
    );
     
  }
}
export default sizeSetting;
