import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <tr>
          <td style={!this.props.product.stocked ? { color: 'red' } : {}}>{this.props.product.name}</td>
          <td>{this.props.product.price}</td>
        </tr>
      </div>
    )
  }
}

export default ProductRow;