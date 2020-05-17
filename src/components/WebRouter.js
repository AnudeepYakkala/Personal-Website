import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './home.js';
import Resume from './resume.js';


function WebRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={() => <Home></Home>} />
                <Route path='/resume' component={() => <Resume></Resume>} />
            </Switch>
        </BrowserRouter>
    )
}

export default WebRouter;