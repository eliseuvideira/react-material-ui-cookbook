import React, { useState, useEffect } from 'react';
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
  CircularProgress,
  InputAdornment,
  TextField,
} from '@material-ui/core';
import PropTypes from '../PropTypes';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(2),
    textAlign: 'center',
  },
  progress: {
    margin: theme.spacing(2),
  },
  search: {
    marginLeft: theme.spacing(2),
  },
}));

const MaybeLoading: React.FC<{ loading?: boolean }> = ({ loading }) => {
  const classes = useStyles();
  return loading ? <CircularProgress className={classes.progress} /> : null;
};

MaybeLoading.propTypes = {
  loading: PropTypes.bool,
};

const fetchData = () => {
  const items = new Array(100).fill(null).map((_, i) => {
    const id = i + 1;
    const high = Math.floor(Math.random() * 2000);
    const low = high - Math.floor(Math.random() * 20);
    return {
      id,
      name: `${id} Item`,
      created: new Date(),
      high,
      low,
      average: (high + low) / 2,
    };
  });
  return new Promise<any[]>((resolve) => {
    setTimeout(() => resolve(items), 500 + Math.floor(Math.random() * 1000));
  });
};

const Page = () => {
  const classes = useStyles();
  const [search, setSearch] = useState<string>('');
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  const onSearchChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              value={search}
              onChange={onSearchChange}
              className={classes.search}
              id="input-search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
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
                  {items
                    .filter((item) => !search || item.name.includes(search))
                    .map((item) => (
                      <TableRow key={item.id}>
                        <TableCell component="th" scope="row">
                          {item.name}
                        </TableCell>
                        <TableCell>{item.created.toLocaleString()}</TableCell>
                        <TableCell align="right">{item.high}</TableCell>
                        <TableCell align="right">{item.low}</TableCell>
                        <TableCell align="right">{item.average}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
              <MaybeLoading loading={loading} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Page;
