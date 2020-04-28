import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScrollTopButton from './ScrollTopButton';
import Toolbar from './Toolbar';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

const Page = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div id="back-to-top-anchor" />
      <Toolbar
        title="My Toolbar"
        RightButton={() => (
          <Button color="secondary" variant="contained">
            Logout
          </Button>
        )}
      />
      <ul>
        {new Array(500).fill(null).map((_, i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <ScrollTopButton />
    </div>
  );
};

export default Page;
