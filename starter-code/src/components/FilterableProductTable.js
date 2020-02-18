import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class App extends Component {
  render() {
    return (
      <div>
        < SearchBar />
        < ProductTable />
      </div>
    );
  }
}

export default FilterableProductTable;
