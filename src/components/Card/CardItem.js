import React from 'react';
import styled from 'styled-components';

export const CardItem = ({ children }) => {
  return <StyledCardItem>{children}</StyledCardItem>;
};

const StyledCardItem = styled.div`
  margin-right: 3rem;
  flex: 0 0 14.8rem;
`;
