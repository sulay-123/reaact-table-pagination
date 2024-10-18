import React from 'react'
import '../styles/pagination.css';

interface PaginationProps {
    itemsPerPage: number;
    totalItems: number;
    paginate: (pageNumber: number) => void;
  }

  const Pagination: React.FC<PaginationProps> = ({
    itemsPerPage,
    totalItems,
    paginate,
  }) => {
    const pageNumbers: number[] = [];
  
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  export default Pagination;
