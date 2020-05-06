import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Snackbar, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Page = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const showSnackbar = () => {
    setOpen(true);
  };
  const hideSnackbar = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Button variant="contained" onClick={showSnackbar}>
        Show Snackbar
      </Button>
      <Snackbar
        open={open}
        onClose={hideSnackbar}
        autoHideDuration={5000}
        message="Visible Snackbar!"
      />
    </div>
  );
};

export default Page;
