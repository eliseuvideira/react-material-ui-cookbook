import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Grid,
  Paper,
  Table,
  TableHead,
  TableBody,
  Container,
  TableCell,
  TableSortLabel,
  TableRow,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(2),
    textAlign: 'center',
  },
}));

const sort = (prop: string, desc = true) => (a: any, b: any) => {
  const order = desc ? -1 : 1;
  if (a[prop] < b[prop]) {
    return -1 * order;
  }
  if (a[prop] > b[prop]) {
    return 1 * order;
  }
  return 0;
};

const Page = () => {
  const classes = useStyles();
  const [columns, setColumns] = useState<
    {
      name: string;
      active: boolean;
      numeric?: boolean;
      order?: 'asc' | 'desc';
    }[]
  >([
    { name: 'Name', active: true },
    { name: 'Created', active: false },
    { name: 'High', active: false, numeric: true },
    { name: 'Low', active: false, numeric: true },
    { name: 'Average', active: false, numeric: true },
  ]);
  const [rows, setRows] = useState([
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
  ]);

  const onSortClick = (index: number) => () => {
    setColumns(
      columns.map((column, i) => ({
        ...column,
        active: index === i,
        order:
          (index === i && column.order === 'desc' ? 'asc' : 'desc') ||
          undefined,
      })),
    );
    setRows(
      [...rows].sort(
        sort(
          columns[index].name.toLowerCase(),
          columns[index].order === 'desc',
        ),
      ),
    );
  };

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
                    {columns.map((column, index) => (
                      <TableCell
                        key={column.name}
                        align={column.numeric ? 'right' : 'inherit'}
                      >
                        <TableSortLabel
                          active={column.active}
                          direction={column.order}
                          onClick={onSortClick(index)}
                        >
                          {column.name}
                        </TableSortLabel>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.created.toLocaleString()}</TableCell>
                      <TableCell align="right">{row.high}</TableCell>
                      <TableCell align="right">{row.low}</TableCell>
                      <TableCell align="right">{row.average}</TableCell>
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
