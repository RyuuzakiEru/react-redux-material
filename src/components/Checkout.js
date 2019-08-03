import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles';

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { formatPrice } from '../lib/priceUtil';
import OrderItem from './OrderItem';
import SimpleNav from './SimpleNav';

const styles = theme => ({
  root: {
    width: '100%',
    padding: 20,
    display: 'flex',
    textDecoration: 'none'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'column'
  },
  orderHeader: {
    textAlign: 'center',
    marginTop: 20
  }
});
class Checkout extends Component {
  constructor(props) {
    super(props);
    // bind "this" to handleAddToCart scope
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  handleCheckout() {
    return this;
  }

  render() {
    const { classes } = this.props;
    const { cartItems } = this.props;

    if (cartItems.length > 0) {
      return (
        <>
          <SimpleNav title="Continue Shopping" />
          <Container maxWidth="lg" className={classes.container}>
            <Typography component="h1" className={classes.orderHeader}>
              Oder Details
            </Typography>

            <List className={classes.fullList}>
              {cartItems.map(item => (
                <OrderItem key={item.id} item={item} />
              ))}
            </List>
            <Typography component="h1" className={classes.orderHeader}>
              Order Total
              {formatPrice(
                cartItems.reduce(
                  (total, item) => total + item.qty * item.product.priceNumber,
                  0
                )
              )}
            </Typography>
          </Container>
        </>
      );
    }
    return (
      <>
        <SimpleNav title="Continue Shopping" />
        <Container maxWidth="lg" className={classes.container}>
          <Typography component="h1" className={classes.orderHeader}>
            Please Add some products first
          </Typography>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(withStyles(styles)(Checkout));
