import React from 'react';
import './Pagination.css';

class Pagination extends React.Component
{
    handlePageClick = (page) => {
        this.props.onPageChange(page);
    }

    render() {
        const { currentPage, totalPages } = this.props;
        
        const getPageNumbers = () => {
            const pages = [];
            const maxVisiblePages = 5;
            
            let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
            let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
            
            if (endPage - startPage + 1 < maxVisiblePages) {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }
            
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
            
            return pages;
        };

        const pageNumbers = getPageNumbers();

        return (
            <div className="pagination">
                <button 
                    className="pagination-button"
                    disabled={currentPage === 1}
                    onClick={() => this.handlePageClick(currentPage - 1)}
                >
                    Previous
                </button>
                
                {pageNumbers.map(page => (
                    <button
                        key={page}
                        className={`pagination-button ${currentPage === page ? 'active' : ''}`}
                        onClick={() => this.handlePageClick(page)}
                    >
                        {page}
                    </button>
                ))}
                
                <button 
                    className="pagination-button"
                    disabled={currentPage === totalPages}
                    onClick={() => this.handlePageClick(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        );
    }
}

export default Pagination;