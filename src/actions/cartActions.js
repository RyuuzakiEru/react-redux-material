export const TOGGLE_CART = 'TOGGLE_CART';
export const ADD_TO_CART = 'ADD_TO_CART';

export const toggleCart = () => {
    return {
        type: TOGGLE_CART
    }
}

export const addProduct = product => {
    return {
        type: ADD_TO_CART,
        product
    }
}
