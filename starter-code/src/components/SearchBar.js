import React from 'react';
class SearchBar extends React.Component {
    state={
        search:"",
        hasStocked:false
    }
    handleChange=(event)=>{
        let {type,value,name}=event.target;
        if (type === 'checkbox') {
            value = event.target.checked;
          }
        console.log("event.target.checked",event.target.checked)
        this.props.searchStockedProduct(event.target.checked)     
        this.props.searchTheProduct(event.target.value)
        this.setState({
            search:event.target.value,
            hasStocked:event.target.checked
        });

    }

    handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent page refresh
        
        // RESET
        this.setState({
            search:"",
            hasStocked:false
        })  
      }
    
    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <input type="search" name="search" value={this.state.name} onChange={this.handleChange}/>
                <input type="checkbox" name="hasStocked" checked={this.state.hasStocked} onChange={this.handleChange} />
                <label>Only show product in stock:</label>
            </form>
        )
    }
}
export default SearchBar;