import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ItemList from './List'
import ItemView from './Item'
import request from 'superagent';
import SearchBar from './Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TVSHOWS: [],
      searchTerm: '',
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }

  handleFilterTextInput(searchTerm) {
    this.setState({
      searchTerm: searchTerm
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
          console.log(res.body.results);
        }
      }.bind(this));
  }


  render() {
    return (
      <div className="container">
        <h1>TV Shows</h1>
        <SearchBar searchTerm={this.state.searchTerm} onFilterTextInput={this.handleFilterTextInput}/>
        <Router>
          <Switch>
           <Route exact path="/" render={(props) => (
             <ItemList {...props}
               items={this.state.TVSHOWS}
               searchTerm={this.state.searchTerm}
             />)}/>
             <Route path='/:id' render={({ match }) => {
               const item = this.state.TVSHOWS.find((item) => item.id === parseInt(match.params.id, 10));
               if (item) {
                 return <ItemView match={match} {...item} />;
               }
               return (<div>This item does not exist! </div>);
             }} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
