import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends React.Component {
  state = {
    search: "",
    stockAvailableCheck: false,
    products: this.props.products.data
  }

  updateStock = (value) => {
    this.setState({stockAvailableCheck: value});
  }

  updateSearch = (value) => {
    this.setState({search: value});
  }
  
  render() {
    let filteredProducts = this.state.products.filter(product => product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) === 0);
    if (this.state.stockAvailableCheck === true) {
      filteredProducts = filteredProducts.filter(product => product.stocked === this.state.stockAvailableCheck)
    }
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar handleStock={this.updateStock} handleSearch={this.updateSearch} stock={this.state.stockAvailableCheck} search={this.state.search} productsFilter={this.filterProducts} />
        <ProductTable products={filteredProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;