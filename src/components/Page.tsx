import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Grid,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(2),
  },
}));

const fetchData = () => {
  const items = [
    {
      id: 1,
      name: 'First Item',
      created: new Date(),
      high: 2935,
      low: 1924,
      average: 2429.5,
    },
    {
      id: 2,
      name: 'Second Item',
      created: new Date(),
      high: 439,
      low: 231,
      average: 335,
    },
    {
      id: 3,
      name: 'Third Item',
      created: new Date(),
      high: 8239,
      low: 5629,
      average: 6934,
    },
    {
      id: 4,
      name: 'Fourth Item',
      created: new Date(),
      high: 3203,
      low: 3127,
      average: 3165,
    },
    {
      id: 5,
      name: 'Fifth Item',
      created: new Date(),
      high: 981,
      low: 879,
      average: 930,
    },
  ];
  return new Promise<any[]>((resolve) => {
    setTimeout(() => resolve(items), 1000);
  });
};

const Page = () => {
  const classes = useStyles();
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    fetchData().then((items: any[]) => setItems(items));
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Created</TableCell>
                    <TableCell align="right">High</TableCell>
                    <TableCell align="right">Low</TableCell>
                    <TableCell align="right">Average</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map(({ id, name, created, high, low, average }) => (
                    <TableRow key={id}>
                      <TableCell component="th" scope="row">
                        {name}
                      </TableCell>
                      <TableCell>{created.toLocaleString()}</TableCell>
                      <TableCell align="right">{high}</TableCell>
                      <TableCell align="right">{low}</TableCell>
                      <TableCell align="right">{average}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Page;
