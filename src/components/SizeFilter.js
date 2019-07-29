import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import { connect } from 'react-redux';

import {FILTER_SIZE} from '../actions/productActions';

const useStyles = makeStyles(theme => ({
	root: {
		flex: 1,
        flexFlow: 'column',
        alignSelf: 'flex-end',
        textAlign: 'center',
        flexShrink: 1,
        paddingLeft:20
	},
    header: {
        alignSelf: 'center'
    },
	checkbox: {
        width:18,
        marginRight:5,
        marginLeft: 5
	}
}));
const SizeFilter = props => {
	const classes = useStyles();

	const handleChange = event => {
        console.log(event.target.value);
        props.toggleSize(event.target.value);
	};

	return (
		<div>
			<div className={classes.root}>

            <Typography className={classes.header}>Sizes</Typography>
				<FormControlLabel
					className={classes.checkbox}
					labelPlacement="top"
					label="S"
					control={
						<Checkbox
							checked={props.small}
							onChange={handleChange}
							value="small"
						/>
					}
				/>
				<FormControlLabel
					className={classes.checkbox}
					labelPlacement="top"
					label="M"
					control={
						<Checkbox
							checked={props.medium}
							onChange={handleChange}
							value="medium"
						/>
					}
				/>
				<FormControlLabel
					className={classes.checkbox}
					labelPlacement="top"
					label="L"
					control={
						<Checkbox
							checked={props.large}
							onChange={handleChange}
							value="large"
						/>
					}
				/>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		small: state.productList.filter.sizes.includes('small'),
		medium: state.productList.filter.sizes.includes('medium'),
		large: state.productList.filter.sizes.includes('large')
	};
};

const mapDispatchToProps = dispatch => {
    return {
        toggleSize: size => dispatch({ type: FILTER_SIZE, size })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(SizeFilter);
