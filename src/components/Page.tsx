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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DevicesIcon from '@material-ui/icons/Devices';
import NetworkWifiIcon from '@material-ui/icons/NetworkWifi';
import StorageIcon from '@material-ui/icons/Storage';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
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
  pt2: {
    paddingTop: theme.spacing(2),
  },
}));

interface IExpansionItemProps {
  title: string;
  content: string;
  disabled?: boolean;
  hidden?: boolean;
  Icon: React.FC<any>;
}

const Page = () => {
  const classes = useStyles();
  const [panels] = useState<IExpansionItemProps[]>([
    { title: 'Devices', content: 'Devices Content ...', Icon: DevicesIcon },
    {
      title: 'Networks',
      content: 'Networks Content ...',
      Icon: NetworkWifiIcon,
    },
    { title: 'Storage', content: 'Storage Content ...', Icon: StorageIcon },
    {
      title: 'Pricing',
      content: 'Pricing Content ...',
      Icon: AttachMoneyIcon,
    },
    { title: 'Usage', content: 'Usage Content ...', Icon: ShowChartIcon },
    {
      title: 'Licensing',
      content: 'Licensing Content ...',
      Icon: BeenhereIcon,
    },
  ]);
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const onChangeExpandedIndex = (index: number) => () =>
    setExpandedIndex(index === expandedIndex ? -1 : index);
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
            <Typography variant="h5">Choose One</Typography>
            <Divider />
            <div className={classes.pt2}>
              {panels
                .filter(({ hidden }) => !hidden)
                .map(({ title, content, Icon, disabled }, index) => (
                  <ExpansionPanel
                    key={index}
                    disabled={disabled}
                    expanded={index === expandedIndex}
                    onChange={onChangeExpandedIndex(index)}
                  >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Icon />
                      <Typography variant="subtitle1">{title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>{content}</Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                ))}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
};

export default Page;
