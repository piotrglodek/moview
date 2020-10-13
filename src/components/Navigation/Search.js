import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// icon
import { ReactComponent as ArrowBackSvg } from '../../assets/arrow-back.svg';

export const Search = ({ handleClose }) => {
  //input
  const [value, setValue] = useState('');

  const handleSearch = e => {
    setValue(e.target.value.toLowerCase());
    console.log('query: ', value);
  };

  return (
    <StyledHeader>
      <StyledButton onClick={handleClose}>
        <StyledArrowLeft />
      </StyledButton>
      <StyledInput
        onChange={handleSearch}
        value={value}
        placeholder='search movie or serie'
        type='text'
        autoFocus
      />
      <StyledDrawerRoot>
        <StyledContainer>search results for {value}:</StyledContainer>
        <StyledDrawer onClick={handleClose} title='close' />
      </StyledDrawerRoot>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
`;

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
  margin-right: 1.6rem;
  transition: background 0.3s ease;

  &:hover {
    background-color: ${({ theme: { color } }) => color.gray};
  }
`;

const StyledArrowLeft = styled(ArrowBackSvg)`
  fill: ${({ theme: { color } }) => color.primary};
  width: 100%;
  height: 100%;
`;

const StyledInput = styled.input`
  border: 2px solid ${({ theme: { color } }) => color.gray};
  color: ${({ theme: { color } }) => color.white};
  font-size: 1.6rem;
  background-color: transparent;
  outline: none;
  width: 100%;
  border-radius: 0.2rem;
  padding: 0.5rem 2rem;
  transition: all 0.3s ease;

  &:focus,
  &:hover {
    border-color: ${({ theme: { color } }) => color.primary};
    background-color: ${({ theme: { color } }) => color.gray};
  }
`;

const StyledDrawerRoot = styled.div`
  position: fixed;
  top: 8.6rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledDrawer = styled.div`
  z-index: -1;
  position: fixed;
  top: 8.6rem;
  left: 0;
  right: 0;
  bottom: 0;
`;

const StyledContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

Search.propTypes = {
  handleClose: PropTypes.func,
};
