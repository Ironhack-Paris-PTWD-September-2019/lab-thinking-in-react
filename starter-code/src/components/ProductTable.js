import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  
  render() {
    return (
      <div className="ProductTable">
        
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            <tr>
                {this.props.data.map(product => {

                    return (
                        <div>
                        <tr><ProductRow data={product} /></tr>
                        </div>
                    )
                })

                }
            </tr>
        </table>
      </div>
    );
  }
}

export default ProductTable;