import React from 'react'

const ItemView = (item) => {
  return (
    <div className="single-item">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
}
export default ItemView;
