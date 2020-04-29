import React, { useState } from 'react';
import AppBar from './AppBar';
import Drawer from './Drawer';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';
import {
  Typography,
  Paper,
  makeStyles,
  createStyles,
  Grid,
} from '@material-ui/core';
import { DRAWER_WIDTH } from '../utils/constants';
import clsx from 'clsx';

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      width: `calc(100% - ${theme.spacing(7) + 1}px)`,
      marginLeft: theme.spacing(7) + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    contentShift: {
      marginLeft: DRAWER_WIDTH,
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  }),
);

const Page = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('Home');
  const [items] = useState([
    {
      key: 'Home',
      text: 'Home',
      icon: <HomeIcon />,
      onClick: () => setContent('Home'),
    },
    {
      key: 'Page 2',
      text: 'Page 2',
      icon: <WebIcon />,
      onClick: () => setContent('Page 2'),
    },
    {
      key: 'Page 3',
      text: 'Page 3',
      icon: <WebIcon />,
      disabled: true,
      onClick: () => setContent('Page 3'),
    },
    {
      key: 'Page 4',
      text: 'Page 4',
      icon: <WebIcon />,
      onClick: () => setContent('Page 4'),
    },
    {
      key: 'Page 5',
      text: 'Page 5',
      icon: <WebIcon />,
      hidden: true,
      onClick: () => setContent('Page 5'),
    },
  ]);
  return (
    <div>
      <AppBar open={open} title="My App" onAppBarClick={() => setOpen(!open)} />
      <Drawer
        open={open}
        switchDrawer={(value) => setOpen(value)}
        onClose={() => setOpen(false)}
        items={items}
        bottomItems={[
          {
            key: 'Settings',
            text: 'Settings',
            icon: <SettingsIcon />,
            onClick: () => setContent('Settings'),
          },
        ]}
      />
      <Grid
        container
        className={clsx(classes.content, { [classes.contentShift]: open })}
      >
        <Grid item xs={12}>
          <Paper>
            <Typography>{content}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
