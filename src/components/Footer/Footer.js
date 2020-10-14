import React from 'react';
import styled from 'styled-components';
// components
import { Container, Menu } from '../';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Menu />
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${({ theme: { color } }) => color.nav};
  padding: 3rem 0;
`;
