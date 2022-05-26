import React from "react";
import "./style.css";
import {Route} from 'react-router-dom';
import AllMeetUps from './pages/AllMeetUps';

export default function App() {
  return (
    
      <Route path='/'>
          <AllMeetUps />
        </Route>
 
  );
}
