import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName : '',
      txtPassword : '',
      txtDes : '',
      sltGender : 1,
      rdLang : 'vi',
      chBoxAcpt: true
    }
    this.onHandleChange = this.onHandleChange.bind(this);
  }
  onHandleChange(event){
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value
    })
  }
  onHandleSubmit = (event)=>{
    event.preventDefault();
    console.log(this.state);
  }
  render(){
    return(
      
      <div className="container mt-50">
        
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Form</h3>
                </div>
                <div className="panel-body">
                  
                  <form onSubmit = {this.onHandleSubmit}>
                    <legend>Test Form</legend>
                  
                    <div className="form-group">
                      <label>Username</label>
                      <input  type="text" 
                              className="form-control" 
                              name="txtName" 
                              placeholder="Input field"
                              onChange = {this.onHandleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      
                      <input type="password"
                              name="txtPassword" 
                              placeholder="Input field"
                              onChange = {this.onHandleChange} 
                              className="form-control" 
                              rows="3" required="required"
                        />
                      
                    </div>
                    <div className="form-group">
                      <label>Mô tả</label>
                      
                      <textarea name="txtDes" 
                                placeholder="Input field"
                              onChange = {this.onHandleChange} 
                              className="form-control" rows="3" 
                              required="required">
                      </textarea>
                      
                    </div>
                   <div className="form-group">
                      
                      <select className="form-control" 
                      name ="sltGender" 
                      value={this.state.sltGender}
                      onChange={ this.onHandleChange }>
                        <option value={0}>Nu</option>
                        <option value={1}>Nam</option>
                      </select>
                      
                      <div className="radio">
                        <label>
                          <input 
                            type="radio" 
                            name="rdLang" 
                            value="vi" 
                            onChange={this.onHandleChange}
                            checked = {this.state.rdLang === 'vi'}
                          />
                          Việt Nam
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input 
                            type="radio" 
                            name="rdLang" 
                            value="en"  
                            onChange={this.onHandleChange}
                            checked = {this.state.rdLang === 'en'}
                          />
                          Englisk
                        </label>
                      </div>
                      <div class="checkbox">
                           <label>
                             <input 
                              type="checkbox"
                              value={this.state.chBoxAcpt}
                              name="chBoxAcpt"
                              onChange={this.onHandleChange}
                              checked = {this.state.chBoxAcpt === true}
                            />
                             Checkbox
                           </label>
                         </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                    <button type="reset" className="btn btn-default">Xóa trắng</button>
                    
                  </form>
                  
                </div>
            </div>
            
          </div>
        </div>
        
      </div>
      
    );
  }
}

export default App;
