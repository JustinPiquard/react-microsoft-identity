import * as React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {UserContext} from './contexts/UserContext'
import Home from './scenes/home';
import Login from './scenes/login';
import Register from './scenes/register';

function Links() {
    return (
        <nav>
            {/* <Link to="/" style={{padding: 10}}>Login</Link> */}
            <Link to="/home" style={{padding: 10}}>Home</Link>
            <Link to="/register" style={{padding: 10}}>Register</Link>
        </nav>
    )
}

function App() {
    // const [currentUser, setCurrentUser] = useState({
    //     username: null
    // });
const { user } = React.useContext(UserContext);
console.log(user);
 return (
         <Router>
             {
             user ?
             
             (
                <div>
                    <p>user</p>
                    <Links />
                    <Route path="/home" component={Home} />
                    <Route path="/register" component={Register} />
                </div>
             ) : (
                <div>
                    <p>no user</p>
                    <Route exact path="/" component={Login} />
                </div>
             )
}
        </Router>
 )
}

export default App