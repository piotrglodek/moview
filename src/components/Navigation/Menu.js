import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import { NavLink } from './NavLink';

export const links = [
  { label: 'Homepage', to: '/' },
  { label: 'Movies', to: '/movies/page/1' },
  { label: 'Series', to: '/tv/page/1' },
];

export const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <StyledMenu isOpen={isOpen}>
      {links.map(({ label, to }) => (
        <StyledMenuItem onClick={toggleMenu} key={label}>
          <NavLink label={label} to={to} />
        </StyledMenuItem>
      ))}
    </StyledMenu>
  );
};

const StyledMenu = styled.ul`
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media screen and (max-width: 600px) {
    position: fixed;
    z-index: 997;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme: { color } }) => color.nav};
    padding-top: 6.8rem;
    transition: all 0.3s ease;
  }
`;

const StyledMenuItem = styled.li`
  margin-right: 1rem;
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
`;

Menu.propTypes = {
  isOpen: PropTypes.bool,
  toggleMenu: PropTypes.func.isRequired,
};
