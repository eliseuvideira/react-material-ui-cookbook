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

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbarMargin: theme.mixins.toolbar,
}));

interface AppBarProps
  extends Omit<Omit<MaterialAppBarProps, 'className'>, 'position'> {
  title: string;
  onAppBarClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

const AppBar: React.FC<AppBarProps> = ({ title, onAppBarClick, ...props }) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <MaterialAppBar position="fixed" className={classes.appBar} {...props}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={onAppBarClick}
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
  onAppBarClick: PropTypes.func,
};

export default AppBar;
