import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';

type DrawerState = 'permanent' | 'persistent' | 'temporary';

interface IDrawerType {
  variant: DrawerState;
  open: boolean;
  onChangeOpen: (isOpen: boolean) => void;
}

const DrawerType: React.FC<IDrawerType> = ({ variant, open, onChangeOpen }) => {
  return (
    <Drawer variant={variant} open={open} onClose={() => onChangeOpen(false)}>
      <List>
        <ListItem button onClick={() => onChangeOpen(false)}>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button onClick={() => onChangeOpen(false)}>
          <ListItemText>Users</ListItemText>
        </ListItem>
        <ListItem button onClick={() => onChangeOpen(false)}>
          <ListItemText>About</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

DrawerType.propTypes = {
  variant: PropTypes.any.isRequired,
  open: PropTypes.bool.isRequired,
  onChangeOpen: PropTypes.func.isRequired,
};

export default DrawerType;
