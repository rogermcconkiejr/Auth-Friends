import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import CreateFriend from './components/CreateFriend';

function App() {
  axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
      console.log(response);
    })
  return (
    <Router>
    <div className="App">
      
      <Link to="/login">Login</Link>
      <Link to="/protected">Protected Page</Link>
      <Link to="addfriend">Add a friend</Link>

       <Switch>
         <PrivateRoute exact path='/protected' component={FriendsList} />
         <PrivateRoute exact path='/addfriend' component={CreateFriend} />
         <Route path="/login" component={Login} />
         <Route component={Login} />
       </Switch>
    </div>
    </Router>
  );
}

export default App;
