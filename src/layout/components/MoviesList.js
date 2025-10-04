import React from 'react';
import './MoviesList.css'
import Movie from './Movie';
import Pagination from './Pagination';

class MoviesList extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        const { movies, currentPage, totalPages, onPageChange } = this.props;
        
        return(
            <div className='movies-container'>
                <div className='movies'>
                    {
                        movies.map(movie => 
                            <Movie key={movie.imdbID} {...movie} />
                        )
                    }
                </div>
                {totalPages > 1 && (
                    <Pagination 
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                    />
                )}
            </div>
        );
    }
}

export default MoviesList;