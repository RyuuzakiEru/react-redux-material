import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';

import { formatPrice } from '../lib/priceUtil';
import { connect } from 'react-redux';



const useStyles = makeStyles(theme => ({
	card: {
		maxWidth: 300,
		margin: 8,
		display: 'flex',
		flexFlow: 'column',
        justifyContent: 'flex-start',
	},
	title: {
		minHeight: 30,
		textTransform: 'uppercase'
    },
    link: {
        textDecoration: 'none',
    },
	media: {
		height: 0,
		marginTop: 10,
		paddingTop: '56.25%' // 16:9
	},
	sale: {
		position: 'absolute',
		marginLeft: 10,
		paddingTop: 10
	},
	size: {
		width: 30,
		float: 'right',
		padding: 3,
		marginTop: 3,
		textAlign: 'center',
		textTransform: 'uppercase',
		background: "url('/img/tshirt.svg') no-repeat"
	},
	bottom: {
		display: 'flex',
		flexFlow: 'column',
		flexBasis: '50%',
		justifyContent: 'space-between'
	},
	salePrice: {
		color: 'red',
		textDecoration: 'line-through',
        marginLeft: 5,
        fontSize: '0.9em'
    	}
}));

const ProductCard = (props) => {

	const classes = useStyles();
	const { product } = props;

	const handleAddToCart = () => {
		props.addToCart(props.product);
    };
    
	return (
		<Card className={classes.card}>
			<Link to={`/item/${product._id}`} className={classes.link}>
				<div className={classes.title}>
					<Typography
						className={classes.size}
						color="textSecondary"
						component="strong"
					>
						{product.size.substring(0, 1)}
					</Typography>
					<Typography color="textPrimary" component="h2">
						{product.name}
					</Typography>

					<Typography color="textPrimary" component="strong">
						{formatPrice(product.priceNumber)}
					</Typography>
					{product.onSale && (
						<Typography className={classes.salePrice} component="span">
							{product.price}
						</Typography>
					)}
				</div>
				<div>
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
				</div>
			</Link>
			<div className={classes.bottom}>
				<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						{product.description}
					</Typography>
				</CardContent>
				<CardActions>
					<IconButton aria-label="add to cart" onClick={handleAddToCart}>
						<AddShoppingCartIcon />
					</IconButton>
				</CardActions>
			</div>
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
