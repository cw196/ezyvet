import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {cartAction} from "../../redux/actions";
import {calculateTotalPrice} from "../../utils/functions";

import CartProductsList from 'src/Components/CartProductsList'

const Cart = (props) => {

    const {classes, cartProducts, removeProduct} = props;

    return (
        <div className={classes.base}>
            <h1>Cart:</h1>

            <CartProductsList cartProducts={cartProducts} removeProduct={removeProduct}/>

            <div>
                Total Price: {calculateTotalPrice(cartProducts)}
            </div>
        </div>
    )

};

Cart.propTypes = {
    cartProducts: PropTypes.object
};

const mapStateToProps = (state) => ({
    cartProducts: state.cartProducts
});

const mapDispatchToProps = (dispatch) => ({
    removeProduct: (productName, quantity) => {
        dispatch(cartAction.removeProductFromCart(productName, quantity))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);