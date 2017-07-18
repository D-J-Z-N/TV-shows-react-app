import React from 'react';
import {Link} from 'react-router-dom'

function PaginatedList(props) {

  const items = props.items;
  const totalItems = items
    .filter((item) => `${item.original_name}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
    .map((item) =>
      <li key={item.id}>
        <Link to={`/${item.id}`}>{item.original_name}</Link>
      </li>
    );

  const indexOfLastItem = props.currentPage * props.itemsPerPage;
  const indexOfFirstItem = props.indexOfLastItem - props.itemsPerPage;
  const currentItems = totalItems.slice(indexOfFirstItem, indexOfLastItem);
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
      <div className="list">
        <ul>{currentItems}</ul>
      </div>
      <ul id="page-numbers" className="pagination">
        {renderPageNumbers}
      </ul>
    </div>
  );
}

export default PaginatedList;
