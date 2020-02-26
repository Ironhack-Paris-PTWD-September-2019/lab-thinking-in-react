import React from 'react';

class ProductRow extends React.Component {
  render() {
    const {name, price, stocked} = this.props.product;

    const inlinecss = {};
    if (!stocked) {
      inlinecss.color = 'red';
    }

    return (
      <tr className="ProductRow">
        <td style={inlinecss}>{name}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

export default ProductRow;