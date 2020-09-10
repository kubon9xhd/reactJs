import React, {Component} from 'react';
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : "",
     name : "",
     status : false
    }
  }
  componentWillMount(){
    if(this.props.task){
        this.setState({
          id : this.props.task.id,
          name : this.props.task.name,
          status : this.props.task.status 
        })
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.task){
      this.setState({
        id : nextProps.task.id,
        name : nextProps.task.name,
        status : nextProps.task.status 
      })
    }else if(nextProps && nextProps.task === null){
      this.setState({
        id :"",
        name : "",
        status : false 
      })
    }
  }
  closeForm = ()=>{
    this.props.getStatus(this.props.status);
  }
  onChange = (event)=>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name] : value
    });
    // console.log(this.state.status);
  }
  onSubmit = (event)=>{
    event.preventDefault();
    if(!this.props.task){
      this.props.onNewData(this.state.name,this.state.status === 'true' ? true : false);
    }else{
      this.props.dataUpdate(this.state);
    }
    this.onClear();
    this.closeForm(this.props.status);
  }
  onClear = ()=>{
    this.setState({
      name : "",
      status : false
     })
  }
  render(){

    return (
        <div className="panel panel-warning">
        <div className="panel-heading">
          <div className="text-right">
            <span 
              className="fa fa-times-circle" onClick = {this.closeForm}>
            </span>
    <h3 className="panel-title text-left">{this.props.task ? "Sua Doi Thong Tin" : "Them Cong Viec"}</h3>
          </div>
        </div>
        <div className="panel-body">
         <form onSubmit ={this.onSubmit}>                 
           <div className="form-group">
             <label>Tên :</label>
             <input 
              type="text" 
              name ="name" 
              value = {this.state.name}
              onChange = {this.onChange}
              className="form-control mb-10" 
              placeholder="Tên công việc"/>
             <label>Trạng thái</label>
             <select 
              className="form-control"
              name="status" 
              onChange={this.onChange}
              value = {this.state.status}
             >
               <option value = {true} >kích hoạt</option>
               <option value = {false} >ẩn</option>
             </select>
           </div>
           <div className="text-center">
            <button type="submit" className="btn btn-primary mr-5">
            <i className="fa fa-plus"></i> Lưu Lại</button>
            <button type="button" className="btn btn-warning" onClick = {this.onClear}><i className="fa fa-close"></i> Hủy bỏ</button>
           </div>
         </form>
         
        </div>
    </div>
    );
  }
}

export default TaskForm;
