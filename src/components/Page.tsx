import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  CssBaseline,
  ListItem,
  ListItemText,
  List,
  Container,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Page = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters>
        <Grid container>
          <Grid item xs={12}>
            <List dense>
              <ListItem>
                <ListItemText primary="First" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Second" />
              </ListItem>
            </List>
            <Divider />
            <List dense>
              <ListItem>
                <ListItemText primary="First" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Second" />
              </ListItem>
            </List>
            <Divider />
            <List dense>
              <ListItem>
                <ListItemText primary="First" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Second" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Page;
