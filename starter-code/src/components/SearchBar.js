import React,{Component} from 'react';
import { render } from 'react-dom';
import '../App.css';

class  SearchBar extends Component{

  state = {
    firstQuery: ''
  }


  handleSearchInput = (event) => {
    this.setState({
      firstQuery: event.target.value
    });
    this.props.searchTheProduct(this.state);
    
  }

  handleStockedProducts = () => {
    this.props.stockedProducts();
  }

    
    render(){
      const { firstQuery } = this.state;
    return (
      <div>
        <h2>Search</h2>
        <input type="text" class="input search-bar" name="search" placeholder="Search"  onChange={(e) => this.handleSearchInput(e)}
      value={this.state.firstQuery}></input>
      <input type="checkbox" onChange={this.handleStockedProducts}></input> Only show products on stock
      </div>
    );
    }
}

export default SearchBar;