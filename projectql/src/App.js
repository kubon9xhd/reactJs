import React, {Component} from 'react';
import './App.css';
import TaskForm from './component/TaskForm';
import Control from './component/Control';
import TaskList from './component/TaskList';
import _  from  'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      isDisplayForm : false,
      dataEditID : null,
      keyword : "",
      sort : null
      }
  }
  // run one time when u load browser
  componentWillMount(){
    if(localStorage && localStorage.getItem('task')){
      this.setState({
        task : JSON.parse(localStorage.getItem('task'))
      });
    }
  }
  geneRateData = () =>{
    var data = [
      {
        id : this.geneRateID(),
        name : "Ăn",
        status :true,
      },      
      {
        id : this.geneRateID(),
        name : "Chơi",
        status :false,
      },      
      {
        id : this.geneRateID(),
        name : "Quẩy",
        status :true,
      },
    ];
    localStorage.setItem('task',JSON.stringify(data));
  }
  s4(){
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }
  geneRateID(){
    return this.s4()+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4();
  }
  showTask = ()=>{
    var {isDisplayForm,dataEditID} = this.state;
    if(isDisplayForm === true && dataEditID !== null){
      this.setState({
        isDisplayForm : true,
        dataEditID : null
      })
    }else{
      this.setState({
        isDisplayForm : !isDisplayForm,
        dataEditID : null
      });
    }

  }
  getStatus = (isStatus) =>{
    this.setState({
      isDisplayForm : !isStatus,
      dataEditID : null
    });
  }
  findIndex(id){
    var {task} = this.state;
    var result = -1;
    task.forEach((element,index) => {
      if(element['id'] === id){
        result = index;
      }
    });
    return result;
  }
  showForm = () =>{
    this.setState({
      isDisplayForm : true
    })
  }
  closeForm = () =>{
    this.setState({
      isDisplayForm : false
    })
  }
  editData = (id) =>{
    var {task} = this.state;
    // var index = this.findIndex(id);
    var index = _.findIndex(task,(task) => {
      return task.id === id;
    });
    var dataEditID = task[index];
    this.setState({
      dataEditID : dataEditID
    })
    this.showForm();
  }
  onChangeStatus = (id) =>{
      var object = JSON.parse(localStorage.getItem('task'));
      // var number = object.indexOf(id)
      object.forEach((value)=>{
          if(value['id'].indexOf(id) === 0){
            console.log(value);
            value['status'] = !value['status'];
          }
      });
     localStorage.setItem('task',JSON.stringify(object));
     this.setState({
      task : JSON.parse(localStorage.getItem('task'))
    });
  }
  newData = (name,status)=>{
    
    var object = JSON.parse(localStorage.getItem('task'));
    object.push({
      id : this.geneRateID(),
      name : name,
      status : status
    });
    localStorage.setItem('task',JSON.stringify(object));
    this.setState({
      task : JSON.parse(localStorage.getItem('task'))
    });
  }
  deleteItem = (id)=>{
    var object = JSON.parse(localStorage.getItem('task'));
    object.forEach((element,index) => {
      if(element['id'].indexOf(id) === 0){
        object.splice(index,1);
      }
    });
    localStorage.setItem('task',JSON.stringify(object));
    this.setState({
      task : JSON.parse(localStorage.getItem('task'))
    });
  }
  dataUpdate = (data) => {
    var status;
    if(typeof data.status === "boolean"){
      status = data.status;
    }else {
      status = data.status === "true" ? true : false; 
    }
    var index = this.findIndex(data.id);
    var object = JSON.parse(localStorage.getItem("task"));
    
    object[index]['name'] = data.name;
    object[index]['status'] = status;

    localStorage.setItem('task',JSON.stringify(object));
    this.setState({
      task : JSON.parse(localStorage.getItem('task'))
    });
  }
  onSearch = (data) =>{
    this.setState({
      keyword : data
    })
  }
  onFilterData = (filterName,filterStatus) =>{
    filterStatus = parseInt(filterStatus,10);
    console.log(filterStatus);
    var object = JSON.parse(localStorage.getItem('task'));
    var status = (filterStatus === 1)? true : false;
    var arraySearch = [];
    if(filterName || filterStatus){
      object.forEach((value,index)=>{
        if(value.name.includes(filterName) && filterStatus === -1){
          arraySearch.push(object[index]);
        }
        if(value.name.includes(filterName) && filterStatus !== -1){
          console.log(status);
          if(value.status === status){
            arraySearch.push(object[index]);
          }
        }
      });
    }else{
      this.setState({
        task : JSON.parse(localStorage.getItem('task'))
      })
    }
    this.setState({
      task : arraySearch
    })
  }
  onSort =(name,id)=>{
    this.setState({
      sort : parseInt(id)
    })
  }
  render(){
    var {task ,isDisplayForm,dataEditID,keyword,sort} = this.state; // same var task = this.state.task
    if(keyword !== ""){
      task = task.filter((task)=>{
        return task.name.indexOf(keyword) !== -1 ? task : null; 
      })
    }
    if(sort !== -1){
      if(sort === 1){
        // sap xep tang dan
        task.sort(function(a,b){
          var x = a.name.toLowerCase();
          var y =  b.name.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        })
      }
      if(sort === 2){
        // sap xep giam dan
        task.sort(function(a,b){
          var x = a.name.toLowerCase();
          var y =  b.name.toLowerCase();
          if (x > y) {return -1;}
          if (x < y) {return 1;}
          return 0;
        })
      }
      if(sort === 3){
        task.sort(function(a,b){
         if(a.status > b.status){return -1}
         if(a.status < b.status) {return 1}
         return 0;
        })
      }
      if(sort === 4){
        task.sort(function(a,b){
          if(a.status < b.status){return -1}
          if(a.status > b.status) {return 1}
          return 0;
         })
      }
    }
    var showDisplay = isDisplayForm === true ? 
    <TaskForm 
      status = {isDisplayForm} 
      getStatus = {this.getStatus}
      onNewData = {this.newData}
      task ={dataEditID}
      dataUpdate = {this.dataUpdate}
      >
    </TaskForm> : "";
    return (
      
      <div className="container">
        <div className="text-center">
          <h1>Quản lý công việc</h1>
          <hr></hr>
        </div>
        <div className="row">
          
          <div className={isDisplayForm === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
            {showDisplay}
          </div>
          
          <div className={isDisplayForm === false ? "col-xs-12 col-sm-12 col-md-12 col-lg-12" : "col-xs-8 col-sm-8 col-md-8 col-lg-8"}>
            
            <button type="button" className="btn btn-primary mr-5" onClick = {this.showTask}>
            <i className="fa fa-plus"></i> Thêm công việc</button>
            <button type="button" className="btn btn-danger" onClick={this.geneRateData}>Generate</button>
              <Control onSearch = {this.onSearch} onSort = {this.onSort}></Control>       
            {/* Table */}
            <TaskList 
              task = {task}
              status = {isDisplayForm} 
              editData = {this.editData} 
              onChangeStatus = {this.onChangeStatus}
              deleteItem = {this.deleteItem}
              onFilterData = {this.onFilterData}
              >
            </TaskList>
          </div>
          
        </div>
      </div>
      
    );
  }
}

export default App;
