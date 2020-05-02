import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  ListItemIcon,
  ListItemText,
  List,
  Drawer,
  ListItem,
  Paper,
  CssBaseline,
  Tabs,
  Tab,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Scrollbars from 'react-custom-scrollbars';
import { Link, BrowserRouter, Route } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabContent: {
    padding: theme.spacing(2),
  },
  drawerPaper: {
    width: 250,
  },
  padding3: {
    padding: theme.spacing(3),
  },
}));

const Page = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{process.env.APP_NAME}</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        open={drawerOpen}
        classes={{ paper: classes.drawerPaper }}
        onClose={() => setDrawerOpen(false)}
      >
        <List>
          <Scrollbars style={{ width: 250, height: 'calc(100vh - 16px)' }}>
            <ListItem button onClick={() => setDrawerOpen(false)}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Scrollbars>
        </List>
      </Drawer>
      <Toolbar />
      <BrowserRouter>
        <Grid container>
          <Grid item xs={6} className={classes.padding3}>
            <Paper square>
              <AppBar position="static" color="transparent">
                <Tabs
                  value={tabIndex}
                  onChange={(_, index) => setTabIndex(index)}
                >
                  <Tab label="Home" component={Link} to="/" />
                  <Tab label="Users" component={Link} to="/users" />
                  <Tab label="Settings" component={Link} to="/settings" />
                </Tabs>
              </AppBar>
              <Route
                exact
                path="/"
                render={() => (
                  <Typography component="div" className={classes.tabContent}>
                    Home
                  </Typography>
                )}
              />
              <Route
                exact
                path="/users"
                render={() => (
                  <Typography component="div" className={classes.tabContent}>
                    Users
                  </Typography>
                )}
              />
              <Route
                exact
                path="/settings"
                render={() => (
                  <Typography component="div" className={classes.tabContent}>
                    Settings
                  </Typography>
                )}
              />
            </Paper>
          </Grid>
        </Grid>
      </BrowserRouter>
    </div>
  );
};

export default Page;
