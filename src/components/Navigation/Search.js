import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// icon
import { ReactComponent as ArrowBackSvg } from '../../assets/arrow-back.svg';
// components
import { Card, Container } from '../';
// api
import { useQuery } from 'react-query';
import { search } from '../../api';

export const Search = ({ closeSearchBar }) => {
  //input
  const [query, setQuery] = useState('');
  const handleQuery = e => {
    setQuery(e.target.value);
  };

  // search movies
  const { isIdle, isLoading, isError, data, refetch } = useQuery(
    ['search', query],
    search,
    {
      enabled: false,
    }
  );

  useEffect(() => {
    const handleRefetch = () => {
      if (query !== '') refetch();
    };
    handleRefetch();
  }, [query, refetch]);

  return (
    <StyledHeader>
      <StyledButton aria-label='go gack' onClick={closeSearchBar}>
        <StyledArrowLeft />
      </StyledButton>
      <StyledInput
        onChange={handleQuery}
        value={query}
        placeholder='Search movie or serie'
        type='text'
        autoFocus
      />
      <StyledOverlay>
        <Container>
          {isIdle ? (
            <StyledText>Search for results</StyledText>
          ) : isError ? (
            <StyledText>Error</StyledText>
          ) : isLoading ? (
            <StyledText>Searching...</StyledText>
          ) : (
            <StyledWrapper>
              {data.map(result => (
                <Card
                  key={result.id}
                  data={result}
                  mediaType={result.media_type}
                  onClick={closeSearchBar}
                />
              ))}
            </StyledWrapper>
          )}
        </Container>
      </StyledOverlay>
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
  padding: 0;
  padding-right: 1.6rem;
`;

const StyledArrowLeft = styled(ArrowBackSvg)`
  fill: ${({ theme: { color } }) => color.primary};
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  padding: 0.6rem;
  transition: background 0.3s ease;

  &:hover {
    background-color: ${({ theme: { color } }) => color.gray};
  }
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

const StyledOverlay = styled.div`
  position: fixed;
  top: 6.8rem;
  left: 0;
  bottom: 0;
  background-color: ${({ theme: { color } }) => color.filter};
  width: 100%;
  z-index: 2;
  overflow-y: auto;
  overflow-x: hidden;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const StyledText = styled.p`
  font-size: 1.6rem;
  color: ${({ theme: { color } }) => color.white};
  text-align: center;
`;

Search.propTypes = {
  closeSearchBar: PropTypes.func.isRequired,
};
