import { parsePrice } from '../lib/priceUtil';
import fetchProductsMock from '../__mocks__/fetchProducts.mock'
export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const FILTER_SIZE = 'FILTER_SIZE';
export const FILTER_PRICE = 'FILTER_PRICE';
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
function getProducts() {
  return new Promise ( (resolve,reject) => {
      resolve(fetchProductsMock)
  })
}

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export const toggleSize = size => ({
  type: FILTER_SIZE,
  size
});

export const filterPrice = priceRange => ({
  type: FILTER_PRICE,
  priceRange
});
export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return getProducts()
      .then(json => {
        const parsedProducts = json.products.map(product => ({
          ...product,
          priceNumber: product.onSale
            ? parsePrice(product.priceSale)
            : parsePrice(product.price)
        }));

        dispatch(fetchProductsSuccess(parsedProducts));
        return parsedProducts;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}
