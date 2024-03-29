import {
	FETCH_PRODUCTS_BEGIN,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_FAILURE,
    FILTER_SIZE,
    FILTER_PRICE
} from '../actions/productActions';

const defaultState = {
	filter: {
        sizes: ['small', 'medium', 'large'],
        priceRange: [0, 10000]
	},
	products: [],
	loading: false,
	error: null
};

export default function productReducer(state = defaultState, action) {
    const { filter } = state;

    let nextFilter = {...filter};
	switch (action.type) {
		case FETCH_PRODUCTS_BEGIN:
			// Mark the state as "loading" so we can show a spinner or something
			// Also, reset any errors. We're starting fresh.
			return {
				filter,
				loading: true,
				error: false,
				products: []
			};

		case FETCH_PRODUCTS_SUCCESS:
			// All done: set loading "false".
			// Also, replace the items with the ones from the server
			return {
				filter,
				error: false,
				loading: false,
				products: action.payload.products
			};

		case FETCH_PRODUCTS_FAILURE:
			// The request failed. It's done. So set loading to "false".
			// Save the error, so we can display it somewhere.
			// Since it failed, we don't have items to display anymore, so set `items` empty.
			//
			// This is all up to you and your app though:
			// maybe you want to keep the items around!
			// Do whatever seems right for your use case.
			return {
				filter,
				error: true,
				loading: false,
				products: []
			};
		case FILTER_SIZE:

			if (nextFilter.sizes.includes(action.size)) {
				nextFilter.sizes = nextFilter.sizes.filter(size => size !== action.size);
			} else {
				nextFilter.sizes.push(action.size);
			}
			return {
				...state,
				filter: nextFilter
				}
			;

            case FILTER_PRICE:
                nextFilter.priceRange= action.values;
                return {
                    ...state,
                    filter: nextFilter
                };

		default:
			// ALWAYS have a default case in a reducer
			return state;
	}
}
