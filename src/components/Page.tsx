import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Snackbar, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
}));

const Page = () => {
  const classes = useStyles();
  const [error, setError] = useState<any>(null);

  const onClose = () => {
    setError(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Button
        variant="contained"
        onClick={() => setError(new Error('Something happened'))}
      >
        Click Me!
      </Button>
      <Snackbar
        open={error !== null}
        message={error && error.message}
        onClose={onClose}
        autoHideDuration={4000}
        ContentProps={{ classes: { root: classes.error } }}
      />
    </div>
  );
};

export default Page;
