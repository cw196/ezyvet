import constant from 'src/constants';

const {actionType, localStorageKey} = constant;

export const cartAction = {
    addProductToCart,
    removeProductFromCart
};

function addProductToCart (product) {
    return (dispatch, getState) => {

        let cartProducts = getState().cartProducts;

        if (cartProducts.hasOwnProperty(product.name)) {

            // update the product's quantity and total price
            cartProducts[product.name].quantity +=  product.quantity;
            cartProducts[product.name].totalPrice = parseFloat((cartProducts[product.name].price * cartProducts[product.name].quantity).toFixed(2));
        } else {

            // add a new product to state
            cartProducts[product.name] = {
                price: product.price,
                quantity: product.quantity,
                totalPrice: parseFloat((product.price * product.quantity).toFixed(2))
            }
        }

        localStorage.setItem(localStorageKey.cart, JSON.stringify(cartProducts));

        dispatch({
            type: actionType.UPDATE_CART_PRODUCT_SUCCESS,
            data: cartProducts
        })
    }
}

function removeProductFromCart(productName, quantity) {
    return (dispatch, getState) => {
        let cartProducts = getState().cartProducts;

        if (cartProducts.hasOwnProperty(productName) && cartProducts[productName].quantity - quantity >=0) {
            if (cartProducts[productName].quantity - quantity > 0) {

                // minus quantity and re-calculate price
                cartProducts[productName].quantity -=  quantity;
                cartProducts[productName].totalPrice = parseFloat((cartProducts[productName].price * cartProducts[productName].quantity).toFixed(2));

            } else {

                // delete target product
                delete cartProducts[productName];
            }
        } else {
            dispatch(fail())
        }

        localStorage.setItem(localStorageKey.cart, JSON.stringify(cartProducts));

        dispatch(success(cartProducts));
    };



    function success(data) {
        return {
            type: actionType.UPDATE_CART_PRODUCT_SUCCESS,
            data,
        }
    }

    function fail() {
        return {
            type: actionType.UPDATE_CART_PRODUCT_FAIL
        }
    }
}