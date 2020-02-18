import React, { Component } from 'react';


class ProductRow extends Component {
  
  render() {
    return (
      <div className="ProductRow">
        {!this.props.data.stocked ? <td style={{color:'red'}}>{this.props.data.name}</td> : <td>{this.props.data.name}</td> }
        <td>{this.props.data.price}</td>
      </div>
    );
  }
}

export default ProductRow;