import React, { useState } from 'react';
import styled from 'styled-components';

export const Search = () => {
  // input
  const [value, setValue] = useState('');
  // search
  const handleSearch = e => {
    setValue(e.target.value);
  };
  // focus
  const [isFocused, setFocus] = useState(false);
  const handleFocus = () => {
    setFocus(prevState => !prevState);
  };

  return (
    <>
      <StyledInput
        onFocus={handleFocus}
        onChange={handleSearch}
        vlaue={value}
        placeholder='search movie or serie'
        type='text'
      />
      {isFocused && (
        <StyledDrawerRoot>
          <StyledContainer>search results for {value}:</StyledContainer>
          <StyledDrawer onClick={handleFocus} title='close' />
        </StyledDrawerRoot>
      )}
    </>
  );
};

const color = `rgba(255, 255, 255, 0.05)`;
const StyledInput = styled.input`
  border: 2px solid ${color};
  color: ${({ theme: { color } }) => color.white};
  font-size: 1.6rem;
  background-color: transparent;
  outline: none;
  width: 25rem;
  border-radius: 0.2rem;
  padding: 0.5rem 2rem;
  transition: all 0.3s ease;
  z-index: 1000;

  &:focus,
  &:hover {
    border-color: ${({ theme: { color } }) => color.primary};
    background-color: ${color};
  }
`;

const StyledDrawerRoot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledDrawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledContainer = styled.div`
  position: fixed;
  left: 0;
  top: 8.5rem;
  padding: 2rem;
`;
