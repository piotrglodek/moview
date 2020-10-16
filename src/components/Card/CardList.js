import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// // components
import { Card, CardSkeleton } from '../';
// api
import { useQuery } from 'react-query';
import { fetchSection } from '../../api';

export const CardList = ({ wrap, title, url, mediaType }) => {
  const { isLoading, isError, data, error, isFetching } = useQuery(
    [title, url],
    fetchSection
  );
  return (
    <StyledContainer wrap={wrap ? 'wrap' : 'nowrap'}>
      {isLoading || isFetching ? (
        <CardSkeleton n={20} />
      ) : isError ? (
        <p>Sorry, something went wrong. Couldn't fetch data.{error.message}</p>
      ) : (
        data.results.map(result => (
          <Card key={result.id} data={result} mediaType={mediaType} />
        ))
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.article`
  padding: 2rem 0;
  display: flex;
  flex-wrap: ${({ wrap }) => wrap};
`;

CardList.propTypes = {
  wrap: PropTypes.bool,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  mediaType: PropTypes.string.isRequired,
};
