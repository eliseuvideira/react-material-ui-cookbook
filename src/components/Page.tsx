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
}));

const Page = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
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
            <ListItem
              button
              onClick={() => alert('Home')}
              className={classes.borderRadius16}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </List>
          <List className={classes.drawerBottomList}>
            <ListItem
              button
              onClick={() => alert('Settings')}
              className={classes.borderRadius16}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Drawer>
      </Grid>
      <Grid item sm={12}>
        <Grid container className={classes.padding5}>
          <Grid item sm={12}>
            <Paper>
              <Typography>Page</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;
