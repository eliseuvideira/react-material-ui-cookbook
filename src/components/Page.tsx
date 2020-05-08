import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    margin: theme.spacing(1),
  },
}));

const Page = () => {
  const classes = useStyles();
  const [disabled, setDisabled] = useState(false);
  return (
    <div className={classes.root}>
      <CssBaseline />
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
          <Button onClick={() => setDisabled(!disabled)}>Switch</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
