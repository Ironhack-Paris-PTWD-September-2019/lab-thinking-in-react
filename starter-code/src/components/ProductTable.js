import React from "react";
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => <ProductRow key={product.id} name={product.name} price={product.price}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;