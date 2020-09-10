import React, {Component} from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord : ""
    }
  }
  
  onChange = (event)=>{
    var target =  event.target;
    var name = target.name;
    var value = target.value;
    this.props.onSearch(value);
    this.setState({
      [name] : value
    })
  }
  render(){
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
            <input type="text" 
            className="form-control"
            name = "keyWord"
            value = {this.state.keyWord} 
            onChange= {this.onChange}
            placeholder="Search"/>
            <span className="input-group-btn">
                <button type="button" className="btn btn-primary"><i className="fa fa-search"> Search </i> </button>
            </span>
            </div>
        </div>
    );
  }
}

export default Search;
