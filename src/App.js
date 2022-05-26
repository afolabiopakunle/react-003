import React from 'react';
import './style.css';
import { Route, Switch } from 'react-router-dom';
import AllMeetUps from './pages/AllMeetUps';
import Favourites from './pages/Favourites';
import NewMeetUp from './pages/NewMeetUp';

export default function App() {
  return (
    <div>
      <a href="/">Home</a>
      <a href="/favourites">Favourites</a>
      <a href="/new-meetup">New Meetup</a>
      <Switch>
      <Route path="/" exact>
        <AllMeetUps />
      </Route>
      <Route path="/favourites">
        <Favourites />
      </Route>
      <Route path="/new-meetup">
        <NewMeetUp />
      </Route>
      </Switch>
    </div>
  );
}
