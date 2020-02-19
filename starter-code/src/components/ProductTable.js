import React, { Component } from 'react';
import ProductRow from './ProductRow';


class ProductTable extends Component {

    render() {
        console.log("PT ", this.props);

        return (

            <div className="ProductTable">
                <table className="tab">
                    <tr className="title">
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {this.props.products.map((item, index) => {
                        return <ProductRow product={item} key={index}/>    
                    })}
                </table>
            </div>
        );
    }
    
}

export default ProductTable;