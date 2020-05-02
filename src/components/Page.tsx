import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  CssBaseline,
  ListItem,
  ListItemText,
  List,
  ListItemIcon,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
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
  const [users, setUsers] = useState([
    { name: 'John Doe', selected: false },
    { name: 'Joseph Smith', selected: false },
    { name: 'Janice Patterson', selected: false },
  ]);

  const onClick = (index: number) => () => {
    const items = [...users];
    items[index] = { ...items[index], selected: !items[index].selected };
    setUsers(items);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <List>
            {users.map((user, index) => (
              <ListItem
                key={index}
                button
                selected={user.selected}
                onClick={onClick(index)}
              >
                <ListItemText primary={user.name} />
                <ListItemIcon>
                  <MaybeSelectedIcon
                    selected={user.selected}
                    Icon={() => <AccountCircleIcon />}
                  />
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
