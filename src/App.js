import React from 'react';
import './App.css';
import GoogleList from './components/GoogleList';
import UserDetails from './components/UserDetails';
import Image from './components/Image';
import { Switch, Route, Link, withRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <div className='navigation'>
        <Link to='/' id='home'>
          Home
        </Link>

        <Link to='/google-list' id='google-list'>
          List
        </Link>

        <Link to='/user-details' id='user-details'>
          User
        </Link>
      </div>

      {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
      <Switch>
        <Route path='/google-list'>
          <GoogleList />
        </Route>
        <Route path='/user-details'>
          <UserDetails />
        </Route>
        <Route path='/'>
          <Image />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
