import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  FormControl,
  Container,
  InputLabel,
  Select,
  MenuItem,
  Input,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
    maxWidth: 280,
  },
}));

const options = [
  { id: 1, label: 'First' },
  { id: 2, label: 'Second' },
  { id: 3, label: 'Third' },
  { id: 4, label: 'Fourth' },
  { id: 5, label: 'Fifth' },
];

const Page = () => {
  const classes = useStyles();

  const [selected, setSelected] = useState([]);

  const onChange = (event: React.ChangeEvent<any>) => {
    setSelected(event.target.value);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="multi">Value</InputLabel>
          <Select
            multiple
            value={selected}
            onChange={onChange}
            input={<Input id="multi" />}
          >
            {options.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Container>
    </div>
  );
};

export default Page;
