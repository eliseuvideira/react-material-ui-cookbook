import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  Container,
} from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import BackupIcon from '@material-ui/icons/Backup';
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
import BuildIcon from '@material-ui/icons/Build';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const initialItems = [
  {
    name: 'AccountBalance',
    Icon: AccountBalanceOutlinedIcon,
    CheckedIcon: AccountBalanceIcon,
  },
  {
    name: 'Backup',
    Icon: BackupOutlinedIcon,
    CheckedIcon: BackupIcon,
  },
  {
    name: 'Build',
    Icon: BuildOutlinedIcon,
    CheckedIcon: BuildIcon,
  },
];

const Page = () => {
  const classes = useStyles();
  const [items, setItems] = useState<any>({});

  useEffect(() => {
    setItems(
      initialItems.reduce(
        (state, item) => ({ ...state, [item.name]: false }),
        {},
      ),
    );
  }, []);

  const onChange = ({
    target: { name, checked },
  }: {
    target: { name: string; checked: boolean };
  }) => {
    setItems({ ...items, [name]: checked });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <FormGroup>
              {initialItems.map(({ name, Icon, CheckedIcon }, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      color="primary"
                      checked={items[name]}
                      onChange={onChange}
                      inputProps={{ name }}
                      icon={<Icon fontSize="small" />}
                      checkedIcon={<CheckedIcon fontSize="small" />}
                    />
                  }
                  label={name}
                />
              ))}
            </FormGroup>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Page;
