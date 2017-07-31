import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    return (
      <div className="search">
        <input
          className='search'
          type='text'
          placeholder='Search...'
          value={this.props.searchTerm}
          onChange={this.handleFilterTextInputChange}/>
      </div>
    );
  }
}

export default SearchBar;
