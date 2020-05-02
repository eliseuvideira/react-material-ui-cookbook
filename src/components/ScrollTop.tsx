import React, { PropsWithChildren } from 'react';
import {
  useScrollTrigger,
  Zoom,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }),
);

const ScrollTop: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const trigger = useScrollTrigger();
  const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  const classes = useStyles();
  return (
    <Zoom in={trigger}>
      <div onClick={onClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
};

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ScrollTop;
