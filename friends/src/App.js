import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Login from './components/Login';
import FriendsList from './components/FriendsList';

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

       <Switch>
         <Route exact path='/protected' component={FriendsList} />
         <Route path="/login" component={Login} />
         <Route component={Login} />
       </Switch>
    </div>
    </Router>
  );
}

export default App;
