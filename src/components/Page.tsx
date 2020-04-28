import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScrollTopButton from './ScrollTopButton';
import Toolbar from './Toolbar';
import { Route, BrowserRouter } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import DrawerType from './DrawerType';

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
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const screen = ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => () => (
    <>
      <Toolbar title={title} />
      <Typography>{content}</Typography>
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Hide' : 'Show'} Drawer
      </Button>
    </>
  );
  return (
    <div className={classes.root}>
      <div id="back-to-top-anchor" />
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={screen({ title: 'Home', content: 'Home Page' })}
        />
        <Route
          exact
          path="/users"
          render={screen({ title: 'Users', content: 'Users Page' })}
        />
        <Route
          exact
          path="/about"
          render={screen({ title: 'About', content: 'About Page' })}
        />
      </BrowserRouter>
      <DrawerType
        variant={'temporary'}
        open={open}
        onChangeOpen={(isOpen) => setOpen(isOpen)}
      />
      <ScrollTopButton />
    </div>
  );
};

export default Page;
