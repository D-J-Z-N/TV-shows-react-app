import React from 'react';
import {Link} from 'react-router-dom'

function Pagination(props) {
  // Logic for displaying page numbers
  const totalItems = props.items;//need to access current elements???
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems.length / props.itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li
        key={number}
        id={number}
        onClick={props.handleClick}
      >
        <Link to={`/${number}`}>{number}</Link>
      </li>
    );
  });

  return (
    <div>
      <ul id="page-numbers" className="pagination">
        {renderPageNumbers}
      </ul>
    </div>
  );
}

export default Pagination;
