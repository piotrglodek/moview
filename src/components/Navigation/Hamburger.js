import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// icons
import { ReactComponent as CloseSvg } from '../../assets/close-icon.svg';
import { ReactComponent as HamburgerSvg } from '../../assets/hamburger-icon.svg';

export const Hamburger = ({ toggleMenu, isOpen }) => {
  return (
    <StyledButton aria-label='open menu' onClick={toggleMenu}>
      {isOpen ? <StyledClose /> : <StyledHamburger />}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: none;
  border: none;
  outline: none;
  margin: 0;
  cursor: pointer;
  border-radius: 50%;
  width: 3.6rem;
  height: 3.6rem;
  padding: 0.6rem;
  transition: background 0.3s ease;
  z-index: 999;

  &:hover {
    background-color: ${({ theme: { color } }) => color.gray};
  }

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const shared = css`
  fill: ${({ theme: { color } }) => color.primary};
  width: 100%;
  height: 100%;
`;
const StyledHamburger = styled(HamburgerSvg)`
  ${shared}
`;
const StyledClose = styled(CloseSvg)`
  ${shared}
`;

Hamburger.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
