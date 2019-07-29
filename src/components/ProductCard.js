import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


import {formatPrice} from '../lib/priceUtil'
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
	card: {
		maxWidth: 300,
		marginRight: 20,
		marginLeft: 20
	},
	media: {
        height: 0,
        marginTop: 10,
		paddingTop: '56.25%' // 16:9
	},
	sale: {
		position: 'absolute',
		paddingLeft: 10,
		paddingTop: 15
	},
	size: {
		width: 20,
        float: 'right',
        padding:4,
        marginTop: 5,
        textAlign: 'center',
        textTransform: 'uppercase',
        background: "url('/img/tshirt.svg') no-repeat",
	}
}));

function ProductCard(props) {
	//console.log(props);
	const classes = useStyles();
	const { product } = props;

	const handleAddToCart = () => {
		props.addToCart(props.product);
	};
	return (
		<Card className={classes.card}>
			<Typography
				className={classes.size}
				color="textSecondary"
				component="strong"
			>
				{product.size.substring(0,1)}
			</Typography>
			<Typography color="textPrimary" component="h2">
				{product.name}
			</Typography>

			<Typography color="textPrimary" component="h3">
				{formatPrice(product.priceNumber)}
			</Typography>
			{product.onSale && (
				<img
					className={classes.sale}
					src="/img/discount.svg"
					alt="On Sale"
					height="50"
					width="50"
				/>
			)}
			<CardMedia
				className={classes.media}
				image={product.picture}
				title={product.name}
			/>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{product.description}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to cart" onClick={handleAddToCart}>
					<AddShoppingCartIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}

const mapDispatchToProps = dispatch => {
	return {
		addToCart: product => dispatch({ type: 'ADD_TO_CART', product })
	};
};

export default connect(
	null,
	mapDispatchToProps
)(ProductCard);
