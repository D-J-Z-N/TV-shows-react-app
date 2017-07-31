import React from 'react';
import {Link} from 'react-router-dom';

class PaginatedList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.items;
    const totalItems = items
      .filter((item) => `${item.original_name}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
      .map((item) =>
        <li key={item.id}>
          <Link to={`/item/${item.id}`}>{item.original_name}</Link>
        </li>
      );

    const indexOfLastItem = this.props.currentPage * this.props.itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - this.props.itemsPerPage;
    const currentItems = totalItems.slice(indexOfFirstItem, indexOfLastItem);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems.length / this.props.itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    console.log(this.props);

    const renderPageNumbers = pageNumbers.map(number => {
      console.log(number);
      return (
        <li
          key={number}
          id={number}
          className={Number(this.props.currentPage) === number ? 'active': ''}
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
}

export default PaginatedList;
