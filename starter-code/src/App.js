import React, { Component } from 'react';
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
  state = {
    productArray : data.data
  }

  filter = keywords => {
    let filteredList = data.data.filter(keyword => {
      return keyword.name.toLowerCase().indexOf(keywords.toLowerCase()) !== -1;
    })

    console.log(filteredList);

    this.setState({
      productArray : filteredList
    })
  }

  stocker= () => {
    console.log('Hello Mous');
    let filteredStock = data.data.filter(product => {
      return product.stocked
    })

    console.log(filteredStock);


    this.setState({
      productArray : filteredStock
    })
  }

  render() {
    return (
      <div className="App">
        <FilterableProductTable products={this.state.productArray} startFilter={this.filter} findStock={this.stocker}/>
      </div>
    );
  }
}

export default App;