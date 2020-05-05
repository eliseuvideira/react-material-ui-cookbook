import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Grid,
  Card,
  CardHeader,
  CardMedia,
} from '@material-ui/core';
import grapeFruit from '../assets/images/grapefruit-slice-332-332.jpg';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 400,
  },
  media: {
    height: 332,
    width: 'auto',
  },
  header: {
    textAlign: 'center',
  },
});

const Page = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={grapeFruit}
              title="Grapefruit"
            />
            <CardHeader
              className={classes.header}
              title="Grapefruit"
              subheader="Red"
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
