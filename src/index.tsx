import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './app'
import { UserProvider } from './contexts/UserContext';

ReactDOM.render(
    <UserProvider>
        <App />
    </UserProvider>
    ,
    document.getElementById('root')
);