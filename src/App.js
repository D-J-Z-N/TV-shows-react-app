import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ItemList from './List'
import ItemView from './Item'

const TVSHOWS = [
  {
    id: 1,
    title: "Vikings",
    description: "The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth."
  },
  {
    id: 2,
    title: "Ripper Street",
    description: "The streets of Whitechapel are the haunt of Detective Inspector Edmund Reid and his team of officers, who aim to maintain law and order in a place once terrorized by Jack the Ripper."
  },
  {
    id: 3,
    title: "Peaky Blinders",
    description: "A gangster family epic set in 1919 Birmingham, England and centered on a gang and their fierce boss Tommy Shelby, who means to move up in the world."
  }
];

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
         <Route path="/home" render={(props) => (
           <ItemList {...props} items={TVSHOWS} />)}/>
           <Route path='/items/:id' render={({ match }) => {
             const item = TVSHOWS.find((item) => item.id === parseInt(match.params.id, 10));
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
export default App;
