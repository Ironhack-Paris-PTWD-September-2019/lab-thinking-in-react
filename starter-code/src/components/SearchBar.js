import React from 'react';


class SearchBar extends React.Component {
    render() {
        return (
        
        <div className="SearchBar">
            <input type="search" onChange={(e) => this.props.updateTable(e.target.value)} value={this.props.value} />
        </div>);
    }
}

export default SearchBar;   