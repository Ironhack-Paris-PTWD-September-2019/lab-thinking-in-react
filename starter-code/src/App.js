import React, { Component } from 'react';
import './App.css';
import products from './data.json';
import FilterableProductTable from './FilterableProductTable';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={products.data} />
      </div>
    );
  }
}