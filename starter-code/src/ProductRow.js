import React from 'react';

export default function ProductRow({ name, price }) {
  return (
  
      <tr className="productRow">
        <td>{name}</td>
        <td>{price}</td>
      </tr>
  
  );
}