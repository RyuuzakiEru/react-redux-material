import React, { Component } from 'react';
import ProductCard from './ProductCard';
import Loading from './Loading'
import { fetchProducts } from '../actions/productActions';
import { connect } from 'react-redux';

import Box from '@material-ui/core/Box';

class ProductDetail extends Component {


	componentDidMount() {
		this.props.dispatch(fetchProducts());
	}

	//onChangePage = pageOfItems => this.setState({ pageOfItems: pageOfItems });

	render() {
        const { products, loading, error } = this.props.productList;
        const product = products.filter( product => product._id === this.props.match.params.id);
        if(loading) return <Loading />

		if (product) {

			return (
				<Box
					maxWidth="md"
					display="flex"
                    justifyContent="flex-start"
					flexWrap="wrap"
				>
                    {JSON.stringify(product)}
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


export default connect(mapStateToProps)(ProductDetail);
