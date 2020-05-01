import React, { useState } from 'react';
import {
  makeStyles,
  Grid,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@material-ui/core';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import { Route } from 'react-router';
import { BrowserRouter, NavLink, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

const APP_NAME = 'My App';
const DRAWER_WIDTH = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(7) + 1,
    transition: theme.transitions.create(['width', 'margin', 'padding'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  rootShift: {
    paddingLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(['width', 'margin', 'padding'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
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
  appBarMenuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
  },
  drawerOpen: {
    width: DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
  },
  drawerToolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
  },
  drawerBottomList: {
    marginTop: 'auto',
  },
  borderRadius16: {
    borderRadius: 5,
  },
  padding5: {
    padding: theme.spacing(5),
  },
  activeListItem: {
    color: theme.palette.primary.main,
  },
}));

const NavListItem: React.FC<{
  classes: any;
  Icon: any;
  label: string;
  to: string;
  active?: boolean;
  [key: string]: any;
}> = ({ classes, Icon, label, to, active, ...props }) => (
  <ListItem button component={NavLink} to={to} {...props}>
    <ListItemIcon
      classes={{ root: clsx({ [classes.activeListItem]: active }) }}
    >
      <Icon />
    </ListItemIcon>
    <ListItemText
      classes={{ root: clsx({ [classes.activeListItem]: active }) }}
    >
      <Typography>{label}</Typography>
    </ListItemText>
  </ListItem>
);

NavListItem.propTypes = {
  classes: PropTypes.any.isRequired,
  Icon: PropTypes.any.isRequired,
  label: PropTypes.any.isRequired,
  to: PropTypes.any.isRequired,
  active: PropTypes.bool,
};

const NavItem: React.FC<any> = (props) => (
  <Switch>
    <Route
      exact
      path={props.to}
      render={() => <NavListItem active={true} {...props} />}
    />
    <Route path="/" render={() => <NavListItem {...props} />} />
  </Switch>
);

NavItem.propTypes = {
  classes: PropTypes.any.isRequired,
  Icon: PropTypes.any.isRequired,
  label: PropTypes.any.isRequired,
  to: PropTypes.any.isRequired,
};

const Page = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <BrowserRouter>
      <Grid
        container
        className={clsx(classes.root, { [classes.rootShift]: drawerOpen })}
      >
        <Grid item sm={12}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: drawerOpen,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={() => setDrawerOpen(!drawerOpen)}
                className={classes.appBarMenuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                {APP_NAME}
              </Typography>
            </Toolbar>
          </AppBar>
          <Toolbar />
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: drawerOpen,
              [classes.drawerClose]: !drawerOpen,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: drawerOpen,
                [classes.drawerClose]: !drawerOpen,
              }),
            }}
          >
            <Toolbar className={classes.drawerToolbar}>
              <IconButton onClick={() => setDrawerOpen(false)}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List>
              <NavItem
                classes={classes}
                Icon={HomeIcon}
                label="Home"
                to="/"
                className={classes.borderRadius16}
              />
            </List>
            <List className={classes.drawerBottomList}>
              <NavItem
                classes={classes}
                Icon={SettingsIcon}
                label="Settings"
                to="/settings"
                className={classes.borderRadius16}
              />
            </List>
          </Drawer>
        </Grid>
        <Grid item sm={12}>
          <Grid container className={classes.padding5}>
            <Grid item sm={12}>
              <Paper>
                <Route
                  exact
                  path="/"
                  render={() => <Typography>Home</Typography>}
                />
                <Route
                  exact
                  path="/settings"
                  render={() => <Typography>Settings</Typography>}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
};

export default Page;
