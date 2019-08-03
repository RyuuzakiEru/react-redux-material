import rootReducer from '../reducers';
import * as types from '../actions/productActions';

describe('Main Reducer', () => {
  it('Should return the initial state', () => {
    expect(
      rootReducer(undefined, {})).toEqual({
        cart: { cartItems: [], cartOpen: false },
        productList: {
          filter: {
            sizes: ['small', 'medium', 'large'],
            priceRange: [0, 10000]
          },
          products: [],
          loading: false,
          error: null
        },
        routing: { locationBeforeTransitions: null }
      })
  });

});
