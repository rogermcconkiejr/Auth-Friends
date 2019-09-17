import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class CreateFriend extends React.Component {
    state = {
      createFriend: {
        name: '',
        age: '',
        email: ''
      }
    };
  
    handleChange = e => {
      this.setState({
        createFriend: {
          ...this.state.createFriend,
          [e.target.name]: e.target.value
        }
      });
    };
  
    addFriend = e => {
      e.preventDefault();
      axiosWithAuth()
        .post('/friends', this.state.createFriend)
        .then(res => {
                console.log(res);
        })
        .catch(err => console.log(err));
    };
  
    render() {
      return (
        <div>
            <h1>Add a Friend!</h1>
          <form onSubmit={this.addFriend}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.createFriend.name}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="age"
              placeholder="Age"
              value={this.state.createFriend.age}
              onChange={this.handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.createFriend.email}
              onChange={this.handleChange}
            />
            <button>Submit</button>
          </form>
        </div>
      );
    }
  }
  
  export default CreateFriend;