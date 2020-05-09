import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Page = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <Button variant="contained" size="small" color="primary">
            Add
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" size="medium" color="primary">
            Add
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" size="large" color="primary">
            Add
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
