import React, { useState, Children } from 'react';
import { Tabs, Tab, TabsProps } from '@material-ui/core';
import PropTypes from 'prop-types';

const TabContainer: React.FC<
  React.PropsWithChildren<Omit<Omit<TabsProps, 'value'>, 'onChange'>> & {
    value?: number;
  }
> = ({ children, value: propsValue, ...props }) => {
  const [value, setValue] = useState(propsValue);
  const onChange = (_: any, value: any) => {
    setValue(value);
  };
  return (
    <>
      <Tabs {...props} value={value} onChange={onChange}>
        {Children.map(children, (child: any) => (
          <Tab label={child.props.label} />
        ))}
      </Tabs>
      {Children.map(children, (child, index) =>
        index === value ? child : null,
      )}
    </>
  );
};

TabContainer.defaultProps = {
  value: 0,
};

TabContainer.propTypes = {
  children: PropTypes.any.isRequired,
  value: PropTypes.number,
};

export default TabContainer;
