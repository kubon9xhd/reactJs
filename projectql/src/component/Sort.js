import React, {Component} from 'react';

class Sort extends Component {
  onSort = (name,id) =>{
    this.props.onSort(name,id);
  }
  render(){
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Sắp sếp <i className="fa fa-sort" aria-hidden="true"></i></button>
                <ul className="dropdown-menu">
                  <li onClick ={() => this.onSort('name',1)}>
                    <a className="sort_selected" role = "button">
                      <i className="fa fa-sort-alpha-asc" aria-hidden="true"></i> Từ A - Z
                    </a>
                  </li>
                  <li onClick ={() => this.onSort('name',2)}>
                    <a  role = "button">
                      <i className="fa fa-sort-alpha-desc" aria-hidden="true"></i> Từ Z - A
                    </a>
                  </li>
                  <li role = "separator" className="divider"></li>
                  <li onClick ={() => this.onSort('name',3)}>
                    <a  role = "button">Trạng Thái Kích Hoạt</a>
                  </li>
                  <li onClick ={() => this.onSort('name',4)}>
                    <a  role = "button">Trạng Thái Ẩn</a>
                  </li>
                </ul>
            </div>
        </div>
    );
  }
}

export default Sort;
