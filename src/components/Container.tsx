import React from 'react';
import { Grid, GridProps } from '@material-ui/core';

const Container = (props: Omit<Omit<GridProps, 'container'>, 'item'>) => {
  return <Grid container {...props} />;
};

export default Container;
