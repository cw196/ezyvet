import React from 'react';
import {Route, Switch} from "react-router-dom";

import constants from 'src/constants';
const {routeURLs} = constants;

import Home from 'src/pages/Home';
import Cart from 'src/pages/Cart';

export default (
    <Switch>
        <Route
            exact
            path= {routeURLs.home}
            component= {Home}
        />
        <Route
            exact
            path = {routeURLs.cart}
            component={Cart}
        />
    </Switch>
)