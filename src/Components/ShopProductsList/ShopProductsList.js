import React from 'react';
import PropTypes from 'prop-types';

import ProductColumn from './ProductColumn';

const ShopProductsList =  (props) => {
    const {products, addProduct, classes} = props;

    return (
        <div className={classes['base']}>
            {
                products.map(
                    (product, index) => {
                        return (
                            <ProductColumn product = {product} key = {index} addProduct = {addProduct}/>
                        )
                    }
                )
            }

        </div>
    )

};

ShopProductsList.propTypes = {
    products: PropTypes.array,
    addProduct: PropTypes.func
};

export default ShopProductsList;

