import React from 'react'

const ItemView = (item) => {
  return (
    <div className="single-item">
      <h2>{item.original_name}</h2>
      
      <p>{item.overview}</p>
    </div>
  );
}
export default ItemView;
