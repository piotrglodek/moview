import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// icon
import { ReactComponent as ArrowBackSvg } from '../../assets/arrow-back.svg';
// components
import { Card } from '../';
// api
import { useQuery } from 'react-query';
import { searchAll } from '../../api';

export const Search = ({ handleClose }) => {
  //input
  const [query, setQuery] = useState('');
  const handleQuery = e => {
    setQuery(e.target.value);
  };

  // search movies
  const { isIdle, isLoading, isFetching, isError, data, refetch } = useQuery(
    ['search', query],
    searchAll,
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
      <StyledButton aria-label='go gack' onClick={handleClose}>
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
        {isIdle ? (
          <StyledText>Search for results</StyledText>
        ) : isError ? (
          <StyledText>Error</StyledText>
        ) : isLoading || isFetching ? (
          <StyledText>searching...</StyledText>
        ) : (
          <StyledRow>
            {data.map(result => {
              return (
                <StyledSearchItem key={result.id}>
                  <Card
                    data={result}
                    to={result.media_type}
                    title={
                      result.media_type === 'movie' ? result.title : result.name
                    }
                    year={
                      result.media_type === 'movie'
                        ? result.release_date
                        : result.first_air_date
                    }
                  />
                </StyledSearchItem>
              );
            })}
          </StyledRow>
        )}
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

const StyledOverlay = styled.div`
  position: fixed;
  top: 6.8rem;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  z-index: 2;
  overflow-y: auto;
  overflow-x: hidden;
`;

const StyledRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const StyledText = styled.p`
  font-size: 1.6rem;
  color: ${({ theme: { color } }) => color.white};
  text-align: center;
`;

const StyledSearchItem = styled.div`
  margin: 1rem;
`;

Search.propTypes = {
  handleClose: PropTypes.func,
};
