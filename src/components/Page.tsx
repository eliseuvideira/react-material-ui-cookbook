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
  Paper,
  CssBaseline,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';

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

const Page = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tabs, setTabs] = useState([
    {
      active: true,
      label: 'Home',
      content: 'Home Content',
      icon: <HomeIcon />,
    },
    {
      active: false,
      label: 'Search',
      content: 'Search Content',
      icon: <SearchIcon />,
      disabled: true,
    },
    {
      active: false,
      label: 'Settings',
      content: 'Settings Content',
      icon: <SettingsIcon />,
    },
  ]);
  const onChange = (_: any, tabIndex: any) => {
    setTabs(tabs.map((tab, index) => ({ ...tab, active: tabIndex === index })));
  };
  const activeTabIndex = tabs.findIndex((tab) => tab.active);
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
            <Tabs value={activeTabIndex} onChange={onChange}>
              {tabs.map((tab) => (
                <Tab
                  key={tab.label}
                  label={tab.label}
                  icon={tab.icon}
                  disabled={tab.disabled}
                />
              ))}
            </Tabs>
            <Typography component="div" className={classes.tabContent}>
              {tabs[activeTabIndex].content}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
