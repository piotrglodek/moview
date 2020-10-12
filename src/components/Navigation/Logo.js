import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return <StyledLogo to='/'>Moview</StyledLogo>;
};

const StyledLogo = styled(Link)`
  color: ${({ theme: { color } }) => color.primary};
  font-weight: ${({ theme: { weight } }) => weight.medium};
  font-size: 2.4rem;
  display: block;
  text-decoration: none;
`;
