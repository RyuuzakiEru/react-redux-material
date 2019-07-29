import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import FilterListIcon from '@material-ui/icons/FilterList';
import PriceSlider from './PriceSlider';
import SizeFilter from './SizeFilter';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: 5,
  },
  flex: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<FilterListIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Online Store</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.flex}>
          <PriceSlider />
          <SizeFilter />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
