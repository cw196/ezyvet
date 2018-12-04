import constant from 'src/constants';
const {actionType, localStorageKey} = constant;

const localData = localStorage.getItem(localStorageKey.cart);

const defaultState = localData ? JSON.parse(localData) : {};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.UPDATE_CART_PRODUCT_SUCCESS:
            return {...state, ...(action.data)};
        default:
            return {...state};
    }
}