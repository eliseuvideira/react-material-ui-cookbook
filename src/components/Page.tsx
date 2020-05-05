import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardMedia,
} from '@material-ui/core';
import grapeFruit from '../assets/images/grapefruit-slice-332-332.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 400,
  },
  content: {
    marginTop: theme.spacing(1),
  },
  actions: {
    justifyContent: 'flex-end',
  },
  media: {
    height: 332,
    width: 'auto',
  },
}));

const Page = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardHeader title="Grapefruit" subheader="Red" />
            <CardMedia
              className={classes.media}
              image={grapeFruit}
              title="Grapefruit"
            />
            <CardContent>
              <Typography>Mmmm. Grapefruit.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
