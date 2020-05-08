import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Grid,
  Button,
  Typography,
  ButtonProps,
} from '@material-ui/core';
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  LinkProps,
} from 'react-router-dom';
import PropTypes from 'prop-types';

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

const NavButton: React.FC<
  {
    color: 'inherit' | 'primary' | 'secondary' | 'default';
  } & LinkProps &
    ButtonProps
> = ({ color, ...props }) => (
  <Switch>
    <Route
      exact
      path={props.to as string}
      render={() => <Button color={color} component={Link} {...props} />}
    />
    <Route path="/" render={() => <Button component={Link} {...props} />} />
  </Switch>
);

NavButton.propTypes = {
  color: PropTypes.any.isRequired,
  to: PropTypes.any,
};

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
                <NavButton color="primary" component={Link} to="/">
                  Home
                </NavButton>
              </Grid>
              <Grid item>
                <NavButton color="primary" component={Link} to="/users">
                  Users
                </NavButton>
              </Grid>
              <Grid item>
                <NavButton color="primary" component={Link} to="/settings">
                  Settings
                </NavButton>
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
