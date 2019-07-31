import React from 'react';
import { withRouter } from 'react-router-dom';
import { Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import { formatPrice } from '../lib/priceUtil';
import { OPEN_CART, CLOSE_CART } from '../actions/cartActions';

import CartItem from './CartItem';

import { connect } from 'react-redux';

const useStyles = makeStyles({
	fullList: {
		width: '100%',
		paddingTop: 40,
		paddingBottom: 40
	},
	appBar: {
		top: 'auto',
		bottom: 0,
		height: 0,
		boxShadow: 'none',
		backgroundColor: 'transparent'
	},
	shopButton: {
		zIndex: 999,
		top: -80,
		left: 0,
		right: 0,
		margin: '0 auto'
	},
	closeButton: {
		zIndex: 2000,
		position: 'fixed',
		alignSelf: 'center'
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
	},
	drawerBottom: {
		position: 'fixed',
		bottom: 30,
		alignSelf: 'center'
	},
	cartCount: {
		margin: 2,
		padding: 2
	}
});

const ShoppingCartDrawer = props => {
	const classes = useStyles();
    const { history } = props;
	const { location } = props;

	const fullList = () => (
		<Container maxWidth="md">
			<List className={classes.fullList}>
				{props.cartItems.map(
					cartItem =>
						cartItem && <CartItem key={cartItem.id} id={cartItem.id} />
				)}
			</List>
		</Container>
	);

	const handleCheckout = e => {
		e.preventDefault();
		history.push('/checkout');
	};

    // hide shopping cart on checkout but keep it inside Router context
	if (location.pathname.match('/checkout') || props.cartItems.length < 1) {
		return null;
	}
	return (
		<Fade in={props.cartItems.length > 0}>
			<AppBar className={classes.appBar}>
				<Toolbar>
					<Fab
						color="secondary"
						aria-label="open"
						className={classes.shopButton}
						onClick={props.openCart}
					>
						<Badge
							className={classes.cartCount}
							color="primary"
							badgeContent={props.cartItems.reduce(
								(total, item) => total + item.qty,
								0
							)}
						>
							<ShoppingCartIcon />
						</Badge>
					</Fab>
					<Drawer
						variant="persistent"
						elevation={16}
						anchor="bottom"
						open={props.cartOpen}
						classes={{
							paper: classes.drawerPaper
						}}
					>
						<Fab
							aria-label="close"
							color="secondary"
							className={classes.closeButton}
							onClick={props.closeCart}
						>
							<CloseIcon fontSize={'large'} />
						</Fab>

						{fullList()}
						{props.cartItems.length > 0 && (
							<div className={classes.drawerBottom}>
								<Fab
									variant="extended"
									aria-label="checkout"
									color="secondary"
									className={classes.checkout}
									onClick={handleCheckout}
								>
									Checkout
									{` ` +
										formatPrice(
											props.cartItems.reduce(
												(total, item) =>
													total + item.qty * item.product.priceNumber,
												0
											)
										)}
									<ArrowRightIcon fontSize={'large'} />
								</Fab>
							</div>
						)}
					</Drawer>
				</Toolbar>
			</AppBar>
		</Fade>
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

//In order to be able to Push to Router, we create withrouter HO component
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(ShoppingCartDrawer));
