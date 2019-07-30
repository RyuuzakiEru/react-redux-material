import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';

import { formatPrice } from '../lib/priceUtil';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { fetchProducts } from '../actions/productActions';
import { connect } from 'react-redux';

const styles = theme => ({
    container: {
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
    },
	card: {
		maxWidth: 600,
		margin: 8,
		display: 'flex',
		flexFlow: 'column',
        justifyContent: 'flex-start',
        marginBottom:40,

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
        position:'absolute',
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
})
class ProductDetail extends Component {

    constructor(props) {
        super(props);
        // bind "this" to handleAddToCart scope
        this.handleAddToCart = this.handleAddToCart.bind(this);
      }

	componentDidMount() {
		this.props.fetchProducts();
	}

    handleAddToCart() {
        this.props.addToCart(this.props.product)
    }

	render() {
        const { classes } = this.props;
		const { product } = this.props;

		if (product) {
			return (
				<Container maxWidth="lg" className={classes.container}>
					<Link to="/" className={classes.link}>
						<ArrowBackIosIcon> {product.name} </ArrowBackIosIcon>
					</Link>
					<Card className={classes.card}>
                        <div className="title">
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
                            <div className="media">

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
							/></div>

						<div className={classes.bottom}>
							<CardContent>
								<Typography variant="body2" color="textSecondary" component="p">
									{product.description}
								</Typography>
							</CardContent>
							<CardActions>
								<IconButton aria-label="add to cart" onClick={this.handleAddToCart}>
									<AddShoppingCartIcon /> Add to Cart
								</IconButton>
							</CardActions>
						</div>
					</Card>
				</Container>
			);
		} else {
			return (
				<Container maxWidth="lg">
					<Link to="/" className={classes.link}>
						<ArrowBackIosIcon />
					</Link>
					<Typography component="h1">
						No such item {this.props.match.params.id}
					</Typography>
				</Container>
			);
		}
	}
}

const mapStateToProps = (state, ownProps) => ({
	productList: state.productList,
	product: state.productList.products.filter(
		product => product._id === ownProps.match.params.id
	)[0]
});

const mapDispatchToProps = dispatch => {
	return {
        addToCart: product => dispatch({ type: 'ADD_TO_CART', product }),
        fetchProducts: () => dispatch(fetchProducts())
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ProductDetail));
