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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container spacing={4} className={classes.container}>
        <Grid item>
          <TextField
            id="username"
            label="Username"
            autoComplete="username"
            InputProps={{ name: 'username' }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            id="password"
            type="password"
            label="Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
