import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, IconButton } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

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

const Page = () => {
  const classes = useStyles();
  const [mic, setMic] = useState(true);
  const [volume, setVolume] = useState(true);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container>
        <Grid item>
          <IconButton
            color={mic ? 'primary' : 'default'}
            onClick={() => setMic(!mic)}
          >
            {mic ? <MicIcon /> : <MicOffIcon />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            color={volume ? 'primary' : 'default'}
            onClick={() => setVolume(!volume)}
          >
            {volume ? <VolumeUpIcon /> : <VolumeOffIcon />}
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
