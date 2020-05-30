import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  FormControl,
  FormControlLabel,
  Container,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import CarOutlinedIcon from '@material-ui/icons/DirectionsCarOutlined';
import CarIcon from '@material-ui/icons/DirectionsCar';
import BusOutlinedIcon from '@material-ui/icons/DirectionsBusOutlined';
import BusIcon from '@material-ui/icons/DirectionsBus';
import TrainOutlinedIcon from '@material-ui/icons/TrainOutlined';
import TrainIcon from '@material-ui/icons/Train';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Page = () => {
  const classes = useStyles();

  const [value, setValue] = useState('train');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <FormControl component="fieldset">
          <FormLabel component="legend">Travel Mode</FormLabel>
          <RadioGroup name="travel" value={value} onChange={onChange} row>
            <FormControlLabel
              value="car"
              control={
                <Radio
                  color="primary"
                  icon={<CarOutlinedIcon />}
                  checkedIcon={<CarIcon />}
                />
              }
              label="Car"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="bus"
              control={
                <Radio
                  color="primary"
                  icon={<BusOutlinedIcon />}
                  checkedIcon={<BusIcon />}
                />
              }
              label="Bus"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="train"
              control={
                <Radio
                  color="primary"
                  icon={<TrainOutlinedIcon />}
                  checkedIcon={<TrainIcon />}
                />
              }
              label="Train"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </FormControl>
      </Container>
    </div>
  );
};

export default Page;
