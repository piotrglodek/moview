import React from 'react';
import styled from 'styled-components';

export const withGap = WrappedComponent => props => {
  return (
    <StyledCardItem>
      <WrappedComponent {...props} />
    </StyledCardItem>
  );
};

const StyledCardItem = styled.div`
  margin-right: 2rem;
  flex: 0 0 14.8rem;
`;
