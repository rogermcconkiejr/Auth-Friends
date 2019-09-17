import React, { useState, useEffect} from 'react';
import styled from 'styled-components';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendWrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
`;
const FriendBox = styled.div`
border: 1px solid magenta;
width:28vw;
padding:5px;
margin:5px;
background-color:black;
color:whitesmoke;
`;

const FriendsList = () => {
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
      <FriendWrapper>  
        {friends.map(friend => (
          <FriendBox key={friend.id}> 
          {friend.name} <br></br> 
          Age: {friend.age} <br></br>
          Email: {friend.email} <br></br>

          </FriendBox>
        ))}
      </FriendWrapper>
    </div>
    );
  };
  
  export default FriendsList;
  