import React from 'react';
import { Link } from 'react-router-dom'

import Paper from '@material-ui/core/Paper';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		width: '100%',
		padding: 20,
		display: 'flex',
		textDecoration: 'none'
	},
});

const SimpleNav = props => {
    const classes = useStyles();
    const {title} = props;
	return (
		<Paper>
			<Link to="/" className={classes.root} component="button">
				<ArrowBackIosIcon />
				<Typography className={classes.heading}>{title}</Typography>
			</Link>
		</Paper>
	);
};

export default SimpleNav;
