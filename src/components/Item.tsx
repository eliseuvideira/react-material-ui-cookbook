import React from 'react';
import { Grid, GridProps } from '@material-ui/core';

const Item = (props: Omit<Omit<GridProps, 'container'>, 'item'>) => {
  return <Grid item {...props} />;
};

export default Item;
