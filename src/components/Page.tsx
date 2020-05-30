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
  Chip,
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
  chip: {
    margin: theme.spacing(1),
    fontSize: 10,
    maxHeight: 25,
    marginTop: -3,
  },
}));

const options = [
  { id: 1, label: 'First' },
  { id: 2, label: 'Second' },
  { id: 3, label: 'Third' },
  { id: 4, label: 'Fourth' },
  { id: 5, label: 'Fifth' },
];

const Selected = ({ selected }: { selected: any }) => {
  const classes = useStyles();

  return selected.map((value: any) => (
    <Chip
      key={value}
      label={
        (options.find((option) => option.id === value) || { label: '' }).label
      }
      className={classes.chip}
    />
  ));
};

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
            renderValue={(selected) => <Selected selected={selected} />}
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
