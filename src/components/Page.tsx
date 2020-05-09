import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    margin: theme.spacing(2),
  },
}));

const Page = () => {
  const classes = useStyles();
  const [inputs, setInputs] = useState([
    {
      id: 'phone',
      label: 'Phone',
      placeholder: '999-999-9999',
      value: '',
      error: false,
      helperText: 'Any valid phone number will do',
      getHelperText: (error: boolean) =>
        error
          ? 'Woops. Not a valid phone number'
          : 'Any valid phone number will do',
      isValid: (value: string) =>
        /^\+?\(?\d{3}\)?[-\s.]?\d{3}[-\s.]?\d{4,6}$/.test(value),
    },
    {
      id: 'email',
      label: 'Email',
      placeholder: 'john@acme.com',
      value: '',
      error: false,
      helperText: 'Any valid email address will do',
      getHelperText: (error: boolean) =>
        error
          ? 'Woops. Not a valid email address'
          : 'Any valid phone number will do',
      isValid: (value: string) => /\S+@\S+\.\S+/.test(value),
    },
  ]);

  const onChange = <T extends { target: { id: string; value: string } }>({
    target: { id, value },
  }: T): void => {
    const newInputs = [...inputs];
    const index = inputs.findIndex((input) => input.id === id);
    const input = newInputs[index];
    const isValid = input.isValid(value);

    newInputs[index] = {
      ...newInputs[index],
      value,
      error: !isValid,
      helperText: input.getHelperText(!isValid),
    };

    setInputs(newInputs);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container spacing={4} className={classes.container}>
        {inputs.map((input) => (
          <Grid item key={input.id}>
            <TextField
              id={input.id}
              label={input.label}
              placeholder={input.placeholder}
              helperText={input.helperText}
              value={input.value}
              onChange={onChange}
              error={input.error}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Page;
