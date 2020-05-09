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
    { id: 'first', label: 'First', value: '' },
    { id: 'second', label: 'Second', value: '' },
    { id: 'third', label: 'Third', value: '' },
  ]);

  const onChange = <T extends { target: { id: string; value: string } }>({
    target: { id, value },
  }: T): void => {
    const newInputs = [...inputs];
    const index = inputs.findIndex((input) => input.id === id);
    newInputs[index] = { ...newInputs[index], value };
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
              value={input.value}
              onChange={onChange}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Page;
