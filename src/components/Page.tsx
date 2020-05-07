import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Snackbar,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const Page = () => {
  const classes = useStyles();
  const [vertical, setVertical] = useState<'bottom' | 'top'>('bottom');
  const [horizontal, setHorizontal] = useState<'center' | 'left' | 'right'>(
    'left',
  );

  const onVerticalChange = (event: any) => {
    setVertical(event.target.value);
  };

  const onHorizontalChange = (event: any) => {
    setHorizontal(event.target.value);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Vertical</FormLabel>
        <RadioGroup
          name="vertical"
          value={vertical}
          onChange={onVerticalChange}
        >
          <FormControlLabel value="top" control={<Radio />} label="Top" />
          <FormControlLabel value="bottom" control={<Radio />} label="Bottom" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Horizontal</FormLabel>
        <RadioGroup
          name="horizontal"
          value={horizontal}
          onChange={onHorizontalChange}
        >
          <FormControlLabel value="left" control={<Radio />} label="Left" />
          <FormControlLabel value="center" control={<Radio />} label="Center" />
          <FormControlLabel value="right" control={<Radio />} label="Right" />
        </RadioGroup>
      </FormControl>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={true}
        message="Positioned Snackbar"
      />
    </div>
  );
};

export default Page;
