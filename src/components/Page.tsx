import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from './Container';
import Item from './Item';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Page = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container spacing={4}>
        <Item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Item>
        <Item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Item>
        <Item xs={4}>
          <Paper className={classes.paper}>xs=4</Paper>
        </Item>
        <Item xs={2}>
          <Paper className={classes.paper}>xs=2</Paper>
        </Item>
      </Container>
    </div>
  );
};

export default Page;
