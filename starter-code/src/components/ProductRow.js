import React, { Component } from 'react';
import { render } from 'react-dom';
import '../App.css';

class ProductRow extends Component {

  render()
    {  
      return(
        <div key={this.props.name} className="row">
        <div className="productName">
      {this.props.name}
        </div>
        <div className="priceName">
      {this.props.price}
        </div>
        </div>
    );
    }
}

export default ProductRow;