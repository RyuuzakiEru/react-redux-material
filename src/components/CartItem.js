import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function CartItem(props) {
    const {id, product, qty} = props.item;
	return (
		<ListItem>
			<ListItemAvatar>
				<Avatar>
					<img src={product.picture} alt={product.name} />
				</Avatar>
			</ListItemAvatar>
			<ListItemText primary={product.name} secondary={qty} />
			<ListItemSecondaryAction>
				<IconButton edge="end" aria-label="delete">
					<DeleteIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
}
