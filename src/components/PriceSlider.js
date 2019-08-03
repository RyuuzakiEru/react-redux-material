import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

import debounce from 'debounce';
import { formatPrice } from '../lib/priceUtil';

import { FILTER_PRICE } from '../actions/productActions';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    flexGrow: 1,
    justifyContent: 'space-around',
    boxShadow: 'inherit'
  }
}));

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';
const marks = [
  {
    value: 0
  },
  {
    value: 2500
  },
  {
    value: 5000
  },
  {
    value: 7500
  },
  {
    value: 10000
  }
];

const CustomSlider = withStyles({
  root: {
    color: '#19857b',
    height: 2,
    padding: '15px 0'
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -10,
    marginLeft: -14,
    '&:focus,&:hover,&$active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow
      }
    }
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 11px)',
    top: -20,
    '& *': {
      background: 'transparent',
      color: '#000'
    }
  },
  track: {
    height: 2
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf'
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 30,
    width: 2,
    marginTop: -14
  },
  markActive: {
    backgroundColor: 'currentColor'
  }
})(Slider);

const PriceSlider = props => {
  const classes = useStyles();
  const { min, max } = props;

  const handleChange = (event, values) => {
    props.filterPrice(values);
  };
  return (
    <Paper display="flex" className={classes.root}>
      <Typography>Price Range</Typography>
      <CustomSlider
        valueLabelDisplay="on"
        valueLabelFormat={val => formatPrice(val)}
        marks={marks}
        aria-label="price"
        onChange={debounce(handleChange, 300)}
        min={0}
        max={10000}
        defaultValue={[min, max]}
      />
    </Paper>
  );
};

const mapStateToProps = state => {
  return {
    min: state.productList.filter.priceRange[0],
    max: state.productList.filter.priceRange[1]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterPrice: values => dispatch({ type: FILTER_PRICE, values })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceSlider);
