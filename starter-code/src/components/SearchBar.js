import React from 'react'

class SearchBar extends React.Component {
  render() {
    return (
      <form className="SearchBar" style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'skyblue' }}>
        <label>
          <p>Search</p>
          <input type="text" style={{ border: 'black' }} />
        </label>
        <label>
          <input type="checkbox" />
          Only show products on stock

          </label>
      </form>
    )
  }
}

export default SearchBar;