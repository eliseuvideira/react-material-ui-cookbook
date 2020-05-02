import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  CssBaseline,
  ListItem,
  ListItemText,
  List,
  ListItemIcon,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Page = () => {
  const classes = useStyles();
  const [users] = useState([
    { name: 'John Doe' },
    { name: 'Joseph Smith' },
    { name: 'Janice Patterson' },
  ]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <List>
            {users.map((user, index) => (
              <ListItem key={index} button>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={user.name} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
