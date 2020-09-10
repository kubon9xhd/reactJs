import React, { Component } from 'react';

class Header extends Component{
  render(){
    return (
     <nav className="navbar navbar-default" role="navigation">
         <div className="navbar-header">
             <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                 <span className="sr-only">Bái 2 Component</span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
             </button>
             <a className="navbar-brand">Trang chủ</a>
         </div>
     
         <div className="collapse navbar-collapse navbar-ex1-collapse">
             <ul className="nav navbar-nav">
                 <li className="active"><a>Link</a></li>
                 <li><a>Link</a></li>
             </ul>
             <ul className="nav navbar-nav navbar-right">
                 <li><a>Link</a></li>
                 <li className="dropdown">
                     <a className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
                     <ul className="dropdown-menu">
                         <li><a>Action</a></li>
                         <li><a>Another action</a></li>
                         <li><a>Something else here</a></li>
                         <li><a>Separated link</a></li>
                     </ul>
                 </li>
             </ul>
         </div>
     </nav>
     
    );
  }
}

export default Header;
