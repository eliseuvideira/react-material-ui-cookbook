import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  CssBaseline,
  ListItem,
  ListItemText,
  List,
  Container,
  Typography,
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
            <Typography variant="h6">First Section</Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="First" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Second" />
              </ListItem>
            </List>
            <Typography variant="h6">Second Section</Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="First" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Second" />
              </ListItem>
            </List>
            <Typography variant="h6">Third Section</Typography>
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
