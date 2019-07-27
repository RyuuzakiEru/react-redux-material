import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import root reducer

import rootReducer from './reducers/index';

const defaultState = {
	productList: {
		products: [],
		loading: false,
		error: null
	},
	cart: {
		cartItems: [],
		cartOpen: false
	}
};

const store = createStore(
	rootReducer,
	defaultState,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

if (module.hot) {
	module.hot.accept('./reducers', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;
