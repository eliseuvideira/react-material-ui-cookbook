import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  CssBaseline,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Page = () => {
  const classes = useStyles();
  const [panels] = useState([
    { title: 'First Panel Title', content: 'First Panel Content' },
    {
      title: 'Second Panel Title',
      content: 'Second Panel Content',
      hidden: true,
    },
    {
      title: 'Third Panel Title',
      content: 'Third Panel Content',
      disabled: true,
    },
    { title: 'Fourth Panel Title', content: 'Fourth Panel Content' },
    { title: 'Fifth Panel Title', content: 'Fifth Panel Content' },
    { title: 'Sixth Panel Title', content: 'Sixth Panel Content' },
    { title: 'Seventh Panel Title', content: 'Seventh Panel Content' },
  ]);
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const onChangeExpandedIndex = (index: number) => () =>
    setExpandedIndex(index === expandedIndex ? -1 : index);
  return (
    <div className={classes.root}>
      <CssBaseline />
      {panels
        .filter((panel) => !panel.hidden)
        .map((panel, index) => (
          <ExpansionPanel
            key={index}
            disabled={panel.disabled}
            expanded={index === expandedIndex}
            onChange={onChangeExpandedIndex(index)}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{panel.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{panel.content}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
    </div>
  );
};

export default Page;
