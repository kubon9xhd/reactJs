import React, { Component } from 'react';

class product extends Component{
  render(){
    return (       
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="thumbnail">
                <img data-src="#" src = "https://drop.ndtv.com/TECH/product_database/images/910201410645AM_635_apple_iphone_6_plus.jpeg" alt=""></img>
                <div className="caption">
                    <h3>IPHONE 6 PLUS</h3>
                    <p>
                        10.000.000 vnđ
                    </p>
                    <p>
                        <a href="#" className="btn btn-primary">Action</a>
                        <a href="#" className="btn btn-default">Action</a>
                    </p>
                </div>
            </div>
        </div>
    );
  }
}

export default product;
