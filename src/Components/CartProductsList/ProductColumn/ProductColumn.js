import React from 'react';
import PropTypes from 'prop-types';

class ProductColumn extends React.Component {

    constructor(props) {
        super(props);

        this.removeAction= this.removeAction.bind(this);
    }

    removeAction() {
        this.props.removeProduct(this.props.product.name, parseInt(this.selectEle.value))
    }

    render() {
        const {product} = this.props;

        return (
            <tr>
                <td>
                    {
                        product.name
                    }
                </td>
                <td>
                    {
                        product.price
                    }
                </td>
                <td>
                    {
                        product.quantity
                    }
                </td>
                <td>
                    {
                        product.totalPrice
                    }
                </td>
                <td>
                    <span>remove</span>
                    <select ref = { selectEle => this.selectEle = selectEle} >
                        {
                            generateOptionByNum(product.quantity, (num) => (
                                <option key = {num} >{num}</option>
                            ))
                        }
                    </select>
                    <span>product(s)</span>
                </td>
                <td>
                    <a onClick={this.removeAction}>Remove</a>
                </td>
            </tr>

        )
    }

}

ProductColumn.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number,
        totalPrice: PropTypes.number
    }),
    removeProduct: PropTypes.func
};

export default ProductColumn;

const generateOptionByNum = (quantity, callback) => {
    let arr = [];

    for(let i = 0; i < quantity; i ++) {
        arr.push(
            callback(i+1)
        )
    }

    return arr;
};

