import React from "react";

const ProductRow = props => {
  let nameStyle = {
    color: !props.stocked ? "red" : "black"
  };

  return (
    <tr>
      <td style={nameStyle}>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
};

export default ProductRow;
