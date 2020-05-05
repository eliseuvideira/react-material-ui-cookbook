import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  CssBaseline,
  Card,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

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
            <CardHeader
              title="Ron Swanson"
              subheader="Legend"
              avatar={
                <Avatar>
                  <PersonIcon />
                </Avatar>
              }
            />
            <CardContent>
              <Typography variant="caption">Joined 2009</Typography>
              <Typography>
                Some filler text about the user. There doesn&apos;t have to be a
                lot - just enough so that the text span at least two lines.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
