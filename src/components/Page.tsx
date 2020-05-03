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
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  subItem: {
    paddingLeft: theme.spacing(3),
  },
}));

const MaybeBluetoothIcon: React.FC<{
  bluetooth: boolean;
  [key: string]: any;
}> = ({ bluetooth, ...props }) =>
  bluetooth ? (
    <BluetoothIcon {...props} />
  ) : (
    <BluetoothDisabledIcon {...props} />
  );

MaybeBluetoothIcon.propTypes = {
  bluetooth: PropTypes.bool.isRequired,
};

const Page = () => {
  const classes = useStyles();
  const [devices, setDevices] = useState([
    {
      name: 'Device 1',
      bluetooth: false,
      power: true,
    },
    {
      name: 'Device 2',
      bluetooth: true,
      power: true,
    },
    {
      name: 'Device 3',
      bluetooth: true,
      power: true,
    },
  ]);

  const onToggle = (index: number, prop: 'bluetooth' | 'power') => () => {
    const newDevices = [...devices];
    newDevices[index] = {
      ...newDevices[index],
      [prop]: !newDevices[index][prop],
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
                    <IconButton onClick={onToggle(index, 'bluetooth')}>
                      <MaybeBluetoothIcon
                        bluetooth={device.bluetooth}
                        color={device.bluetooth ? 'primary' : undefined}
                      />
                    </IconButton>
                    <IconButton onClick={onToggle(index, 'power')}>
                      <PowerSettingsNewIcon
                        color={device.power ? 'primary' : undefined}
                      />
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
