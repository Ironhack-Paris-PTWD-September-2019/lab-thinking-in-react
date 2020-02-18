import React, { Component } from 'react';
import ProductRow from './ProductRow';
import data from '../data.json';


class ProductTable extends Component {



render() {
    console.log("PT ", this.props);

    return (

        <div className="ProductTable">
            <div className="titlePR">
                <h2>Name</h2>
                <h2>Price</h2>
            </div>
            {this.props.products.map((item, index) => {
                return <ProductRow product={item} />
            })}
        </div>
    );

}
    
}

export default ProductTable;