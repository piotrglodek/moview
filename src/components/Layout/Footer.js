import React from 'react';
import styled from 'styled-components';
// components
import { Container } from '../';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledText>Moview Copyrights reserved &copy; 2020</StyledText>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${({ theme: { color } }) => color.nav};
  padding: 3rem 0;
`;
const StyledText = styled.p`
  margin: 0;
  color: ${({ theme: { color } }) => color.white};
  text-align: center;
`;
