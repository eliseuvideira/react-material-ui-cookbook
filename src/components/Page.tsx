import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Snackbar, Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Page = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Button variant="contained" onClick={() => setOpen(true)}>
        Do Something
      </Button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        message="All done doing the thing"
        action={
          <IconButton color="inherit" onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        }
      />
    </div>
  );
};

export default Page;
