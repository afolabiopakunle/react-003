import React from 'react';
import './style.css';
import { Route, Switch } from 'react-router-dom';
import AllMeetUps from './pages/AllMeetUps';
import Favourites from './pages/Favourites';
import NewMeetUp from './pages/NewMeetUp';
import MainNavigation from './components/MainNavigation';
export default function App() {
  return (
    <div>
      <MainNavigation />
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
