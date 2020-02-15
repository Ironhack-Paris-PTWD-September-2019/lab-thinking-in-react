import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product, index) => (
          <ProductRow name={product.name} price={product.price} key={index} />
        ))}
      </tbody>
    </table>
  );
}