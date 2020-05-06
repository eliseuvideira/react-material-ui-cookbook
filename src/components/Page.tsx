import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Snackbar } from '@material-ui/core';

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
      <Snackbar open message="Test" />
    </div>
  );
};

export default Page;
