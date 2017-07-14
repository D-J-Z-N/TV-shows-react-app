import React from 'react';
import {Link} from 'react-router-dom'

function ItemList(props) {
  const items = props.items;
  const listItems = items
    .filter((item) => `${item.original_name}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
    .map((item) =>
      <li key={item.id}>
        <Link to={`/${item.id}`}>{item.original_name}</Link>
      </li>
  );
  return (
    <div className="list">
      <ul>{listItems}</ul>
    </div>
  );
}

export default ItemList;


// // Logic for displaying current items
// const indexOfLastItem = currentPage * itemsPerPage;
// const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
//
// const renderItems = currentItems.map((item, index) => {
//   return <li key={index}>{item}</li>;
// });
