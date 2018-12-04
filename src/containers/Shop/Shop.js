import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {cartAction} from "../../redux/actions";

import ShopProductsList from 'src/Components/ShopProductsList';

const products = [
    {
        name: "Sledgehammer",
        price: 125.75
    },
    {
        name: "Axe",
        price: 190.50
    },
    {
        name: "Bandsaw",
        price: 562.13
    }, {
        name: "Chisel",
        price: 12.9
    },
    {
        name: "Hacksaw",
        price: 18.45
    }
];

const Shop =  (props) => {
    const addProductToCart = (productObj) => {
        props.addProductToCart(productObj);
    };

    return (
        <div className={props.classes["base"]}>
            <h1>Products:</h1>
            <ShopProductsList products={products} addProduct={addProductToCart}/>
        </div>
    )
};


Shop.propTypes = {
    addProductToCart: PropTypes.func
};


const mapDispatchToProps = (dispatch) => {
    return {
        addProductToCart: (productObj) => {
            dispatch(cartAction.addProductToCart(productObj))
        }
    }
};

export default connect(null, mapDispatchToProps)(Shop)