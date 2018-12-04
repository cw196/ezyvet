import React from 'react';

import Shop from 'src/containers/Shop';
import Header from 'src/containers/Header';


export default (props) => (

    <div className={props.classes.base}>
        <Header/>
        <Shop/>
    </div>

)