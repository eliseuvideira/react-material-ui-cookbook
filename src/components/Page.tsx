/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  CssBaseline,
  ListItem,
  ListItemText,
  List,
  Container,
  Paper,
} from '@material-ui/core';
import { AutoSizer, List as VirtualList } from 'react-virtualized';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  list: {
    height: 300,
  },
  paper: {
    margin: theme.spacing(3),
  },
}));

const Page = () => {
  const classes = useStyles();
  const [items] = useState(
    new Array(1000).fill(null).map((_, i) => `Item ${i + 1}`),
  );
  const rowRenderer: (props: any) => any = ({
    index,
    isScrolling,
    key,
    style,
  }) => {
    const item = items[index];
    return (
      <ListItem button key={key} style={style}>
        <ListItemText primary={isScrolling ? '...' : item} />
      </ListItem>
    );
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters>
        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <List className={classes.list} disablePadding>
                <AutoSizer disableHeight>
                  {({ width }) => (
                    <VirtualList
                      width={width}
                      height={300}
                      rowHeight={50}
                      rowCount={items.length}
                      rowRenderer={rowRenderer}
                    />
                  )}
                </AutoSizer>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Page;
