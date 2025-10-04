import React from 'react';
import './Search.css';

class Search extends React.Component
{
    state = {
        searchTerm: ''
    }

    handleInputChange = (e) => {
        this.setState({ searchTerm: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.searchTerm.trim()) {
            this.props.onSearch(this.state.searchTerm.trim());
        }
    }

    render()
    {
        return(
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    className="search-input"
                    placeholder="Search for movies..."
                    value={this.state.searchTerm}
                    onChange={this.handleInputChange}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
        );
    }
}

export default Search;