import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// icon
import { ReactComponent as SearchSvg } from '../../assets/search-icon.svg';

export const SearchIcon = ({ handleOpen }) => {
  return (
    <StyledButton aria-label='show search bar' onClick={handleOpen}>
      <StyledSearchIcon />
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

  &:hover {
    background-color: ${({ theme: { color } }) => color.gray};
  }
`;
const StyledSearchIcon = styled(SearchSvg)`
  fill: ${({ theme: { color } }) => color.primary};
  width: 100%;
  height: 100%;
`;

SearchIcon.propTypes = {
  handleOpen: PropTypes.func,
};
