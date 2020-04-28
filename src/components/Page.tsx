import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScrollTopButton from './ScrollTopButton';
import Toolbar from './Toolbar';
import { Route, BrowserRouter } from 'react-router-dom';
import { Typography } from '@material-ui/core';

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
      <ScrollTopButton />
    </div>
  );
};

export default Page;
