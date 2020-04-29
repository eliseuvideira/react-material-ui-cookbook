import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AppBar from './AppBar';
import Drawer from './Drawer';
import HomeIcon from '@material-ui/icons/Home';

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
      <AppBar title="My App" onAppBarClick={() => setOpen(!open)} />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        items={[{ key: 'Home', text: 'Home', icon: <HomeIcon /> }]}
      />
    </div>
  );
};

export default Page;
