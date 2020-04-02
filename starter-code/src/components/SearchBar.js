import React from "react";

class SearchBar extends React.Component {
  updateSearchValue = (event) => {
    let { value } = event.target;
    this.props.handleSearch(value);
  }

  updateStockValue = (event) => {
    let value = event.target.checked;
    this.props.handleStock(value);
  }
  
  render() {
    return (
      <div>
        <label>
          Search
          <input type='text' name='search' value={this.props.search} onChange={this.updateSearchValue}/>
        </label>
        <label>
          <input type='checkbox' name='stockAvailableCheck' checked={this.props.stock} onChange={this.updateStockValue}/>
          Only show products on stock
        </label>
      </div>
    );
  }
}

export default SearchBar;