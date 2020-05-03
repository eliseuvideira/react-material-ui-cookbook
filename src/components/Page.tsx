import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  CssBaseline,
  ListItem,
  ListItemText,
  List,
  Container,
  ListItemIcon,
  Collapse,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import ContactsIcon from '@material-ui/icons/Contacts';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PropTypes from 'prop-types';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  subItem: {
    paddingLeft: theme.spacing(3),
  },
}));

const ExpandIcon: React.FC<{ expanded: boolean }> = ({ expanded }) =>
  expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />;

ExpandIcon.propTypes = {
  expanded: PropTypes.bool.isRequired,
};

const Page = () => {
  const classes = useStyles();
  const [items, setItems] = useState([
    {
      name: 'Messages',
      Icon: InboxIcon,
      expanded: false,
      children: [
        { name: 'First Message', Icon: MailIcon },
        { name: 'Second Message', Icon: MailIcon },
      ],
    },
    {
      name: 'Contacts',
      Icon: ContactsIcon,
      expanded: false,
      children: [
        { name: 'First Contact', Icon: ContactMailIcon },
        { name: 'Second Contact', Icon: ContactMailIcon },
      ],
    },
  ]);

  const onClick = (index: number) => () => {
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      expanded: !newItems[index].expanded,
    };
    setItems(newItems);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters>
        <Grid container>
          <Grid item xs={12}>
            <List>
              {items.map((item, index) => (
                <>
                  <ListItem button onClick={onClick(index)}>
                    <ListItemIcon>
                      <item.Icon />
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                    <ExpandIcon expanded={item.expanded} />
                  </ListItem>
                  <Collapse in={item.expanded}>
                    {item.children.map((child) => (
                      <ListItem
                        key={child.name}
                        button
                        dense
                        className={classes.subItem}
                      >
                        <ListItemIcon>
                          <child.Icon />
                        </ListItemIcon>
                        <ListItemText primary={child.name} />
                      </ListItem>
                    ))}
                  </Collapse>
                </>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Page;
