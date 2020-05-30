import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  FormControl,
  FormControlLabel,
  Container,
  FormLabel,
  RadioGroup as MaterialRadioGroup,
  Radio,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const options = [
  { label: 'First', value: 'first' },
  { label: 'Second', value: 'second', disabled: true },
  { label: 'Third', value: 'third' },
];

const RadioGroup: React.FC<{
  value: string;
  name: string;
  label: string;
  disabled?: boolean;
  options: { label: string; value: string; disabled?: boolean }[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ value, name, label, disabled, options, onChange }) => (
  <FormControl component="fieldset" disabled={disabled}>
    <FormLabel component="legend">{label}</FormLabel>
    <MaterialRadioGroup name={name} value={value} onChange={onChange}>
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          control={<Radio />}
          value={option.value}
          label={option.label}
          disabled={option.disabled}
        />
      ))}
    </MaterialRadioGroup>
  </FormControl>
);

RadioGroup.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Page = () => {
  const classes = useStyles();

  const [value, setValue] = useState('first');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <RadioGroup
          value={value}
          options={options}
          name="radio1"
          label="Pick One"
          onChange={onChange}
        />
      </Container>
    </div>
  );
};

export default Page;
