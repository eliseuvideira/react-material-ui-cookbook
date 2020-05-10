import React, { useState, PropsWithChildren } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const HighlightPaper: React.FC<PropsWithChildren<PaperProps>> = ({
  children,
  elevation: propsElevation,
  ...props
}) => {
  const [elevation, setElevation] = useState(propsElevation);
  return (
    <Paper
      {...props}
      elevation={elevation}
      onMouseEnter={() => setElevation(5)}
      onMouseLeave={() => setElevation(1)}
    >
      {children}
    </Paper>
  );
};

HighlightPaper.defaultProps = {
  elevation: 1,
};

HighlightPaper.propTypes = {
  children: PropTypes.any.isRequired,
  elevation: PropTypes.number,
};

const Page = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <HighlightPaper className={classes.paper}>
            xs=12 sm=6 md=3
          </HighlightPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <HighlightPaper className={classes.paper}>
            xs=12 sm=6 md=3
          </HighlightPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <HighlightPaper className={classes.paper}>
            xs=12 sm=6 md=3
          </HighlightPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <HighlightPaper className={classes.paper}>
            xs=12 sm=6 md=3
          </HighlightPaper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
