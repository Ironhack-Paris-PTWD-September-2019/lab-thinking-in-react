import React, { Component } from 'react';



class ProductRow extends Component {
    
    render() {
        console.log("PR ", this.props);
        const product = this.props.product;   

        return (
            <tr className="row">
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
  
}

export default ProductRow;