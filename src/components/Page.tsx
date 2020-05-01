import React, { useState } from 'react';
import {
  makeStyles,
  Grid,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  ListSubheader,
  Button,
  Collapse,
} from '@material-ui/core';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import { Route } from 'react-router';
import { BrowserRouter, NavLink, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DRAWER_WIDTH, APP_NAME } from '../utils/constants';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShowChartIcon from '@material-ui/icons/ShowChart';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: DRAWER_WIDTH,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarMenuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  borderRadius16: {
    borderRadius: 5,
  },
  padding5: {
    padding: theme.spacing(5),
  },
  activeListItem: {
    color: theme.palette.primary.main,
  },
  listSubheader: {
    padding: 0,
    minWidth: 0,
    color: 'inherit',
    '&:hover': {
      background: 'inherit',
    },
  },
  listSubheaderLabel: {
    justifyContent: 'flex-start',
  },
}));

const NavListItem: React.FC<{
  classes: any;
  Icon: any;
  label: string;
  to: string;
  active?: boolean;
  [key: string]: any;
}> = ({ classes, Icon, label, to, active, ...props }) => (
  <ListItem button component={NavLink} to={to} {...props}>
    <ListItemIcon
      classes={{ root: clsx({ [classes.activeListItem]: active }) }}
    >
      <Icon />
    </ListItemIcon>
    <ListItemText
      classes={{ root: clsx({ [classes.activeListItem]: active }) }}
    >
      <Typography>{label}</Typography>
    </ListItemText>
  </ListItem>
);

NavListItem.propTypes = {
  classes: PropTypes.any.isRequired,
  Icon: PropTypes.any.isRequired,
  label: PropTypes.any.isRequired,
  to: PropTypes.any.isRequired,
  active: PropTypes.bool,
};

const NavItem: React.FC<any> = (props) => (
  <Switch>
    <Route
      exact
      path={props.to}
      render={() => <NavListItem active={true} {...props} />}
    />
    <Route path="/" render={() => <NavListItem {...props} />} />
  </Switch>
);

NavItem.propTypes = {
  classes: PropTypes.any.isRequired,
  Icon: PropTypes.any.isRequired,
  label: PropTypes.any.isRequired,
  to: PropTypes.any.isRequired,
};

const Page = () => {
  const classes = useStyles();
  const [menus] = useState([
    {
      categoryId: 'cpu',
      categoryName: 'CPU',
      categoryItems: [
        { label: 'Add CPU', Icon: AddIcon, to: '/cpu/add' },
        { label: 'Remove CPU', Icon: RemoveIcon, to: '/cpu/remove' },
        { label: 'Usage', Icon: ShowChartIcon, to: '/cpu/usage' },
      ],
    },
    {
      categoryId: 'memory',
      categoryName: 'Memory',
      categoryItems: [
        { label: 'Add Memory', Icon: AddIcon, to: '/memory/add' },
        { label: 'Usage', Icon: ShowChartIcon, to: '/memory/usage' },
      ],
    },
    {
      categoryId: 'storage',
      categoryName: 'Storage',
      categoryItems: [
        { label: 'Add Storage', Icon: AddIcon, to: '/storage/add' },
        { label: 'Usage', Icon: ShowChartIcon, to: '/storage/usage' },
      ],
    },
    {
      categoryId: 'network',
      categoryName: 'Network',
      categoryItems: [
        {
          label: 'Add Network',
          Icon: AddIcon,
          to: '/network/add',
          disabled: true,
        },
        { label: 'Usage', Icon: ShowChartIcon, to: '/network/usage' },
      ],
    },
  ]);
  const [sections, setSections] = useState<string[]>([]);

  const toggleSection = (section: string) => () => {
    if (sections.includes(section)) {
      setSections(sections.filter((item) => item !== section));
    } else {
      setSections(sections.concat(section));
    }
  };

  return (
    <BrowserRouter>
      <Grid container className={classes.root}>
        <Grid item sm={12}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" className={classes.appBarMenuButton}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                {APP_NAME}
              </Typography>
            </Toolbar>
          </AppBar>
          <Toolbar />
        </Grid>
        <Grid item sm={12}>
          <Grid container className={classes.padding5}>
            <Grid item sm={12}>
              <Paper>
                {menus
                  .reduce(
                    (prev: any[], current): any =>
                      prev.concat(current.categoryItems),
                    [],
                  )
                  .map((item) => (
                    <Route
                      key={item.to}
                      exact
                      path={item.to}
                      render={() => <Typography>{item.label}</Typography>}
                    />
                  ))}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
        <Toolbar />
        <List>
          {menus.map((menu) => {
            const visible = sections.includes(menu.categoryId);
            return (
              <section key={menu.categoryName}>
                <ListSubheader>
                  <Button
                    disableRipple
                    classes={{
                      root: classes.listSubheader,
                      label: classes.listSubheaderLabel,
                    }}
                    onClick={toggleSection(menu.categoryId)}
                    fullWidth
                  >
                    {menu.categoryName}
                  </Button>
                </ListSubheader>
                <Collapse in={visible}>
                  {menu.categoryItems.map((item) => (
                    <NavItem
                      key={item.to}
                      className={classes.borderRadius16}
                      classes={classes}
                      Icon={item.Icon}
                      label={item.label}
                      to={item.to}
                    />
                  ))}
                </Collapse>
              </section>
            );
          })}
        </List>
      </Drawer>
    </BrowserRouter>
  );
};

export default Page;
