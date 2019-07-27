import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
const useStyles = makeStyles(theme => ({
	root: {
		flex: 1,
		flexGrow: 1,
		flexFlow: 'column'
	},

	checkbox: {
		flexShrink: 1
	}
}));
export default function SizeFilter() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		checkedSmall: true,
		checkedMedium: true,
		checkedLarge: true
	});

	const handleChange = name => event => {
		setState({ ...state, [name]: event.target.checked });
	};

	return (
		<div>
			<Typography gutterBottom>Sizes</Typography>
			<div className={classes.root}>
				<FormControlLabel
					className={classes.checkbox}
					labelPlacement="top"
					label="S"
					control={
						<Checkbox
							checked={state.checkedSmall}
							onChange={handleChange('checkedSmall')}
							value="checkedSmall"
						/>
					}
				/>
				<FormControlLabel
					className={classes.checkbox}
					labelPlacement="top"
					label="M"
					control={
						<Checkbox
							checked={state.checkedMedium}
							onChange={handleChange('checkedMedium')}
							value="checkedMedium"
						/>
					}
				/>
				<FormControlLabel
					className={classes.checkbox}
					labelPlacement="top"
					label="L"
					control={
						<Checkbox
							checked={state.checkedLarge}
							onChange={handleChange('checkedLarge')}
							value="checkedLarge"
						/>
					}
				/>
			</div>
		</div>
	);
}
