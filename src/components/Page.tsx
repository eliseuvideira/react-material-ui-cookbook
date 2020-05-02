import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  CssBaseline,
  Grid,
  AppBar,
  Drawer,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link, BrowserRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 250,
  },
  noSelect: {
    userSelect: 'none',
  },
  toolbarIconButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  container: {
    padding: theme.spacing(4),
  },
  content: {
    padding: theme.spacing(2),
  },
  panelDetails: {
    flexDirection: 'column',
    height: 150,
    overflow: 'auto',
  },
}));

const Lorem = () => (
  <>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies
      nibh ut ipsum placerat, eget egestas leo imperdiet. Etiam consectetur
      mollis ultrices. Fusce eu eros a dui maximus rutrum. Aenean at dolor eu
      nunc ultricies placerat. Sed finibus porta sapien eget euismod. Donec eget
      tortor non turpis hendrerit euismod. Phasellus at commodo augue. Maecenas
      scelerisque augue at mattis pharetra. Aenean fermentum sed neque id
      feugiat.
    </Typography>

    <Typography paragraph>
      Aliquam erat volutpat. Donec sit amet venenatis leo. Nullam tincidunt diam
      in nisi pretium, sit amet tincidunt nisi aliquet. Proin quis justo
      consectetur, congue nisi nec, pharetra erat. Ut volutpat pulvinar neque
      vitae vestibulum. Phasellus nisl risus, dapibus at sapien in, aliquam
      tempus tellus. Integer accumsan tortor id dolor lacinia, et pulvinar est
      porttitor. Mauris a est vitae arcu iaculis dictum. Sed posuere suscipit
      ultricies. Vivamus a lacus in dui vehicula tincidunt.
    </Typography>

    <Typography paragraph>
      In ut velit laoreet, blandit nisi id, tempus mi. Mauris interdum in turpis
      vel tempor. Vivamus tincidunt turpis vitae porta dignissim. Quisque
      condimentum augue arcu, quis tincidunt erat luctus sit amet. Sed quis
      ligula malesuada, sollicitudin nisl nec, molestie tellus. Donec commodo
      consequat gravida. Mauris in rhoncus tellus, eget posuere risus.
      Pellentesque eget lectus lorem. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Integer condimentum, sapien varius vulputate lobortis,
      urna elit vestibulum ligula, sit amet interdum lectus augue ac eros.
      Vestibulum lorem ante, tincidunt eget faucibus id, placerat non est.
      Vivamus pretium consectetur nunc at imperdiet. Nullam eu elit dui. In
      imperdiet magna ac dui aliquam gravida. Aenean ipsum ex, fermentum eu
      pretium quis, posuere et velit.
    </Typography>
  </>
);

const Page = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toolbar = (
    <Toolbar>
      <IconButton
        className={classes.toolbarIconButton}
        color="inherit"
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.noSelect}>
        My App
      </Typography>
    </Toolbar>
  );
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppBar position="sticky">{toolbar}</AppBar>
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        classes={{ paper: classes.drawerPaper }}
      >
        <AppBar position="static">{toolbar}</AppBar>
        <Divider />
        <List>
          <ListItem
            button
            component={Link}
            to="/"
            onClick={() => setDrawerOpen(false)}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <Grid container className={classes.container}>
        <Grid item sm={12}>
          <Paper square className={classes.content}>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                First
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetails}>
                <Lorem />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                Second
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetails}>
                <Lorem />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                Third
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetails}>
                <Lorem />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Paper>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
};

export default Page;
