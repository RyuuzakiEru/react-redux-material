import rootReducer from '../reducers';
import * as productActions from '../actions/productActions';
import mockProductsFetch from '../__mocks__/fetchProducts.mock'

const initialState = {
  cart: { cartItems: [], cartOpen: false },
  productList: {
    filter: {
      sizes: ['small', 'medium', 'large'],
      priceRange: [0, 10000]
    },
    products: [],
    loading: true,
    error: null
  },
  routing: { locationBeforeTransitions: null }
};

describe('Main Reducer', () => {
  it('Should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({
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
    });
  });
});

describe('Product fetching reducer', () => {
  it('Fetch products begin should put loading to true', () => {
    expect(rootReducer(initialState, productActions.FETCH_PRODUCTS_BEGIN)).toEqual({
      cart: { cartItems: [], cartOpen: false },
      productList: {
        filter: {
          sizes: ['small', 'medium', 'large'],
          priceRange: [0, 10000]
        },
        products: [],
        loading: true,
        error: null
      },
      routing: { locationBeforeTransitions: null }
    });
  });

  it('Product fetch success should put productlist, loading and error to false', () => {
    expect(rootReducer(initialState, productActions.fetchProductsSuccess(mockProductsFetch))).toEqual({
      cart: { cartItems: [], cartOpen: false },
      productList: {
        filter: {
          sizes: ['small', 'medium', 'large'],
          priceRange: [0, 10000]
        },
        products: mockProductsFetch,
        loading: false,
        error: false
      },
      routing: { locationBeforeTransitions: null }
    });
  });

  it('Product fetch error puts loading false error to true', () => {
    expect(rootReducer(initialState, productActions.fetchProductsFailure(mockProductsFetch))).toEqual({
      cart: { cartItems: [], cartOpen: false },
      productList: {
        filter: {
          sizes: ['small', 'medium', 'large'],
          priceRange: [0, 10000]
        },
        products: mockProductsFetch,
        loading: false,
        error: false
      },
      routing: { locationBeforeTransitions: null }
    });
  });

});
