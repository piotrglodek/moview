import React from 'react';
import styled from 'styled-components';
// components
import { Logo, Menu, Search } from './';

export const Navigation = () => {
  return (
    <StyledNav>
      <StyledContainer>
        <Logo />
        <Menu />
        <Search />
      </StyledContainer>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  padding: 2.5rem 0;
  background-color: ${({ theme: { color } }) => color.gray};
`;

const StyledContainer = styled.header`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
