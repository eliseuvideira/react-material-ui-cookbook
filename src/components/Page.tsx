import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, Button, Typography } from '@material-ui/core';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: theme.spacing(1),
  },
  content: {
    margin: theme.spacing(2),
  },
}));

const Page = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <Grid container direction="column" className={classes.container}>
          <Grid item>
            <Grid container>
              <Grid item>
                <Button component={Link} to="/">
                  Home
                </Button>
              </Grid>
              <Grid item>
                <Button component={Link} to="/users">
                  Users
                </Button>
              </Grid>
              <Grid item>
                <Button component={Link} to="/settings">
                  Settings
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.content}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Typography>Home content</Typography>}
              />
              <Route
                exact
                path="/users"
                render={() => <Typography>Users</Typography>}
              />
              <Route
                exact
                path="/settings"
                render={() => <Typography>Settings</Typography>}
              />
            </Switch>
          </Grid>
        </Grid>
      </div>
    </BrowserRouter>
  );
};

export default Page;
