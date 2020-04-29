import React from 'react';
import {
  AppBar as MaterialAppBar,
  AppBarProps as MaterialAppBarProps,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  CssBaseline,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import { DRAWER_WIDTH } from '../utils/constants';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbarMargin: theme.mixins.toolbar,
  hide: {
    display: 'none',
  },
}));

interface AppBarProps
  extends Omit<Omit<MaterialAppBarProps, 'className'>, 'position'> {
  title: string;
  open: boolean;
  onAppBarClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

const AppBar: React.FC<AppBarProps> = ({
  title,
  open,
  onAppBarClick,
  ...props
}) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <MaterialAppBar
        position="fixed"
        className={clsx(classes.appBar, { [classes.appBarShift]: open })}
        {...props}
      >
        <Toolbar>
          <IconButton
            className={clsx(classes.menuButton, { [classes.hide]: open })}
            color="inherit"
            aria-label="open drawer"
            onClick={onAppBarClick}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </MaterialAppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
};

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onAppBarClick: PropTypes.func,
};

export default AppBar;
