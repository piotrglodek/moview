import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import { MovieCard, CardListSkeleton, withGap } from '../';
// API
import { useQuery } from 'react-query';
import { fetchAll } from '../../api';

const MovieCardItem = withGap(MovieCard);

export const MovieCardList = ({ fetch }) => {
  const { isLoading, isError, data, error } = useQuery(
    [fetch.title, fetch.url],
    fetchAll
  );

  return (
    <StyledWrapper>
      {isLoading ? (
        <CardListSkeleton />
      ) : isError ? (
        <p>Sorry, something wen wrong. Couldn't fetch data.{error.message}</p>
      ) : (
        data.results.map(result => (
          <MovieCardItem key={result.id} data={result} />
        ))
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.article`
  padding-bottom: 2rem;
  display: flex;
`;

MovieCardList.propTypes = {
  fetch: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};
