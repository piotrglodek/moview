import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';

export const NavLink = ({ label, to, activeWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeWhenExact,
  });
  let active = match ? true : false;
  return (
    <StyledLink $isActive={active} to={to}>
      {label}
    </StyledLink>
  );
};

const bgColor = `rgba(255, 255, 255, 0.05)`;
const StyledLink = styled(Link)`
  color: ${({ theme: { color } }) => color.primary};
  font-weight: ${({ theme: { weight } }) => weight.medium};
  text-decoration: none;
  font-size: 1.6rem;
  padding: 0.5rem 2rem;
  border-radius: 0.2rem;
  background-color: ${({ $isActive }) => ($isActive ? bgColor : 'transparent')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${bgColor};
  }
`;

NavLink.defaultProps = {
  activeWhenExact: true,
};

NavLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  activeWhenExact: PropTypes.bool,
};
