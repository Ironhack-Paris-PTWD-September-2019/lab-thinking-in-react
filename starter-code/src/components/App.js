import React, { Component } from 'react';
import ProductTable from './ProductTable.js';
import SearchBar from './SearchBar.js'
import data from '../data.json'
import '../App.css';

class App extends Component {
  state={
    data:data.data
  }
  searchProductHandler=(searchedProduct)=>{
    
    //const copyData=[...data.data].filter(product=> product.name.toLowerCase().indexOf(searchedProduct.toLowerCase)!==-1)
    const copyData=[...data.data].filter(product=> product.name.toLowerCase().includes(searchedProduct.toLowerCase()))
    this.setState({
      data:copyData
    })
  }

  searchStockedProductHandler=(checkedValue)=>{
    const copyData2=[...data.data].filter(product=>product.stocked===checkedValue)
    console.log('copyData2',copyData2)
    this.setState({
      data:copyData2
    })
  }
  render() {
    console.log('data.data',data.data)
    return (
      <div className="App">
        <h1>Iron Store</h1>
        <SearchBar searchTheProduct={this.searchProductHandler} searchStockedProduct={this.searchStockedProductHandler}/>
        <ProductTable products={this.state.data} />
      </div>
    );
  }
}

export default App;
