import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends Component {

    state = {
        search: '',
        stock: ''
    }

    updateTableSearch = (event) => {
        this.setState({
            search : event.target.value        
        })
    }

    updateTableStock = (event) => {
        this.setState({
            stock: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        })
    }


    render() {
        console.log("FPT ", this.props);
        const filteredProducts = this.props.products.data.filter(product => product.name.includes(this.state.search) || product.stocked === true);
        return (
            <div className="FilterableProductTable"> 
                <SearchBar updateTable={this.updateTable} value={this.state.search} />
                <ProductTable products={filteredProducts} />
            </div>
        );
    }

    
}

export default FilterableProductTable;