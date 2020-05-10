import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  Container,
  List,
  Typography,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import PropTypes from '../PropTypes';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

type CheckBoxData = { checked: boolean; label: string };

const CheckboxGroup: React.FC<{
  values: CheckBoxData[];
  label: string;
  onChange: (
    index: number,
  ) => ({ target: { checked } }: { target: { checked: boolean } }) => void;
}> = ({ values, label, onChange }) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">{label}</FormLabel>
    <FormGroup>
      {values.map((value, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox checked={value.checked} onChange={onChange(index)} />
          }
          label={value.label}
        />
      ))}
    </FormGroup>
  </FormControl>
);

CheckboxGroup.propTypes = {
  values: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Page = () => {
  const classes = useStyles();
  const [values, setValues] = useState<CheckBoxData[]>([
    { label: 'First', checked: false },
    { label: 'Second', checked: false },
    { label: 'Third', checked: false },
  ]);

  const onChange = (index: number) => ({
    target: { checked },
  }: {
    target: { checked: boolean };
  }) => {
    const newValues = [...values];
    const value = newValues[index];
    newValues[index] = { ...value, checked };
    setValues(newValues);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <CheckboxGroup
              label="Choices"
              values={values}
              onChange={onChange}
            />
          </Grid>
          <Grid item>
            <Typography variant="h6">Selection</Typography>
            <List>
              {values
                .filter((value) => value.checked)
                .map((value, index) => (
                  <ListItem key={index}>
                    <ListItemText>{value.label}</ListItemText>
                  </ListItem>
                ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Page;
