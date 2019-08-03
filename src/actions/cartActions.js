export const TOGGLE_CART = 'TOGGLE_CART';
export const OPEN_CART = ' OPEN_CART';
export const CLOSE_CART = ' CLOSE_CART';
export const ADD_TO_CART = 'ADD_TO_CART';

export const DECREASE_QTY = 'DECREASE_QTY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const toggleCart = () => ({
  type: TOGGLE_CART,
});

export const openCart = () => ({
  type: OPEN_CART,
});

export const closeCart = () => ({
  type: CLOSE_CART,
});
// adds or creates
export const addProduct = product => ({
  type: ADD_TO_CART,
  product,
});
export const decreaseQty = id => ({
  type: DECREASE_QTY,
  id,
});

export const removeProduct = id => ({
  type: REMOVE_FROM_CART,
  id,
});
