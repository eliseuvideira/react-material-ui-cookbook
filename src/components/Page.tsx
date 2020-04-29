import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AppBar from './AppBar';
import Drawer from './Drawer';
import SettingsIcon from '@material-ui/icons/Settings';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

const useStyles = makeStyles(
  createStyles({
    root: {
      display: 'flex',
    },
  }),
);

const Page = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <AppBar open={open} title="My App" onAppBarClick={() => setOpen(!open)} />
      <Drawer
        open={open}
        switchDrawer={(value) => setOpen(value)}
        onClose={() => setOpen(false)}
        items={[
          {
            key: 'Authorization',
            text: 'Authorization',
            icon: <FingerprintIcon />,
          },
        ]}
        bottomItems={[
          {
            key: 'Settings',
            text: 'Settings',
            icon: <SettingsIcon />,
          },
        ]}
      />
    </div>
  );
};

export default Page;
