import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import { formatPrice } from '../lib/priceUtil';
import {
  ADD_TO_CART,
  DECREASE_QTY,
  REMOVE_FROM_CART
} from '../actions/cartActions';

const CartItem = props => {
  const { item, qty } = props;
  const { product } = item;

  const handleRemoveFromCart = () => {
    props.removeFromCart(props.id);
  };

  const handleRemoveOneFromCart = () => {
    props.removeOneFromCart(props.id);
  };

  const handleAddToCart = () => {
    props.addToCart(props.item.product);
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <img src={product.picture} alt={product.name} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={product.name}
        secondary={`${formatPrice(product.priceNumber * qty)}`}
      />

      <ListItemSecondaryAction>
        <IconButton onClick={handleAddToCart}>
          <AddCircleOutlineIcon />
        </IconButton>

        <Typography component="span">{qty}</Typography>
        <IconButton onClick={handleRemoveOneFromCart}>
          <RemoveCircleOutlineIcon />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={handleRemoveFromCart}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.cart.cartItems.find(item => item.id === ownProps.id),
    // For some Reason QTY was not updated in UI (even when bount to item), so i had to bind separately
    qty: state.cart.cartItems.find(item => item.id === ownProps.id).qty
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: id => dispatch({ type: REMOVE_FROM_CART, id }),
    removeOneFromCart: id => dispatch({ type: DECREASE_QTY, id }),
    addToCart: product => dispatch({ type: ADD_TO_CART, product })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);
