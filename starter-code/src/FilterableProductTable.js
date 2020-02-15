import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
  state = {
    actualList: [],
    filteredlist: [],
    instockList:[]
  };

  handleSearch = event => {
    let newArr = this.props.products;
    let FilteredList = newArr.filter(product =>
      product.name.toUpperCase().startsWith(event.target.value.toUpperCase())
   
    );

    this.setState({ actualList: FilteredList });
  };



  componentDidMount() {
    this.setState({ actualList: this.props.products });
  }

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar searchterm={this.handleSearch} />
        <ProductTable products={this.state.actualList} />
      </div>
    );
  }
}