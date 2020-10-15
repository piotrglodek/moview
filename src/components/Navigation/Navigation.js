import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// components
import { Nav, Search, Container } from '../';

export const Navigation = () => {
  // show search bar
  const [isVisible, setVisible] = useState(false);
  const handleOpen = () => setVisible(true);
  const handleClose = () => setVisible(false);

  useEffect(() => {
    const handleBodyScroll = () => {
      isVisible
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto');
    };
    handleBodyScroll();
  }, [isVisible]);

  return (
    <StyledNav>
      <Container>
        {isVisible ? (
          <Search handleClose={handleClose} />
        ) : (
          <Nav handleOpen={handleOpen} />
        )}
      </Container>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  padding: 1.6rem 0;
  background-color: ${({ theme: { color } }) => color.nav};
`;
