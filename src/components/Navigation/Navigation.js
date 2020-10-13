import React, { useState } from 'react';
import styled from 'styled-components';
// components
import { Nav, Search } from './';

export const Navigation = () => {
  // show search bar
  const [isVisible, setVisible] = useState(false);
  const handleOpen = () => setVisible(true);
  const handleClose = () => setVisible(false);

  return (
    <StyledNav>
      <StyledContainer>
        {isVisible ? (
          <Search handleClose={handleClose} />
        ) : (
          <Nav handleOpen={handleOpen} />
        )}
      </StyledContainer>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  padding: 2.5rem 0;
  background-color: ${({ theme: { color } }) => color.nav};
`;

const StyledContainer = styled.header`
  width: 90%;
  margin: 0 auto;
`;
