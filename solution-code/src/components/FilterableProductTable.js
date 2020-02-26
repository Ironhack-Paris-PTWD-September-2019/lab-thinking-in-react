import React from 'react';

import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';

class FilterableProductTable extends React.Component {
  state = {
    query: '',
    instockOnly: false
  }

  updateQuery = (newValue) => {
    this.setState({query: newValue});
  }

  toggleInstockOnly = () => {
    this.setState({instockOnly: !this.state.instockOnly})
  }

  render() {
    //
    // Let's filter the products before rendering
    //
    
    const products = this.props.products.filter(product => {
      // does the product's name matches the query ?
      const matchName = product.name.includes(this.state.query);
      // is this product is in stock ?
      const instock = product.stocked === true;

      return matchName && (this.state.instockOnly ? instock : true)
    })


    //
    // 👨🏻‍🎨 render time !
    //

    return (
      <div>
        <SearchBar
          query={this.state.query} updateQuery={this.updateQuery}
          instockOnly={this.state.instockOnly} toggleInstockOnly={this.toggleInstockOnly}
        />
        <ProductTable products={products} />
      </div>
    );
  }
}

export default FilterableProductTable;