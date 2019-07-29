import React, { Component } from 'react';
import ProductCard from './ProductCard';
import Loading from './Loading'
import { fetchProducts } from '../actions/productActions';
import { connect } from 'react-redux';

import Box from '@material-ui/core/Box';

class ProductList extends Component {


	componentDidMount() {
		this.props.dispatch(fetchProducts());
	}

	//onChangePage = pageOfItems => this.setState({ pageOfItems: pageOfItems });

	render() {
        const { products, loading, error } = this.props.productList;
        if(loading) return <Loading />

		if (products) {

			return (
				<Box mx={5}
					maxWidth="lg"
					display="flex"
                    justifyContent="flex-start"
                    alignItems="flex-start"
					flexWrap="wrap"
				>
					{products.map(product => (
							this.props.productList.filter.sizes.includes(product.size) && <ProductCard key={product._id} product={product} />

					))}
				</Box>
			);
		}
		if (loading) return <p>Loading</p>;
		if (error) return <p>Loading</p>;
	}
}

const mapStateToProps = state => ({
	productList: state.productList
});


export default connect(mapStateToProps)(ProductList);
