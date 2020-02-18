import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends Component {

    state = {
        search: ''
    }

    updateTable = (value) => {
        this.setState({
            search: value
        })
    }

    

    render() {
        console.log("FPT ", this.props)
        const filteredProducts = this.props.products.data.filter(product => product.name.includes(this.state.search));
        return (
            <div> 
                <h1>FilterableProductTable</h1>
                <SearchBar updateTable={this.updateTable} value={this.state.search} />
                <ProductTable products={filteredProducts} />
            </div>
        );
    }

    
}

export default FilterableProductTable;