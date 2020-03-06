import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {UserContext} from '../contexts/UserContext'

function Login() {
    // const [user, setUser] = useState({
    //     username: "", 
    //     password: ""
    // });

    // const mergeUserState = partialState => 
    // setUser(prevState => ({
    //     ...prevState,
    //     ...partialState
    // }));

    // function handleSubmit(event) {
    //     event.preventDefault();
        
    //     axios.post(`https://localhost:44364/Account/Login`, user)
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
    // }
const { user, handleSubmit, mergeUserState } = React.useContext(UserContext);

 return (
    <form onSubmit={handleSubmit} >
    <h1>Login </h1>
    <input 
        type='text' 
        name="username" 
        value={user.username}
        placeholder="UserName" 
        onChange={e => mergeUserState({ username: e.target.value})}
    />
    <br/>
    <input 
        type='text' 
        name="password" 
        value={user.password}
        placeholder="Password"
        onChange={e => mergeUserState({ password: e.target.value})}
    />
    <br/>
    <button type="submit">Submit</button>
 </form>
 )
}

export default Login