import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import CreateFriend from './components/CreateFriend';

const StyledLink = styled(Link)`
    text-decoration: none;
    margin-right:50px;
    padding:5px;
    color: magenta;
    }
`;
function App() {
  axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
      console.log(response);
    })
  return (
    <Router>
    <div className="App">
      <div className="navBar">
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/protected">Friends</StyledLink>
      <StyledLink to="addfriend">Add a Friend</StyledLink>
      </div>
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
