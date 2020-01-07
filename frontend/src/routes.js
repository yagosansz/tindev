import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';

function Routes() {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Login} />
            <Route path='/main' component={Main} />
        </BrowserRouter>
    );
}

export default Routes;