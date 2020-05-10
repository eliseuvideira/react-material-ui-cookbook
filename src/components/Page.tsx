import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  chipInput: {
    minWidth: 300,
  },
});

const Page = () => {
  const classes = useStyles();
  const [values, setValues] = useState<any>([]);

  const onAdd = (chip: any) => {
    setValues([...values, chip]);
  };

  const onDelete = (_: any, index: any) => {
    setValues(values.filter((_: any, i: any) => i !== index));
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item>
          <ChipInput
            className={classes.chipInput}
            helperText="Type name, hit enter to type another"
            value={values}
            onAdd={onAdd}
            onDelete={onDelete}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
