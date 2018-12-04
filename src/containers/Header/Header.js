import React from 'react';
import {Link} from 'react-router-dom'

import constant from 'src/constants'
const {routeURLs} = constant;

export default (props) => (
    <div className={props.classes.base}>
        <Link to={routeURLs.home}> Home </Link>
        <Link to={routeURLs.cart}> Cart </Link>
    </div>
)