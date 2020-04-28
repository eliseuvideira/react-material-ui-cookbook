import React, { useState } from 'react';
import {
  Toolbar as MaterialToolbar,
  makeStyles,
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbarMargin: theme.mixins.toolbar,
}));

interface Props {
  MenuItems?: () => JSX.Element;
  RightButton?: () => JSX.Element;
  title: string;
}

const Toolbar: React.FC<Props> = ({ MenuItems, RightButton, title }) => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const closeMenu = () => {
    setAnchor(null);
  };
  const classes = useStyles();
  return (
    <>
      <AppBar>
        <MaterialToolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={(e) => setAnchor(e.currentTarget)}
          >
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchor} open={!!anchor} onClose={closeMenu}>
            {MenuItems && <MenuItems />}
          </Menu>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            {title}
          </Typography>
          {RightButton && <RightButton />}
        </MaterialToolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
};

Toolbar.defaultProps = {
  MenuItems: function MenuItems() {
    return (
      <>
        <MenuItem component={Link} to="/">
          Home
        </MenuItem>
        <MenuItem component={Link} to="/users">
          Users
        </MenuItem>
        <MenuItem component={Link} to="/about">
          About
        </MenuItem>
      </>
    );
  },
  RightButton: function RightButton() {
    return <Button color="inherit">Login</Button>;
  },
};

Toolbar.propTypes = {
  MenuItems: PropTypes.any,
  RightButton: PropTypes.any,
  title: PropTypes.string.isRequired,
};

export default Toolbar;
