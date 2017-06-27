import React from 'react';
import {Link} from 'react-router-dom'

function ItemList(props) {
  const items = props.items;
  const listItems = items
    .filter((item) => `${item.original_name}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
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
