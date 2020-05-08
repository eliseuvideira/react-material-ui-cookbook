import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Grid,
  Button,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    margin: theme.spacing(1),
  },
  marginLeftAuto: {
    marginLeft: 'auto',
  },
  buttons: {
    marginLeft: theme.spacing(1),
  },
}));

const Page = () => {
  const classes = useStyles();
  const [disabled, setDisabled] = useState(false);
  const [appBarColor, setAppBarColor] = useState<
    'default' | 'primary' | 'secondary'
  >('default');

  const getNext = (
    color: 'default' | 'primary' | 'secondary',
  ): 'default' | 'primary' | 'secondary' => {
    if (color === 'default') {
      return 'primary';
    }
    if (color === 'primary') {
      return 'secondary';
    }
    return 'default';
  };

  const onChangeAppBarColors = () => {
    setAppBarColor(getNext(appBarColor));
  };

  const buttonColor = (
    color: 'default' | 'primary' | 'secondary',
  ): 'default' | 'primary' | 'secondary' => {
    return getNext(color);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" color={appBarColor}>
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">My App</Typography>
          <Button
            variant="text"
            color="inherit"
            className={classes.marginLeftAuto}
          >
            Text
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            className={classes.buttons}
          >
            Outlined
          </Button>
          <Button
            variant="contained"
            color={buttonColor(appBarColor)}
            className={classes.buttons}
          >
            Contained
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Grid
        container
        spacing={2}
        direction="column"
        className={classes.container}
      >
        <Grid item>
          <Typography variant="h6">Default</Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={5}>
            <Grid item>
              <Button variant="text" disabled={disabled}>
                Text
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" disabled={disabled}>
                Outlined
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" disabled={disabled}>
                Contained
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h6">Primary</Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={5}>
            <Grid item>
              <Button color="primary" variant="text" disabled={disabled}>
                Text
              </Button>
            </Grid>
            <Grid item>
              <Button color="primary" variant="outlined" disabled={disabled}>
                Outlined
              </Button>
            </Grid>
            <Grid item>
              <Button color="primary" variant="contained" disabled={disabled}>
                Contained
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h6">Secondary</Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={5}>
            <Grid item>
              <Button color="secondary" variant="text" disabled={disabled}>
                Text
              </Button>
            </Grid>
            <Grid item>
              <Button color="secondary" variant="outlined" disabled={disabled}>
                Outlined
              </Button>
            </Grid>
            <Grid item>
              <Button color="secondary" variant="contained" disabled={disabled}>
                Contained
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button onClick={() => setDisabled(!disabled)}>
            Switch Disabled
          </Button>
          <Button onClick={onChangeAppBarColors}>Switch AppBar Colors</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
