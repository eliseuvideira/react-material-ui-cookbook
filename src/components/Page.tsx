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

  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container spacing={4} className={classes.container}>
        <Grid item>
          <TextField
            id="first"
            label="First"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            id="second"
            label="Second"
            value={second}
            onChange={(e) => setSecond(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            id="third"
            label="Third"
            value={third}
            onChange={(e) => setThird(e.target.value)}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
