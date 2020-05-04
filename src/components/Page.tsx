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
  TableRow,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from '@material-ui/core';
import PropTypes from '../PropTypes';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(2),
    textAlign: 'center',
  },
  card: {
    margin: theme.spacing(2),
    maxWidth: 300,
  },
}));

const SummaryCard: React.FC<{
  rowsSelected: number;
  low: number;
  high: number;
}> = ({ rowsSelected, low, high }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader title={`(${rowsSelected}) rows selected`} />
      <CardContent>
        <Grid container direction="column">
          <Grid item>
            <Grid container justify="space-between">
              <Grid item>
                <Typography>Low</Typography>
              </Grid>
              <Grid item>
                <Typography>{low}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justify="space-between">
              <Grid item>
                <Typography>High</Typography>
              </Grid>
              <Grid item>
                <Typography>{high}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justify="space-between">
              <Grid item>
                <Typography>Average</Typography>
              </Grid>
              <Grid item>
                <Typography>{(high + low) / 2}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

SummaryCard.propTypes = {
  rowsSelected: PropTypes.number.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired,
};

const Page = () => {
  const classes = useStyles();
  const [columns] = useState([
    { name: 'Name', active: false },
    { name: 'Created', active: false },
    { name: 'High', active: false, numeric: true },
    { name: 'Low', active: false, numeric: true },
    { name: 'Average', active: false, numeric: true },
  ]);
  const [rows, setRows] = useState<
    {
      id: number;
      name: string;
      created: Date;
      high: number;
      low: number;
      average: number;
      selected?: boolean;
    }[]
  >([
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

  const onRowClick = (id: number) => () => {
    const newRows = [...rows];
    const index = rows.findIndex((row) => row.id === id);
    const row = rows[index];
    newRows[index] = { ...row, selected: !row.selected };
    setRows(newRows);
  };
  const selected = rows.filter((row) => row.selected);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <SummaryCard
              rowsSelected={selected.length}
              high={selected.reduce((prev, curr) => prev + curr.high, 0)}
              low={selected.reduce((prev, curr) => prev + curr.low, 0)}
            />
            <Paper className={classes.paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.name}
                        align={column.numeric ? 'right' : 'inherit'}
                      >
                        {column.name}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.id}
                      onClick={onRowClick(row.id)}
                      selected={row.selected}
                    >
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
