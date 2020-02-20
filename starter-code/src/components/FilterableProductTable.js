import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends Component {

    state = {
        search: '',
        showStockOnly: false
    }

    updateTableSearch = (value) => {
        console.log(value)
        this.setState({
            search : value        
        })
    }

    updateTableStock = (value) => {
        console.log(value)
        if (value === true) {
            this.setState({
                showStockOnly: true        
            })
        }
        
    }


    render() {
        console.log("FPT ", this.props);
        const filteredProducts = this.props.products.data.filter(product => product.name.includes(this.state.search));
        const filterStock = filteredProducts.filter(product => product.stocked === true);

        
        return (
            <div className="FilterableProductTable"> 
                <SearchBar updateTableSearch={this.updateTableSearch} updateTableStock={this.updateTableStock} value={this.state.search} />
                <ProductTable products={filterStock} />
            </div>
        );
    }

    
}

export default FilterableProductTable;

{/* <SearchBar updateTableSearch={this.updateTableSearch} updateTableStock={this.updateTableStock} value={this.state.search} /> */}
