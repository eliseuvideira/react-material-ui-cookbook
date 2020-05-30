import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  FormControl,
  FormControlLabel,
  Container,
  FormLabel,
  FormGroup,
  Switch,
  Checkbox,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const SwitchGroup: React.FC<{
  label: string;
  onChange: (
    index: number,
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: { checked?: boolean; label: string }[];
  checkbox?: boolean;
}> = ({ values, label, onChange, checkbox }) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">{label}</FormLabel>
    <FormGroup>
      {values.map((value, index) => (
        <FormControlLabel
          key={index}
          control={
            checkbox ? (
              <Checkbox checked={value.checked} onChange={onChange(index)} />
            ) : (
              <Switch checked={value.checked} onChange={onChange(index)} />
            )
          }
          label={value.label}
        />
      ))}
    </FormGroup>
  </FormControl>
);

SwitchGroup.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
  checkbox: PropTypes.bool,
};

const Page = () => {
  const classes = useStyles();

  const [values, setValues] = useState([
    { label: 'First', checked: false },
    { label: 'Second', checked: false },
    { label: 'Third', checked: false },
  ]);

  const onChange = (index: number) => () => {
    const newValues = [...values];
    const value = newValues[index];
    newValues[index] = { ...value, checked: !value.checked };
    setValues(newValues);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <SwitchGroup
          label="Switch Choices"
          values={values}
          onChange={onChange}
        />
        <SwitchGroup
          label="Checkbox Choices"
          values={values}
          onChange={onChange}
          checkbox
        />
      </Container>
    </div>
  );
};

export default Page;
