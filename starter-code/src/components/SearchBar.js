import React from 'react';


class SearchBar extends React.Component {
    render() {
        return (
        
        <div className="SearchBar">
            <h3>Search</h3>
            <input className="searchbar" type="search" name="search" onChange={(event) => this.props.updateTableSearch(event.target.value)} value={this.props.search} />
            
            
            <label>
                <input className="check" type="checkbox" name="stock" onClick={(event) => this.props.updateTableStock(event.target.value)} />Only show products on stock
            </label>
                  
        </div>
        );
    }
}

export default SearchBar;   

