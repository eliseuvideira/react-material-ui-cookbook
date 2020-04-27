import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Fade,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
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
  toolbarMargin: theme.mixins.toolbar,
}));

const Page = () => {
  const [scroll, setScroll] = useState({ scrolling: false, scrollTop: 0 });
  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    setScroll({
      scrollTop,
      scrolling: scrollTop > scroll.scrollTop,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Fade in={!scroll.scrolling}>
        <AppBar>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              My Title
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Fade>
      <div className={classes.toolbarMargin} />
      <ul>
        {new Array(500).fill(null).map((_, i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
