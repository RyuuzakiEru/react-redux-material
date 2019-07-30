import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

import { OPEN_CART, CLOSE_CART } from '../actions/cartActions';

import CartItem from './CartItem';

import { connect } from 'react-redux';

const useStyles = makeStyles({
	fullList: {
		width: '100%'
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
		top: -60,
		left: 0,
		right: 0,
		margin: '0 auto'
	},
	closeButton: {
		position: 'fixed',
		top: '17%',
		zIndex: 1400,
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
	},
	cartCount: {
        margin: 2,
        padding: 2,
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
