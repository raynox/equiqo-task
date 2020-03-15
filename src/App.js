import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UsersList from './users/components/UsersList';
import UserDetails from './users/components/UserDetails';
import SearchUsers from './users/components/SearchUsers';

function App() {
  return (
    <Router>
      <div className="flex items-center mt1 flex-column mh100vh">
        <h1 className="block">Jakub Saleniuk IT</h1>
        <p className="block">EQUIQO task</p>

        <Switch>
          <Route path="/users/:username">
            <UserDetails />
          </Route>
          <Route path="/search">
            <SearchUsers />
          </Route>
          <Route path="/">
            <UsersList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
