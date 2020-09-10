import React, {Component} from 'react';
class TaskItem extends Component {
 setStatus = () =>{
   this.props.onChangeStatus(this.props.task.id);
 }
 setData = () =>{
    this.props.editData(this.props.task.id);
 }
 deleteData = () =>{
   this.props.deleteItem(this.props.task.id);
 }
  render(){
    var {task} = this.props;
    return (
        <tr className="text-center">
            <td>{this.props.index}</td>
            <td>{task.name}</td>
            <td><span className={task.status ===true ? "label label-danger" : "label label-success"} onClick = {this.setStatus}>{task.status === true? 'kích hoạt' : 'ẩn'}</span></td>
            <td>        
              <button type="button" className="btn btn-danger mr-5" onClick={this.setData}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Sửa</button>
              <button type="button" className="btn btn-warning" onClick={this.deleteData}><i className="fa fa-times" aria-hidden="true"></i> Xóa</button>
            </td>
          </tr>   
    );
  }
}

export default TaskItem;
