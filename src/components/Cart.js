import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { OPEN_CART, CLOSE_CART } from '../actions/cartActions';

import CartItem from './CartItem';

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
		zIndex: 999,
		top: -30,
		left: 0,
		right: 0,
		margin: '0 auto'
	},
	closeButton: {
		position: 'absolute',
		zIndex: 1,
		top: -30,
		left: 0,
		right: 0,
		margin: '0 auto'
	},
	drawerHeader: {
        display: 'flex',
        flexDirection: 'column',
		alignItems: 'center',
		padding: '0 8px',
		justifyContent: 'flex-end'
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
				{props.cartItems.map(
					cartItem =>
						cartItem && <CartItem key={cartItem.id} id={cartItem.id} />
				)}
			</List>
		</div>
	);

	return (
		<div>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="secondary"
						aria-label="open"
						className={classes.shopButton}
						onClick={props.openCart}
					>
						<ShoppingCartIcon />
					</IconButton>
					<Drawer
                        variant="persistent"
                        elevation={16}
						anchor="bottom"
						open={props.cartOpen}
						classes={{
							paper: classes.drawerPaper
						}}
					>
						<div className={classes.drawerHeader}>
							<Typography variant="h4" gutterBottom>
								CART
							</Typography>
							<IconButton onClick={props.closeCart}>
								<CancelIcon fontSize={'large'} />
							</IconButton>
						</div>
						{fullList()}
					</Drawer>
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
		openCart: () => dispatch({ type: OPEN_CART }),
		closeCart: () => dispatch({ type: CLOSE_CART })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShoppingCartDrawer);
