import React from 'react';
import {Link} from 'react-router-dom'

function ItemList(props) {
  const items = props.items;
  const indexOfLastItem = props.currentPage * props.itemsPerPage;
  const indexOfFirstItem = props.indexOfLastItem - props.itemsPerPage;

  const listItems = items
    .filter((item) => `${item.original_name}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0);
  const currentItems = listItems
    .slice(indexOfFirstItem, indexOfLastItem)
    .map((item) =>
      <li key={item.id}>
        <Link to={`/${item.id}`}>{item.original_name}</Link>
      </li>
  );
  return (
    <div className="list">
      <ul>{currentItems}</ul>
    </div>
  );
}

export default ItemList;
