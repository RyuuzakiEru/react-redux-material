import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import Toolbar from '@material-ui/core/Toolbar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import CartItem from './CartItem'

import { connect } from 'react-redux';

const useStyles = makeStyles({
	fullList: {
		width: '100%'
	},
	appBar: {
		top: 'auto',
		bottom: 0
	},
	shopButton: {
		position: 'absolute',
		zIndex: 1,
		top: -30,
		left: 0,
		right: 0,
		margin: '0 auto'
	},
	drawerPaper: {
		height: '80%'
	}
});

const ShoppingCartDrawer = props => {
	const classes = useStyles();

	const fullList = () => (
		<div role="presentation">
			<List className={classes.fullList}>
				<ListItem>
					<ListItemText>CART</ListItemText>
				</ListItem>

				{props.cartItems.map( cartItem  => (
                    cartItem.product &&	<CartItem key={cartItem.id} item={cartItem} />
                ))}


			</List>
		</div>
	);

	return (
		<div>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Fab
						color="secondary"
						aria-label="add"
						className={classes.shopButton}
						onClick={props.toggleCart}
					>
						<ShoppingCartIcon />
						<Drawer
							variant="persistent"
							anchor="bottom"
							open={props.cartOpen}
							classes={{
								paper: classes.drawerPaper
							}}
						>
							{fullList()}
						</Drawer>
					</Fab>
				</Toolbar>
			</AppBar>
		</div>
	);
};

const mapStateToProps = state => ({
	cartOpen: state.cart.cartOpen,
	cartItems: state.cart.cartItems
});

const mapDispatchToProps = dispatch => {
	return {
		toggleCart: () => dispatch({ type: 'TOGGLE_CART' })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShoppingCartDrawer);
