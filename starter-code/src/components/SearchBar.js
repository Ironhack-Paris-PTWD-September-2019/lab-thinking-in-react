import React from 'react'

class SearchBar extends React.Component {

  state = {
    filteredProducts: []
  }

  searchProducts = (word) => {
    const newFilteredProducts = this.props.products.data.filter(product => product.name.includes(word));
    console.log("SB: ", newFilteredProducts)
    this.setState({ filteredProducts: newFilteredProducts });
  }

  // la search bar fonctionne ; il reste à faire l'affichage du résultat

  render() {
    return (
      <form className="SearchBar" style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'skyblue' }}>

        <label>
          <p>Search</p>
          <input type="text" style={{ border: 'black' }} placeholder="Search..." onChange={event => this.searchProducts(event.target.value)} />
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