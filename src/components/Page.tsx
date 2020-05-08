import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Typography, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  fab: {
    margin: 0,
    top: 'auto',
    left: 'auto',
    bottom: 20,
    right: 20,
    position: 'fixed',
  },
});

type Color = 'default' | 'primary' | 'secondary';

const Page = () => {
  const classes = useStyles();
  const [color, setColor] = useState<Color>('default');

  const onClick = () => {
    switch (color) {
      case 'default':
        setColor('primary');
        break;
      case 'primary':
        setColor('secondary');
        break;
      case 'secondary':
        setColor('default');
        break;
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Typography>Content</Typography>
      <Fab className={classes.fab} color={color} onClick={onClick}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Page;
