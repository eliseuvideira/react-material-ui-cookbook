import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  ListItemIcon,
  ListItemText,
  List,
  Drawer,
  ListItem,
  useTheme,
  useMediaQuery,
  Paper,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

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
}));

const useWidth = () => {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null as 'xs' | 'sm' | 'md' | 'lg' | 'xl' | null) || 'xs'
  );
};

const Page = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const width = useWidth();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{process.env.APP_NAME}</Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerOpen} classes={{ paper: classes.drawerPaper }}>
        <List>
          <ListItem button onClick={() => setDrawerOpen(false)}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <Toolbar />
      <Grid container>
        <Grid item xs={6}>
          <Paper square>
            <Tabs
              variant={
                ['xs', 'sm'].includes(width) ? 'scrollable' : 'fullWidth'
              }
              value={currentTab}
              scrollButtons="auto"
              onChange={(_, value) => setCurrentTab(value)}
            >
              <Tab label="Details" />
              <Tab label="Privileges" />
              <Tab label="Settings" />
            </Tabs>
            {currentTab === 0 && (
              <Typography component="div" className={classes.tabContent}>
                Details
              </Typography>
            )}
            {currentTab === 1 && (
              <Typography component="div" className={classes.tabContent}>
                Privileges
              </Typography>
            )}
            {currentTab === 2 && (
              <Typography component="div" className={classes.tabContent}>
                Settings
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
