import React, { Component } from 'react';

import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    console.log("FP: ", this.props.products)
    return (
      <div style={{ marginLeft: '30%' }}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.data.map((product, i) => {
              return (
                <ProductRow key={product.id} product={product} />
              )
            })}

          </tbody>
        </table>


      </div>
    );
  }
}

export default ProductTable;