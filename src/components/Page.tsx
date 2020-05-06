import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Snackbar,
  Button,
  SnackbarProps,
  Slide,
  Grow,
  Fade,
  Grid,
} from '@material-ui/core';
import PropTypes from '../PropTypes';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const CustomSnackbar: React.FC<
  {
    transition: 'slide' | 'grow' | 'fade';
    direction?: 'left' | 'right' | 'down' | 'up';
  } & SnackbarProps
> = ({ transition, direction, ...props }) => (
  <Snackbar
    TransitionComponent={
      {
        slide: Slide,
        grow: Grow,
        fade: Fade,
      }[transition]
    }
    TransitionProps={{ direction } as any}
    {...props}
  />
);

CustomSnackbar.propTypes = {
  transition: PropTypes.any,
  direction: PropTypes.any,
};

const Page = () => {
  const classes = useStyles();

  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container spacing={8}>
        <Grid item>
          <Button variant="contained" onClick={() => setFirst(true)}>
            Slide Down
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => setSecond(true)}>
            Slide Up
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => setThird(true)}>
            Grow
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => setFourth(true)}>
            Fade
          </Button>
        </Grid>
      </Grid>
      <CustomSnackbar
        open={first}
        onClose={() => setFirst(false)}
        autoHideDuration={5000}
        message="Slide Down"
        transition="slide"
        direction="down"
      />
      <CustomSnackbar
        open={second}
        onClose={() => setSecond(false)}
        autoHideDuration={5000}
        message="Slide Up"
        transition="slide"
        direction="up"
      />
      <CustomSnackbar
        open={third}
        onClose={() => setThird(false)}
        autoHideDuration={5000}
        message="Grow"
        transition="grow"
      />
      <CustomSnackbar
        open={fourth}
        onClose={() => setFourth(false)}
        autoHideDuration={5000}
        message="Fade"
        transition="fade"
      />
    </div>
  );
};

export default Page;
