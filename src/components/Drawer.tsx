import React from 'react';
import {
  Drawer as MaterialDrawer,
  DrawerProps as MaterialDrawerProps,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  createStyles,
  IconButton,
  Divider,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { DRAWER_WIDTH } from '../utils/constants';
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

interface DrawerItemProps {
  key: string | number;
  icon: JSX.Element;
  text: string;
}

interface DrawerProps
  extends Omit<Omit<MaterialDrawerProps, 'variant'>, 'className'> {
  items: DrawerItemProps[];
  open: boolean;
  switchDrawer: (isOpen: boolean) => void;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: DRAWER_WIDTH,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(7) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
  }),
);

const Drawer: React.FC<DrawerProps> = ({
  open,
  items,
  switchDrawer,
  ...props
}) => {
  const classes = useStyles();
  return (
    <MaterialDrawer
      // className={clsx(classes.drawer, {
      //   [classes.drawerOpen]: open,
      //   [classes.drawerClose]: !open,
      // })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
      variant="permanent"
      {...props}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={() => switchDrawer(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {items.length > 0 &&
          items.map((item) => (
            <ListItem button key={item.key}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
      </List>
    </MaterialDrawer>
  );
};

Drawer.defaultProps = {
  items: [],
};

Drawer.propTypes = {
  items: PropTypes.any,
  switchDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Drawer;
