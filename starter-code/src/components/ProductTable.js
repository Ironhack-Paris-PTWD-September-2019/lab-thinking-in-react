import React, { Component } from 'react';
import ProductRow from './ProductRow';
import data from '../data.json';

const ProductTable = (props) => {

    console.log(props);

    return (
        <div className="ProductTable">
            <div className="titlePR">
                <h2>Name</h2>
                <h2>Price</h2>
            </div>
            <ProductRow />
        </div>
    );
}

export default ProductTable;