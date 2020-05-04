/* eslint-disable react/prop-types */
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
  IconButton,
} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';

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

const StartButton: React.FC<{
  onClick: (...args: any) => any;
}> = ({ onClick }) => (
  <IconButton onClick={onClick} color="primary">
    <PlayArrowIcon fontSize="small" />
  </IconButton>
);

const StopButton: React.FC<{
  onClick: (...args: any) => any;
}> = ({ onClick }) => (
  <IconButton onClick={onClick} color="primary">
    <StopIcon fontSize="small" />
  </IconButton>
);

const Page = () => {
  const classes = useStyles();
  const [rows, setRows] = useState<
    {
      id: number;
      name: string;
      status: 'running' | 'off';
    }[]
  >([
    {
      id: 1,
      name: 'First Server',
      status: 'running',
    },
    {
      id: 2,
      name: 'Second Server',
      status: 'off',
    },
    {
      id: 3,
      name: 'Third Server',
      status: 'off',
    },
    {
      id: 4,
      name: 'Fourth Server',
      status: 'running',
    },
  ]);

  const toggleStatus = (id: number) => () => {
    const newRows = [...rows];
    const index = rows.findIndex((row) => row.id === id);
    const row = rows[index];
    newRows[index] = {
      ...row,
      status: row.status === 'running' ? 'off' : 'running',
    };
    setRows(newRows);
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
                    <TableCell>Name</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>
                        {row.status === 'off' ? (
                          <StartButton onClick={toggleStatus(row.id)} />
                        ) : (
                          <StopButton onClick={toggleStatus(row.id)} />
                        )}
                      </TableCell>
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
