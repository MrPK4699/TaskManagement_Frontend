import React from 'react';

const Pagination = ({ currentPage, totalPages }) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" disabled={currentPage === 1}>Previous</button>
        </li>
        <li className="page-item disabled">
          <span className="page-link">Page {currentPage} of {totalPages}</span>
        </li>
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" disabled={currentPage === totalPages}>Next</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
