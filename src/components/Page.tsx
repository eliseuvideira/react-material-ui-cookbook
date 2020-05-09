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
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask';

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

  return (
    <TextField
      type={visible ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onMouseDown={() => setVisible(true)}
              onMouseUp={() => setVisible(false)}
            >
              {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...(props as TextFieldProps)}
    />
  );
};

const ValidationField: React.FC<
  { isValid: (value: string) => boolean; value: string } & TextFieldProps
> = ({ isValid, value, ...props }) => {
  const empty = value === '';
  const valid = isValid(value);
  let startAdornment: any;

  if (empty) {
    startAdornment = null;
  } else {
    if (valid) {
      startAdornment = (
        <InputAdornment position="start">
          <CheckCircleIcon color="primary" />
        </InputAdornment>
      );
    } else {
      startAdornment = (
        <InputAdornment position="start">
          <ErrorIcon color="error" />
        </InputAdornment>
      );
    }
  }

  return (
    <TextField
      {...props}
      error={!empty && !valid}
      InputProps={{ startAdornment }}
    />
  );
};

ValidationField.propTypes = {
  isValid: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const PhoneInput: React.FC<any> = ({ inputRef, ...props }) => (
  <MaskedInput
    {...props}
    ref={(ref) => {
      inputRef(ref ? ref.inputElement : null);
    }}
    mask={[
      '(',
      /[1-9]/,
      /\d/,
      /\d/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ]}
    placeholderChar={'\u2000'}
  />
);

PhoneInput.propTypes = {
  inputRef: PropTypes.any,
};

const EmailInput: React.FC<any> = ({ inputRef, ...props }) => (
  <MaskedInput
    {...props}
    ref={(ref) => inputRef(ref ? ref.inputElement : null)}
    mask={emailMask}
  />
);

EmailInput.propTypes = {
  inputRef: PropTypes.any,
};

const Page = () => {
  const classes = useStyles();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid
        container
        spacing={4}
        className={classes.container}
        direction="column"
      >
        <Grid item>
          <PasswordField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            InputProps={{
              inputComponent: PhoneInput,
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              inputComponent: EmailInput,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
