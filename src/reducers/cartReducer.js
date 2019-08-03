import {
	TOGGLE_CART,
	ADD_TO_CART,
	DECREASE_QTY,
	REMOVE_FROM_CART,
	OPEN_CART,
	CLOSE_CART
} from '../actions/cartActions';

const defaultState = {
	cartItems: [],
	cartOpen: false
};

export default function cartReducer(state = defaultState, action) {
	let nextCartItems = [...state.cartItems] || [];

	switch (action.type) {
		case TOGGLE_CART:
			return {
				...state,
				cartOpen: !state.cartOpen
			};

		case OPEN_CART:
			return {
				...state,
				cartOpen: true
			};

		case CLOSE_CART:
			return {
				...state,
				cartOpen: false
			};

		/** Adds or increases quantity if exist */
		case ADD_TO_CART:
            const { product } = action;

			let nextItemIndex = nextCartItems.findIndex(
				item => item && item.id === product._id
			);

			if (nextItemIndex !== -1) {
				nextCartItems[nextItemIndex].qty++;
			} else {
				nextCartItems.push({ id: product._id, product: product, qty: 1 });
			}

			return {
				...state,
				cartItems: [...nextCartItems]
			};

		case DECREASE_QTY:
			let itemToDecreaseOrRemoveIndex = nextCartItems.findIndex(
				item => item && item.id === action.id
			);

			if (itemToDecreaseOrRemoveIndex !== -1) {
				nextCartItems[itemToDecreaseOrRemoveIndex].qty--;
			}

			if (nextCartItems[itemToDecreaseOrRemoveIndex].qty < 1) {
				nextCartItems = nextCartItems.filter( item => item.id !== action.id)
			}

			return {
				...state,
				cartItems: [...nextCartItems]
			};

		case REMOVE_FROM_CART:
			nextCartItems = nextCartItems.filter(item => item.id !== action.id);
			return {
				...state,
				cartItems: [...nextCartItems]
			};

		default:
			return state;
	}
}
