import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  TextFieldProps,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    margin: theme.spacing(2),
  },
}));

const PasswordField: React.FC<Omit<TextFieldProps, 'type'>> = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <TextField
      type={visible ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={toggleVisibility}>
              {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...(props as TextFieldProps)}
    />
  );
};

const Page = () => {
  const classes = useStyles();
  const [password, setPassword] = useState('');

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container spacing={4} className={classes.container}>
        <Grid item>
          <PasswordField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
