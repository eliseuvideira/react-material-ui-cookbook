import React, { useState } from 'react';
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
  const [multiline, setMultiline] = useState('');

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container spacing={4} className={classes.container}>
        <Grid item>
          <TextField
            multiline
            rows={5}
            label="Multiline Text"
            value={multiline}
            onChange={(e) => setMultiline(e.target.value)}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
