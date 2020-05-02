import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  CssBaseline,
  ListItem,
  ListItemText,
  List,
  ListItemIcon,
  Avatar,
  Badge,
  Container,
} from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import PropTypes from 'prop-types';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import DeleteIcon from '@material-ui/icons/Delete';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  activeAvatar: {
    backgroundColor: theme.palette.primary[theme.palette.type],
  },
}));

const MaybeSelectedIcon: React.FC<{
  selected: boolean;
  Icon: () => JSX.Element;
}> = ({ selected, Icon }) => (selected ? <CheckCircleOutlineIcon /> : <Icon />);

MaybeSelectedIcon.propTypes = {
  selected: PropTypes.bool.isRequired,
  Icon: PropTypes.any.isRequired,
};

const Page = () => {
  const classes = useStyles();
  const [items] = useState([
    {
      name: 'Unread',
      updated: '2 minutes ago',
      Icon: MarkunreadIcon,
      notifications: 1,
    },
    {
      name: 'High Priority',
      updated: '30 minutes ago',
      Icon: PriorityHighIcon,
    },
    {
      name: 'Low Priority',
      updated: '3 hours ago',
      Icon: LowPriorityIcon,
    },
    {
      name: 'Junk',
      updated: '6 days ago',
      Icon: DeleteIcon,
    },
  ]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters>
        <Grid container>
          <Grid item xs={12}>
            <List>
              {items.map(({ Icon, name, updated, notifications }, index) => (
                <ListItem key={index} button>
                  <ListItemIcon>
                    <Badge
                      color={notifications ? 'secondary' : undefined}
                      badgeContent={notifications}
                    >
                      <Avatar
                        className={clsx({
                          [classes.activeAvatar]: notifications,
                        })}
                      >
                        <Icon />
                      </Avatar>
                    </Badge>
                  </ListItemIcon>
                  <ListItemText primary={name} secondary={updated} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Page;
