import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { CssBaseline, ListItem, ListItemText, List } from '@material-ui/core';

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

const Page = () => {
  const classes = useStyles();
  const [items, setItems] = useState([
    { name: 'First Item', timestamp: new Date(), selected: false },
    { name: 'Second Item', timestamp: new Date(), selected: false },
    { name: 'Third Item', timestamp: new Date(), selected: false },
  ]);

  const onClick = (index: number) => () => {
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      selected: !newItems[index].selected,
    };
    setItems(newItems);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <List>
            {items.map((item, index) => (
              <ListItem
                key={index}
                button
                dense
                selected={item.selected}
                onClick={onClick(index)}
              >
                <ListItemText
                  primary={item.name}
                  secondary={item.timestamp.toLocaleString()}
                  primaryTypographyProps={{
                    color: item.selected ? 'primary' : undefined,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
