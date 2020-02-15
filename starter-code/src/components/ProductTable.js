import React from "react";
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {
  render() {
    let products = this.props.filter.OnStock
      ? this.props.products.filter(
          product => product.stocked === this.props.filter.OnStock
        )
      : this.props.products;

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter(product =>
              product.name
                .toUpperCase()
                .includes(this.props.filter.searchValue.toUpperCase())
            )
            .map(product => {
              return <ProductRow key={product.name} {...product} />;
            })}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
