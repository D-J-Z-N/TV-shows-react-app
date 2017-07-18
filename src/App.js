import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
//import ItemList from './List'
import ItemView from './Item'
import request from 'superagent';
import SearchBar from './Search';
import PaginatedList from './Pagination';
require('react-progress-bar-plus/lib/progress-bar.css');

const ProgressBar = require('react-progress-bar-plus');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TVSHOWS: [],
      searchTerm: '',
      currentPage: 1,
      itemsPerPage: 10
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleFilterTextInput(searchTerm) {
    this.setState({
      searchTerm: searchTerm,
    });
  }

  handleClick(event) {
    this.setState({
      //issue here, state is not being updated
      currentPage: Number(event.target.id),
    });
  }

  componentWillMount() {
    request
      .get('https://api.themoviedb.org/3/discover/tv?api_key=08ccdedbdad6b837eb8537ad2513166c')
      .accept('json')
      .end(function(err, res) {
        if (err) {
          alert("Ooops... Something went wrong. Check error code: " + err);
        } else {
          this.setState({ TVSHOWS: res.body.results });
        }
      }.bind(this));
  }

  render() {
    return (
      <div className="container">
        <h1>TV Shows</h1>
        <Router>
          <div>
           <Route exact path="/" render={(props) => (
             <SearchBar
               searchTerm={this.state.searchTerm}
               onFilterTextInput={this.handleFilterTextInput}
             />
           )}/>

           <Route exact path="/" render={(props) => (
            <PaginatedList
              items={this.state.TVSHOWS}
              searchTerm={this.state.searchTerm}
              currentPage={this.state.currentPage}
              itemsPerPage={this.state.itemsPerPage}
              onClick={this.handleClick}/>
          )}/>

           <Route exact path="/:id" render={({ match }) => {
             const item = this.state.TVSHOWS.find((item) => item.id === parseInt(match.params.id, 10));
             if (item) {
               return <ItemView match={match} {...item} />;
             }
             return (
               <ProgressBar
                 percent={5}
                 autoIncrement={true}
                 intervalTime={(Math.random() * 1000)}
                 spinner={false} className="spinner"/>
             );
           }}/>
          </div>
        </Router>
      </div>
    )
  }
}
export default App;

//<Route exact path="/:number" render={({ match }) => {
//<PaginatedList
//items={this.state.TVSHOWS}
//searchTerm={this.state.searchTerm}
//currentPage={this.state.currentPage}
//itemsPerPage={this.state.itemsPerPage}
//onClick={this.handleClick}
//match = {match}/>}/>
