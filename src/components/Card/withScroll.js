import React from 'react';
// scroll bar
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export const withScroll = WrappedComponent => props => {
  return (
    <SimpleBar timeout={2000}>
      <WrappedComponent {...props} wrap={false} />
    </SimpleBar>
  );
};
