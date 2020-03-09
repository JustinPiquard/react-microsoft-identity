import React, { useState } from 'react';
import axios from 'axios'
import UserInterface from '../interfaces/UserInterface'

let UserContext;
const {Provider, Consumer } = UserContext = React.createContext<UserInterface>({
    username: null,
    email :"",
    password:""
});

// interface UserInterface {
//     username : string,
//     password? : string,
//     email?: string
// }

function UserProvider(props) {
    const [user , setUser] = useState<UserInterface>({
        username: null,
        email :"",
        password:""
    });

    const mergeUserState = partialState => 
    setUser(prevState => ({
        ...prevState,
        ...partialState
    }));

    const handleSubmit = event => {
        event.preventDefault();
        console.log("test");
        //mergeUserState({username: "test"});
        console.log(user);
    //     axios.post(`https://localhost:44364/Account/Login`, user)
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
    };
    

    return <Provider value={user} >{props.children}</Provider>
};

export {UserProvider, Consumer as UserConsumer, UserContext};
