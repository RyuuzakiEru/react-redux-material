import { TOGGLE_CART, ADD_TO_CART } from '../actions/cartActions';

const defaultState = {
	cartItems: [],
	cartOpen: false
};



export default function cartReducer(state = defaultState, action) {
	switch (action.type) {
		case TOGGLE_CART:
			return {
				...state,
				cartOpen: !state.cartOpen
			};
        case ADD_TO_CART:

            const {product} = action;

            let prevCartItems = [...state.cartItems];
            let nextItem = prevCartItems.find(item => item.id === product._id);
            let nextCartItems = [...prevCartItems]

            if (nextItem) {
                nextItem.qty += 1;
                nextCartItems = prevCartItems.filter(item => item.id !== product._id)
            }else {
                nextItem = {id: product._id, product: product, qty:1}
            }

			return {
                ...state,
                cartItems: [...nextCartItems , nextItem]
			};

		default:
			return state;
	}
}
