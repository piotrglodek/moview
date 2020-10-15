import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import { Logo, Menu, SearchIcon, Hamburger } from '../';
// hook
import { useToggleMenu } from '../../hooks/useToggleMenu';

export const Nav = ({ openSearchBar }) => {
  const [isOpen, toggleMenu] = useToggleMenu();

  return (
    <StyledContainer>
      <Logo />
      <Menu isOpen={isOpen} />
      <SearchIcon openSearchBar={openSearchBar} />
      <Hamburger toggleMenu={toggleMenu} isOpen={isOpen} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Nav.propTypes = {
  openSearchBar: PropTypes.func.isRequired,
};
