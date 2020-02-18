import React from 'react';
class ProductRow extends React.Component {
    render(){
        var colorValue="black"
        if (this.props.product.stocked===false){
            colorValue="red"
        }
        return(
            <tr style={{color:colorValue}}>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}
export default ProductRow;