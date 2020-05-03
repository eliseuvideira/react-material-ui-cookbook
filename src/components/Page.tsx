import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  CssBaseline,
  ListItem,
  ListItemText,
  List,
  Container,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import BluetoothDisabledIcon from '@material-ui/icons/BluetoothDisabled';
import DevicesIcon from '@material-ui/icons/Devices';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  subItem: {
    paddingLeft: theme.spacing(3),
  },
}));

const MaybeBluetoothIcon: React.FC<{ bluetooth: boolean }> = ({ bluetooth }) =>
  bluetooth ? <BluetoothIcon /> : <BluetoothDisabledIcon />;

MaybeBluetoothIcon.propTypes = {
  bluetooth: PropTypes.bool.isRequired,
};

const Page = () => {
  const classes = useStyles();
  const [devices, setDevices] = useState([
    {
      name: 'Device 1',
      bluetooth: false,
    },
    {
      name: 'Device 2',
      bluetooth: true,
    },
    {
      name: 'Device 3',
      bluetooth: true,
    },
  ]);

  const onClick = (index: number) => () => {
    const newDevices = [...devices];
    newDevices[index] = {
      ...newDevices[index],
      bluetooth: !newDevices[index].bluetooth,
    };
    setDevices(newDevices);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters>
        <Grid container>
          <Grid item xs={12}>
            <List>
              {devices.map((device, index) => (
                <ListItem key={index} button>
                  <ListItemIcon>
                    <DevicesIcon />
                  </ListItemIcon>
                  <ListItemText primary={device.name} />
                  <ListItemSecondaryAction>
                    <IconButton onClick={onClick(index)}>
                      <MaybeBluetoothIcon bluetooth={device.bluetooth} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Page;
