import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  render() {
    console.log("FPT:", this.props.products)
    return (
      <div>
        < SearchBar />
        < ProductTable products={this.props.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
