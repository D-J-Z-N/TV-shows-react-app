import React from 'react';
import {Link} from 'react-router-dom'

class PaginatedList extends React.Component {
  constructor(props) {
   super(props);
   this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onPageClick(Number(event.target.id));
    console.log(event.target.id);
  }

  render() {
    const items = this.props.items;
    const totalItems = items
      .filter((item) => `${item.original_name}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
      .map((item) =>
        <li key={item.id}>
          <Link to={`/${item.id}`}>{item.original_name}</Link>
        </li>
      );

    const indexOfLastItem = this.props.currentPage * this.props.itemsPerPage;
    const indexOfFirstItem = this.props.indexOfLastItem - this.props.itemsPerPage;
    const currentItems = totalItems.slice(indexOfFirstItem, indexOfLastItem);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems.length / this.props.itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      console.log(this.props);
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
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
