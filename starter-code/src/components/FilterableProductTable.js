import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'

class FilterableProductTable extends Component {

  render() {
    return (
      <div className="FilterableProductTable">
        <SearchBar searchTheProducts={this.props.startFilter} inStock={this.props.findStock}/>
        <ProductTable data={this.props.products} />
      </div>
    );
  }
}

export default FilterableProductTable;