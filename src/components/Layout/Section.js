import React from 'react';
import styled from 'styled-components';

export const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

const StyledSection = styled.section`
  padding: 3rem 0;
`;
