import React, { Component } from "react";

class SearchBar extends Component {
  // state = {
  //   searchValue: "",
  //   OnStock: false
  // };

  handleChange = event => {
    let { name, value, type } = event.target;
    if (type === "checkbox") {
      value = event.target.checked;
    }

    this.props.handleSearch({ [name]: value });
  };

  render() {
    return (
      <div className="searchBar">
        <label>Search</label>
        <input
          type="text"
          name="searchValue"
          value={this.props.searchValue}
          onChange={event => this.handleChange(event)}
          placeholder="..."
        ></input>

        <div className="checkbar">
          <input
            type="checkbox"
            name="OnStock"
            checked={this.props.OnStock}
            onChange={event => this.handleChange(event)}
          />
          <label className="stock-checkbox">Only show products on stock</label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
