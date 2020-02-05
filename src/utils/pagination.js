import React from "react";

const Pagination = ({ restaurantsPerPage, totalRestaurants, onPaginate }) => {
  let pageNumbers = [];

  for (let n = 1; n <= Math.floor(totalRestaurants / restaurantsPerPage); n++) {
    pageNumbers.push(n);
  }

  return (
    <React.Fragment>
      <div className="pagination">
        {pageNumbers.map(pageNumber => (
          <li key={pageNumber} className="pag-link">
            <a
              className="pag-link"
              href="#0"
              onClick={() => onPaginate(pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Pagination;
