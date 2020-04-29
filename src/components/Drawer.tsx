import React from 'react';
import {
  Drawer as MaterialDrawer,
  DrawerProps as MaterialDrawerProps,
  makeStyles,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import PropTypes from 'prop-types';

interface DrawerItemProps {
  key: string | number;
  icon: JSX.Element;
  text: string;
}

interface DrawerProps
  extends Omit<Omit<MaterialDrawerProps, 'variant'>, 'className'> {
  items: DrawerItemProps[];
}

const DRAWER_WIDTH = 240;

const useStyles = makeStyles({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  drawerContainer: {
    overflow: 'auto',
  },
});

const Drawer: React.FC<DrawerProps> = ({ items, ...props }) => {
  const classes = useStyles();
  return (
    <MaterialDrawer
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      variant="permanent"
      {...props}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {items.length > 0 &&
            items.map((item) => (
              <ListItem button key={item.key}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
        </List>
      </div>
    </MaterialDrawer>
  );
};

Drawer.defaultProps = {
  items: [],
};

Drawer.propTypes = {
  items: PropTypes.any,
};

export default Drawer;
