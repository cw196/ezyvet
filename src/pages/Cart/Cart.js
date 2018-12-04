import React from 'react';

import Cart from 'src/containers/Cart'
import Header from 'src/containers/Header';


export default (props) => (
    <div className={props.classes.base}>
        <Header/>
        <Cart/>
    </div>
)