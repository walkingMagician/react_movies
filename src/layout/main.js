import React from 'react';
import './main.css'
import MoviesList from './components/MoviesList';
import Preloader from './components/Preloader';
import Search from './components/Search';

class Main extends React.Component
{
    state = 
    {
        movies: [],
        loading: false,
        totalResults: 0,
        currentPage: 1,
        searchTerm: 'matrix'
    }

    componentDidMount()
    {
        this.searchMovies(this.state.searchTerm, 1);
    }

    searchMovies = (searchTerm, page = 1) => {
        this.setState({ loading: true });
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=452b1393&s=${searchTerm}&page=${page}`)
        .then(Response => Response.json())
        .then(data => {
            if (data.Response === "True") {
                this.setState({
                    movies: data.Search,
                    totalResults: parseInt(data.totalResults),
                    currentPage: page,
                    searchTerm: searchTerm,
                    loading: false
                });
            } else {
                this.setState({
                    movies: [],
                    totalResults: 0,
                    loading: false
                });
            }
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
            this.setState({ loading: false });
        });
    }

    handleSearch = (searchTerm) => {
        this.searchMovies(searchTerm, 1);
    }

    handlePageChange = (page) => {
        this.searchMovies(this.state.searchTerm, page);
    }
    
    render()
    {
        const { movies, loading, totalResults, currentPage } = this.state;
        const totalPages = Math.ceil(totalResults / 10);

        return(
            <div className='main'>
                <div className='wrap'>
                    <Search onSearch={this.handleSearch} />
                    {
                        loading ? <Preloader /> : 
                        movies.length ?  
                            <MoviesList 
                                movies={movies} 
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={this.handlePageChange}
                            /> : 
                            !loading && <div className="no-results">No movies found</div>
                    }
                </div>
            </div>
        );
    }
}

export default Main;