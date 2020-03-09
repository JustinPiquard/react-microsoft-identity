import React, { useState } from 'react';
import axios from 'axios';


function Register() {
    const [user, setUser] = useState({
        username: "", 
        password: ""
    });

    const mergeUserState = partialState => 
    setUser(prevState => ({
        ...prevState,
        ...partialState
    }));

    function handleSubmit(event) {
        event.preventDefault();
        
        axios.post(`https://localhost:44364/Account/Register`, user)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }

 return (
     <form onSubmit={handleSubmit} >
        <h1>Register </h1>
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

export default Register