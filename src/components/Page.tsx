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
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DevicesIcon from '@material-ui/icons/Devices';
import NetworkWifiIcon from '@material-ui/icons/NetworkWifi';
import StorageIcon from '@material-ui/icons/Storage';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import BeenhereIcon from '@material-ui/icons/Beenhere';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

interface IExpansionItemProps {
  title: string;
  content: string;
  disabled?: boolean;
  hidden?: boolean;
  Icon: React.FC<any>;
}

const Page = () => {
  const classes = useStyles();
  const [panels] = useState<IExpansionItemProps[]>([
    { title: 'Devices', content: 'Devices Content ...', Icon: DevicesIcon },
    {
      title: 'Networks',
      content: 'Networks Content ...',
      Icon: NetworkWifiIcon,
    },
    { title: 'Storage', content: 'Storage Content ...', Icon: StorageIcon },
    {
      title: 'Pricing',
      content: 'Pricing Content ...',
      Icon: AttachMoneyIcon,
    },
    { title: 'Usage', content: 'Usage Content ...', Icon: ShowChartIcon },
    {
      title: 'Licensing',
      content: 'Licensing Content ...',
      Icon: BeenhereIcon,
    },
  ]);
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const onChangeExpandedIndex = (index: number) => () =>
    setExpandedIndex(index === expandedIndex ? -1 : index);
  return (
    <div className={classes.root}>
      <CssBaseline />
      {panels
        .filter(({ hidden }) => !hidden)
        .map(({ title, content, Icon, disabled }, index) => (
          <ExpansionPanel
            key={index}
            disabled={disabled}
            expanded={index === expandedIndex}
            onChange={onChangeExpandedIndex(index)}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Icon className={classes.icon} />
              <Typography variant="subtitle1">{title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{content}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
    </div>
  );
};

export default Page;
