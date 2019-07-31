import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import { formatPrice } from '../lib/priceUtil';
import {
	ADD_TO_CART,
	DECREASE_QTY,
	REMOVE_FROM_CART
} from '../actions/cartActions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	item: {
		width: '100%',
		paddingTop: 40,
		paddingBottom: 40
	}
});

const OrderItem = props => {
	const classes = useStyles();
	const { item } = props;
	const { product } = item;

	const handleRemoveFromCart = () => {
		props.removeFromCart(item.id);
	};

	const handleRemoveOneFromCart = () => {
		props.removeOneFromCart(item.id);
	};

	const handleAddToCart = () => {
		props.addToCart(product);
	};

	return (
		<ListItem className={classes.item}>
			<ListItemAvatar>
				<Avatar>
					<img src={product.picture} alt={product.name} />
				</Avatar>
			</ListItemAvatar>
			<ListItemText
				primary={product.name}
				secondary={`${formatPrice(product.priceNumber)} each `}
			/>
			<ListItemText
				primary={`Size: ${product.size.toUpperCase()}`}
				secondary={`Color: ${product.color.toUpperCase()}`}
			/>
			<ListItemText
				primary={`${props.qty} units`}
				secondary={`x ${formatPrice(product.priceNumber)} = ${formatPrice(
					product.priceNumber * props.qty
				)}`}
			/>
			<ListItemSecondaryAction>
				<IconButton onClick={handleAddToCart}>
					<AddCircleOutlineIcon />
				</IconButton>

				<Typography component="span" />
				<IconButton onClick={handleRemoveOneFromCart}>
					<RemoveCircleOutlineIcon />
				</IconButton>
				<IconButton
					edge="end"
					aria-label="delete"
					onClick={handleRemoveFromCart}
				>
					<DeleteIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
};
const mapStateToProps = (state, ownProps) => {
	return {
		item: state.cart.cartItems.find(item => item.id === ownProps.item.id),
		qty: state.cart.cartItems.find(item => item.id === ownProps.item.id).qty
	};
};

const mapDispatchToProps = dispatch => {
	return {
		removeFromCart: id => dispatch({ type: REMOVE_FROM_CART, id }),
		removeOneFromCart: id => dispatch({ type: DECREASE_QTY, id }),
		addToCart: product => dispatch({ type: ADD_TO_CART, product })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderItem);
