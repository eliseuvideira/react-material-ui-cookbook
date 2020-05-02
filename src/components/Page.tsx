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
  LinearProgress,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

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
  },
}));

const fetchPanelContent = async (index: number) =>
  new Promise<string>((resolve) =>
    setTimeout(
      () =>
        resolve(
          [
            'First Panel Content...',
            'Second Panel Content...',
            'Third Panel Content...',
            'Fourth Panel Content...',
          ][index],
        ),
      1000,
    ),
  );

const MaybeProgress: React.FC<{ loading?: boolean }> = ({ loading }) =>
  loading ? <LinearProgress /> : null;

MaybeProgress.propTypes = {
  loading: PropTypes.bool,
};

const Page = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [panels, setPanels] = useState<{ title: string; content?: string }[]>([
    { title: 'First Panel Title...' },
    { title: 'Second Panel Title...' },
    { title: 'Third Panel Title...' },
    { title: 'Fourth Panel Title...' },
  ]);
  const onChange = (index: number) => async (_: any, expanded: any) => {
    if (!panels[index].content && expanded) {
      const content = await fetchPanelContent(index);
      const newPanels = [...panels];
      newPanels[index] = { ...newPanels[index], content };
      setPanels(newPanels);
    }
  };

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
            {panels.map((panel, index) => (
              <ExpansionPanel key={index} onChange={onChange(index)}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{panel.title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.panelDetails}>
                  <MaybeProgress loading={!panel.content} />
                  <Typography>{panel.content}</Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
};

export default Page;
