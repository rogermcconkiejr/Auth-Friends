import React, { useState, useEffect} from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = props => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
      axiosWithAuth()
        .get("/friends")
        .then(response => {
          console.log("response", response);
          setFriends(response.data);
        })
        .catch(error => console.log("get error", error));
    }, []);
  
    return (
      <div>
        <h1>Friends</h1>
        {friends.map(friend => (
          <div key={friend.id}> 
          {friend.name} <br></br> 
          Age: {friend.age} <br></br>
          Email: {friend.email} <br></br>

          </div>
        ))}
      </div>
    );
  };
  
  export default FriendsList;
  