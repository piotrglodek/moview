import React from 'react';
import styled from 'styled-components';
// components
import { Nav, Search, Container } from '../';
// hook
import { useToggleSearchBar } from '../../hooks/useToggleSearchBar';

export const Navigation = () => {
  // show search bar
  const [isVisible, openSearchBar, closeSearchBar] = useToggleSearchBar();

  return (
    <StyledNav>
      <Container>
        {isVisible ? (
          <Search closeSearchBar={closeSearchBar} />
        ) : (
          <Nav openSearchBar={openSearchBar} />
        )}
      </Container>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  padding: 1.6rem 0;
  background-color: ${({ theme: { color } }) => color.nav};
`;
