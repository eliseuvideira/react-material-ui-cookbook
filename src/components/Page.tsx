import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    margin: theme.spacing(2),
  },
}));

const Page = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container spacing={4} className={classes.container}>
        <Grid item>
          <TextField label="Label" />
        </Grid>
        <Grid item>
          <TextField placeholder="Placeholder" />
        </Grid>
        <Grid item>
          <TextField helperText="Helper Text, brief explanation of the value" />
        </Grid>
        <Grid item>
          <TextField
            label="Label"
            placeholder="Placeholder"
            helperText="Helper Text, brief explanation of the value"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
