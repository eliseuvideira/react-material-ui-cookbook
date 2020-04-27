import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from './Container';
import Item from './Item';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

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
      <Container justify="space-around" spacing={4}>
        <Item xs={3}>
          <Container direction="column" spacing={2}>
            <Item>
              <Paper className={classes.paper}>
                <Typography>One</Typography>
              </Paper>
            </Item>
            <Item>
              <Paper className={classes.paper}>
                <Typography>Two</Typography>
              </Paper>
            </Item>
          </Container>
        </Item>
        <Item xs={3}>
          <Container direction="column" spacing={2}>
            <Item>
              <Paper className={classes.paper}>
                <Typography>Three</Typography>
              </Paper>
            </Item>
            <Item>
              <Paper className={classes.paper}>
                <Typography>Four</Typography>
              </Paper>
            </Item>
          </Container>
        </Item>
        <Item xs={3}>
          <Container direction="column" spacing={2}>
            <Item>
              <Paper className={classes.paper}>
                <Typography>Five</Typography>
              </Paper>
            </Item>
            <Item>
              <Paper className={classes.paper}>
                <Typography>Six</Typography>
              </Paper>
            </Item>
          </Container>
        </Item>
        <Hidden smDown>
          <Item xs={3}>
            <Container direction="column" spacing={2}>
              <Item>
                <Paper className={classes.paper}>
                  <Typography>Seven</Typography>
                </Paper>
              </Item>
              <Item>
                <Paper className={classes.paper}>
                  <Typography>Eight</Typography>
                </Paper>
              </Item>
            </Container>
          </Item>
        </Hidden>
      </Container>
    </div>
  );
};

export default Page;
