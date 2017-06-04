import React from 'react';
import {Link} from 'react-router-dom'

function ItemList(props) {
  const items = props.items;
  const listItems = items.map((item) =>
    <li key={item.id}>
      <Link to={`/items/${item.id}`}>{item.title}</Link>
    </li>
  );
  return (
    <div className="list">
      <h1>TV Shows</h1>
      <ul>{listItems}</ul>
    </div>
  );
}

export default ItemList;



//<Link to={`/${item.id}`}>{item.title}</Link>
