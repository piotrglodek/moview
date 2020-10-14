import React from 'react';
import styled from 'styled-components';

export const SectionTitle = ({ children }) => {
  return <StyledSectionTitle>{children}</StyledSectionTitle>;
};

const StyledSectionTitle = styled.p`
  margin: 2rem 0;
  color: ${({ theme: { color } }) => color.white};
  font-size: 1.4rem;
`;
