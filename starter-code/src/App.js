import React, { Component } from "react";
import "./App.css";
import data from "./data.json";
import ProductTable from "./components/ProductTable.js";
import SearchBar from "./components/SearchBar";

class App extends Component {
  state = {
    searchValue: "",
    OnStock: false
  };
  handleSearch = searchBar => {
    console.log("handled Change");
    this.setState(searchBar);
  };

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar handleSearch={this.handleSearch} {...this.state} />
        <ProductTable products={data.data} filter={this.state} />
      </div>
    );
  }
}

export default App;
