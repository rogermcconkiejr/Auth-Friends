import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const Login = (props) => {
    const [credentials, setCredentials] = useState({})
    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/login', credentials) 
            .then(res => {
                localStorage.setItem('token', res.data.token);
                props.history.push('/dashboard');
            })
        }
    
        // const handleChange = e => {
        //     setCredentials: {
        //       ...credentials,
        //       [e.target.name]: e.target.value,
        //     }
        // }

    return (
        <div className="loginWrapper">

            <h1>Login</h1>
            <form onSubmit={login}>
                <input 
                type="text"
                name="username"
                placeholder="username"
                value={credentials.username}
                // onChange={this.handleChange}
                />
                <input
                type="password"
                name="password"
                placeholder="password"
                value={credentials.password}
                // onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    );
};