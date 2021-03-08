import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import Nomatch from './Components/NoMatch/Nomatch';
import FriendDetails from './Components/FriendDteails/FriendDetails'

function App() {
 
  return (
    <Router>
      <Switch>

        <Route path ='/home'>
          <Home/>
        </Route>
        <Route path ='/friend/:friendId'>
          <FriendDetails/>
        </Route>


        <Route exact path ='/'>
          <Home/>
        </Route>

        <Route path ='*'>
          <Nomatch/>
        </Route>

      </Switch>
    </Router>
   
  );
  
}

export default App;
