import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  ListItemIcon,
  ListItemText,
  List,
  Drawer,
  ListItem,
  Paper,
  CssBaseline,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Scrollbars from 'react-custom-scrollbars';
import TabContainer from './TabContainer';
import TabContent from './TabContent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabContent: {
    padding: theme.spacing(2),
  },
  drawerPaper: {
    width: 250,
  },
  padding3: {
    padding: theme.spacing(3),
  },
}));

const Page = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{process.env.APP_NAME}</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        open={drawerOpen}
        classes={{ paper: classes.drawerPaper }}
        onClose={() => setDrawerOpen(false)}
      >
        <List>
          <Scrollbars style={{ width: 250, height: 'calc(100vh - 16px)' }}>
            {new Array(30).fill(null).map((_, i) => (
              <ListItem key={i} button onClick={() => setDrawerOpen(false)}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItem>
            ))}
          </Scrollbars>
        </List>
      </Drawer>
      <Toolbar />
      <Grid container>
        <Grid item xs={6}>
          <Paper square>
            <TabContainer variant="fullWidth">
              <TabContent label="Item 1" className={classes.padding3}>
                <Paper square>
                  <Typography>Item 1</Typography>
                </Paper>
              </TabContent>
              <TabContent label="Item 2" className={classes.padding3}>
                <Paper square>
                  <Typography>Item 2</Typography>
                </Paper>
              </TabContent>
              <TabContent label="Item 3" className={classes.padding3}>
                <Paper square>
                  <Typography>Item 3</Typography>
                </Paper>
              </TabContent>
            </TabContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
