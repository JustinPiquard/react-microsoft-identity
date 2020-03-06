import * as React from 'react';
import { useState } from 'react';
import axios from 'axios'

let UserContext;
const {Provider, Consumer } = UserContext = React.createContext({});

function UserProvider(props) {
    const [user, setUser] = useState({
        username: null,
        email :""
    });

    const mergeUserState = partialState => 
    setUser(prevState => ({
        ...prevState,
        ...partialState
    }));

    const handleSubmit = event => {
        event.preventDefault();
        console.log("test");
        mergeUserState({username: "test"});
        console.log(user);
    //     axios.post(`https://localhost:44364/Account/Login`, user)
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
    };
    

    return <Provider value={{
        user: {user}
    }} >{props.children}</Provider>
};

export {UserProvider, Consumer as UserConsumer, UserContext};
