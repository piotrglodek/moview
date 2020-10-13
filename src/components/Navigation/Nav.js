import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import { Logo, Menu, SearchIcon } from './';

export const Nav = ({ handleOpen }) => {
  return (
    <StyledContainer>
      <Logo />
      <Menu />
      <SearchIcon handleOpen={handleOpen} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Nav.propTypes = {
  handleOpen: PropTypes.func,
};
