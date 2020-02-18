import React, { Component } from 'react';
import data from '../data.json';


class ProductRow extends Component {
    
    // console.log(props);
    

    render() {

        const product = this.props.product;   

        return (
            <div className="ProductRow">
                <h2>{product.name}</h2>
                <h2>{product.price}</h2>
            </div>
        );
    }
  
}

export default ProductRow;