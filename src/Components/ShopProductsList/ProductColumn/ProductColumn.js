import React from 'react';
import PropTypes from 'prop-types';

import Counter from '../Counter';

class ProductColumn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            quantity: 0
        };

        this.updateQuantity = this.updateQuantity.bind(this);
        this.addProductAction = this.addProductAction.bind(this);
    }

    updateQuantity (quantity) {
        this.setState({
            quantity
        });
    }

    addProductAction() {
        let {addProduct, product} = this.props;

        if (this.state.quantity === 0) {
            return
        }

        addProduct({
            name: product.name,
            price: product.price,
            quantity: this.state.quantity
        })
    }

    render () {
        const {product, classes} = this.props;

        return (
            <div className={classes.base}>
                <div>
                    {
                        product.name
                    }
                </div>
                <div>
                    ${
                        product.price
                    }
                </div>
                <Counter updateCount={this.updateQuantity}/>
                <div onClick={this.addProductAction}>
                    Add to Cart
                </div>
            </div>
        )
    }

}

ProductColumn.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number
    }),
    addProduct: PropTypes.func

};

export default ProductColumn;