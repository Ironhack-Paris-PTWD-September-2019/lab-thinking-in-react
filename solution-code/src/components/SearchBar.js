import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <input type="search" value={this.props.query} onChange={(e) => this.props.updateQuery(e.target.value)} />

        <p>
          <label>
            <input type="checkbox" value={this.props.instockOnly} onChange={(e) => this.props.toggleInstockOnly()} />
            Only show product in stock
          </label>
        </p>
      </div>
    );
  }
}

export default SearchBar;