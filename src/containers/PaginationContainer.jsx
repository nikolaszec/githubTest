import React from "react";
import Pagination from "react-js-pagination";

const PaginationContainer = ({ pageNumber, totalCount, handlePageChange }) => {
  return (
    <div>
      <Pagination
        activePage={pageNumber}
        totalItemsCount={totalCount}
        pageRangeDisplayed={10}
        onChange={(n) => handlePageChange(n)}
        itemClass="page-item"
        linkClass="page-link"
        activeClass="active"
      />
    </div>
  );
};

export default PaginationContainer;
