import React from 'react';
import styled from 'styled-components';
// components
import { NavLink } from './';

const links = [
  { label: 'Homepage', to: '/' },
  { label: 'Movies', to: '/movies' },
  { label: 'Series', to: '/series' },
];

export const Menu = () => {
  return (
    <StyledMenu>
      {links.map(({ label, to }) => (
        <StyledMenuItem key={label}>
          <NavLink label={label} to={to} />
        </StyledMenuItem>
      ))}
    </StyledMenu>
  );
};

const StyledMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  height: 100%;
`;

const StyledMenuItem = styled.li`
  margin-right: 1rem;
`;
