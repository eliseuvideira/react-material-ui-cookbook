import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    margin: theme.spacing(2),
  },
}));

const CustomTextField: React.FC<{
  isInvalid: (value: string) => false | string;
  value: string;
  helperText?: string;
  [key: string]: any;
}> = ({ isInvalid, value, helperText, ...props }) => {
  const error = value !== '' && isInvalid(value);
  return (
    <TextField error={!!error} helperText={error || helperText} {...props} />
  );
};

CustomTextField.propTypes = {
  isInvalid: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  helperText: PropTypes.string,
};

const Page = () => {
  const classes = useStyles();
  const [inputs, setInputs] = useState([
    {
      id: 'phone',
      label: 'Phone',
      placeholder: '999-999-9999',
      value: '',
      helperText: 'Any valid phone number will do',
      isInvalid: (value: string) =>
        /^\+?\(?\d{3}\)?[-\s.]?\d{3}[-\s.]?\d{4,6}$/.test(value)
          ? false
          : 'Woops. Not a valid phone number',
    },
    {
      id: 'email',
      label: 'Email',
      placeholder: 'john@acme.com',
      value: '',
      helperText: 'Any valid email address will do',
      isInvalid: (value: string) =>
        /\S+@\S+\.\S+/.test(value) ? false : 'Woops. Not a valid email address',
    },
  ]);

  const onChange = <T extends { target: { id: string; value: string } }>({
    target: { id, value },
  }: T): void => {
    const newInputs = [...inputs];
    const index = inputs.findIndex((input) => input.id === id);

    newInputs[index] = {
      ...newInputs[index],
      value,
    };

    setInputs(newInputs);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container spacing={4} className={classes.container}>
        {inputs.map((input) => (
          <Grid item key={input.id}>
            <CustomTextField
              id={input.id}
              label={input.label}
              placeholder={input.placeholder}
              helperText={input.helperText}
              value={input.value}
              onChange={onChange}
              isInvalid={input.isInvalid}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Page;
