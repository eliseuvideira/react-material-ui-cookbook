import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Snackbar,
  Button,
  IconButton,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { BrowserRouter, Route, Link } from 'react-router-dom';

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
      <BrowserRouter>
        <CssBaseline />
        <Route
          exact
          path="/"
          render={() => (
            <Button variant="contained" onClick={() => setOpen(true)}>
              Create
            </Button>
          )}
        />
        <Route
          exact
          path="/thing"
          render={() => <Typography>Thing</Typography>}
        />
        <Snackbar
          open={open}
          onClose={() => setOpen(false)}
          message="All done doing the thing"
          action={[
            <Button
              key="more"
              color="secondary"
              component={Link}
              to="/thing"
              onClick={() => setOpen(false)}
            >
              More
            </Button>,
            <IconButton
              key="close"
              color="inherit"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </BrowserRouter>
    </div>
  );
};

export default Page;
