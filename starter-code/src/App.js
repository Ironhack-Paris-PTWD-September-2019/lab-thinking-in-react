import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';


class App extends Component {

  state = {
    json : data
  }
  
  render() {
    console.log(this.state.json);
    return (
      <div className="App">
        <h1>IronStore</h1>
        <FilterableProductTable product={ this.state.json } />  
      </div>
    );
  }
}

export default App;
