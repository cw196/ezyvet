import React from 'react'
import PropTypes from 'prop-types'

import ProductColumn from './ProductColumn';

const CartProductsList = (props) => {
    const {classes, cartProducts, removeProduct} = props;

    return (
        <div className={classes.base}>
            <table>
                <tbody>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Remove number</th>
                    <th></th>
                </tr>
                {
                    mapProductsObjToEle(cartProducts, (product) => (
                        <ProductColumn product={product} key={product.name} removeProduct={removeProduct}/>
                    ))
                }
                </tbody>
            </table>

        </div>
    )
};

CartProductsList.propTypes = {
    cartProducts: PropTypes.object,
    removeProduct: PropTypes.func
};

export default CartProductsList;

const mapProductsObjToEle = (productsObj, callBack) => {

    let arr = [];

    for(let key in productsObj) {
        arr.push(callBack(
            {
                name: key,
                quantity: productsObj[key].quantity,
                price: productsObj[key].price,
                totalPrice: productsObj[key].totalPrice,
            }
        ))
    }

    return arr;
};