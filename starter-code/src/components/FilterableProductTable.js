import React, { Component } from 'react';
import { render } from 'react-dom';
import data from '../data.json';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';
import '../App.css';



class FilterableProductTable extends Component{

  state = {
    myProducts: data.data,
    stocked: false,
    search: '',
  }

  searchProductHandler = (theProduct) => {
    this.setState({
      search: theProduct.firstQuery
    })
  }

  stockedProducts = () => {
    this.setState({
      stocked: !this.state.stocked
    })
  }

  filterMyProducts = () => {
    
    if (this.state.stocked === true){
      
      var table2 = this.state.myProducts.filter(element => (element.name.includes(this.state.search) && (element.stocked==true))
      );
    }
    else{
      if (this.state.search.length==0){return this.state.myProducts}
      var table2 = this.state.myProducts.filter(element => (element.name.includes(this.state.search)));
    }
    return table2;
  }

  render(){
    const filteredProducts = this.filterMyProducts();
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar key="0" searchTheProduct={this.searchProductHandler} stockedProducts = {this.stockedProducts}></SearchBar>
        <ProductTable key="1" products={filteredProducts}></ProductTable>
      </div>
    );
  }
}

export default FilterableProductTable;