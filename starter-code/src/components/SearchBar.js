import React, { Component } from 'react';


class SearchBar extends Component {
    state = {
        search : ''
    }
  
    searchSpace=(event)=>{
        let keyword =event.target.value;
        this.props.searchTheProducts(keyword);
        this.setState({
            search : keyword
        })
    }


  render() {
    return (
      <div className="SearchBar">
        <p>Search</p>
        <input type='search' value={this.state.search} onChange={this.searchSpace}></input>
        <p>
        <label>Only show products in stock<input type='checkbox' onChange={this.props.inStock}></input>
        </label>
        
        </p>
      </div>
    );
  }
}

export default SearchBar;