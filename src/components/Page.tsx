import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Collapse,
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from '../PropTypes';
import PersonIcon from '@material-ui/icons/Person';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 400,
  },
  expand: {
    marginLeft: 'auto',
  },
});

const ExpandIcon: React.FC<{ expanded?: boolean }> = ({ expanded }) =>
  expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />;

ExpandIcon.propTypes = {
  expanded: PropTypes.bool,
};

const Page = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

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
                lot - just enough so that the text spans at least two lines.
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <ContactMailIcon />
              </IconButton>
              <IconButton>
                <ContactPhoneIcon />
              </IconButton>
              <IconButton className={classes.expand} onClick={toggleExpanded}>
                <ExpandIcon expanded={expanded} />
              </IconButton>
            </CardActions>
            <Collapse in={expanded}>
              <CardContent>
                <Typography>
                  Even more filler text about the user. It doesn&apos;t fit in
                  the main content area of the card, so this is what the user
                  will see when they click the expand button.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
