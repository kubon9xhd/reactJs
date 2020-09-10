import React, {Component} from 'react';
import TaskItem from './TaskItem';
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName : "",
      filterStatus : -1
    }
  }
  
  onChange = (event)=>{
   var target = event.target;
   var name = target.name;
   var value =  target.value;
   this.props.onFilterData(
    name === "filterName" ? value : this.state.filterName,
    name === "filterStatus" ? value : this.state.filterStatus
   );
   this.setState({
     [name] : value
   });
  }
  render(){
    var {task} = this.props;
    var {filterName,filterStatus} = this.state;
    var elementItems;
    elementItems = task.map((value,index)=>{
      return <TaskItem 
      key={index} 
      index={index} 
      task = {value} 
      status = {this.props.status}
      editData = {this.props.editData} 
      onChangeStatus = {this.props.onChangeStatus}
      deleteItem = {this.props.deleteItem}
      ></TaskItem>;
    });

    return (
        <table className="table table-bordered table-hover mt-10">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input type="text" 
               name = "filterName"
               onChange= {this.onChange}
               value = {filterName}
               className="form-control" 
               title=""/>
            </td>
            <td>
              <select 
              name="filterStatus" 
              value = {filterStatus}
              onChange = {this.onChange}
              className="form-control">
                <option value={-1}>Tất Cả</option>
                <option value={2}>Ẩn</option>
                <option value={1}>Kích Hoạt</option>
              </select>
            </td>
            <td></td>
          </tr>
          {elementItems}
        </tbody>
      </table>   
    );
  }
}

export default TaskList;
