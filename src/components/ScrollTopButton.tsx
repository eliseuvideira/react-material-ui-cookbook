import React from 'react';
import ScrollTop from './ScrollTop';
import { Fab } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const ScrollTopButton = () => (
  <ScrollTop>
    <Fab color="secondary" size="small" aria-label="scroll back to top">
      <KeyboardArrowUpIcon />
    </Fab>
  </ScrollTop>
);

export default ScrollTopButton;
