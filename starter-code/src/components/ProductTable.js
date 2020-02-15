import React, { Component } from 'react';
import { render } from 'react-dom';
import ProductRow from './ProductRow.js';
import '../App.css';

class ProductTable extends Component {

  render(){
      return(
        <div className="table">
          {this.props.products.map(elem => {
          return <ProductRow key={elem.name} name={elem.name} price={elem.price}></ProductRow>
        })}
        
        </div>
    );
    }
}

export default ProductTable;