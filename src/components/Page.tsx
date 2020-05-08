import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Page = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container spacing={4}>
        <Grid item>
          <Button variant="text">Text</Button>
        </Grid>
        <Grid item>
          <Button variant="outlined">Outlined</Button>
        </Grid>
        <Grid item>
          <Button variant="contained">Contained</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
