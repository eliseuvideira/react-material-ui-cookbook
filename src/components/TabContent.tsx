import React from 'react';
import PropTypes from 'prop-types';

const TabContent: React.FC<React.PropsWithChildren<
  { label: string } & React.HTMLAttributes<HTMLDivElement>
>> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

TabContent.propTypes = {
  children: PropTypes.any.isRequired,
};

export default TabContent;
