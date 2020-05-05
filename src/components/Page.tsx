import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { CssBaseline, Card, CardContent, Typography } from '@material-ui/core';

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
}));

const Page = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h4">Subject Title</Typography>
              <Typography variant="subtitle1">
                A little more about subject
              </Typography>
              <Typography className={classes.content}>
                Even more information on the subject, contained within the card.
                You can fit a lot of information here, but don&apos;t try to
                overdo it.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
