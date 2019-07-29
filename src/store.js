import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import root reducer

import rootReducer from './reducers/index';

const defaultState = {
	productList: {
		filter: {
			sizes: ['small', 'medium', 'large'],
			priceRange: [0, 10000]
		},
		products: [],
		loading: false,
		error: null
	},
	cart: {
		cartItems: [],
		cartOpen: false
	}
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
    defaultState,



    composeEnhancers(
		applyMiddleware(thunk)
	)
);

if (module.hot) {
	module.hot.accept('./reducers', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;
