import React from 'react';
import styled from 'styled-components';

export const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

const StyledContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;
