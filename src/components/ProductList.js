import React, { Component } from 'react';
import ProductCard from './ProductCard';
import Loading from './Loading';
import { fetchProducts } from '../actions/productActions';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import Navigation from './Navigation';
import Container from '@material-ui/core/Container';

const styles = theme => ({
	container: {
		display: 'flex',
        alignItems: 'stretch',
        flexWrap: 'wrap',
		justifyContent: 'space-evenly'
	}
});
class ProductList extends Component {
	componentDidMount() {
		this.props.dispatch(fetchProducts());
	}

	//onChangePage = pageOfItems => this.setState({ pageOfItems: pageOfItems });

	render() {
		const { classes } = this.props;
		const { products, loading, error } = this.props.productList;
		if (loading) return <Loading />;

		if (products) {
			return (
				<>
					<Navigation />
					<Container className={classes.container}>
						{products.map(
							product =>
								this.props.productList.filter.sizes.includes(product.size) &&
								product.priceNumber >
									this.props.productList.filter.priceRange[0] &&
								product.priceNumber <
									this.props.productList.filter.priceRange[1] && (
									<ProductCard key={product._id} product={product} />
								)
						)}
					</Container>
				</>
			);
		}
		if (loading) return <p>Loading</p>;
		if (error) return <p>Loading</p>;
	}
}

const mapStateToProps = state => ({
	productList: state.productList
});

export default connect(mapStateToProps)(withStyles(styles)(ProductList));
