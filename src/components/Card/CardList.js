import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import { CardListSkeleton, CardItem, Card } from '../';
// api
import { useQuery } from 'react-query';
import { fetchAll } from '../../api';

export const CardList = ({ type }) => {
  const { isLoading, isError, data, error } = useQuery(
    [type.title, type.url],
    fetchAll
  );

  return (
    <StyledWrapper>
      {isLoading ? (
        <CardListSkeleton />
      ) : isError ? (
        <p>Sorry, something went wrong. Couldn't fetch data.{error.message}</p>
      ) : (
        data.results.map(result => (
          <CardItem key={result.id}>
            <Card
              data={result}
              to={type.to}
              title={type.to === 'movie' ? result.title : result.name}
              year={
                type.to === 'movie'
                  ? result.release_date
                  : result.first_air_date
              }
            />
          </CardItem>
        ))
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.article`
  padding: 2rem 0;
  display: flex;
`;

CardList.propTypes = {
  type: PropTypes.shape({
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};
