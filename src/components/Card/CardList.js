import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// // components
import { Card, CardSkeleton, Pagination } from '../';
// api
import { useQuery } from 'react-query';
import { fetchSection } from '../../api';

export const CardList = ({
  wrap,
  jusitfy,
  havePagination,
  title,
  url,
  mediaType,
  page,
}) => {
  const { isLoading, isError, data, error } = useQuery(
    [title, url, page],
    fetchSection
  );
  return (
    <>
      {isLoading ? (
        <StyledContainer
          wrap={wrap ? 'wrap' : 'nowrap'}
          jusitfy={jusitfy ? jusitfy : 'flex-start'}
        >
          <CardSkeleton n={20} />
        </StyledContainer>
      ) : isError ? (
        <p>Sorry, something went wrong. Couldn't fetch data.{error.message}</p>
      ) : (
        <>
          {havePagination && (
            <Pagination
              page={data.page}
              maxPage={data.total_pages}
              path={mediaType === 'movie' ? 'movies' : 'tv'}
            />
          )}
          <StyledContainer
            wrap={wrap ? 'wrap' : 'nowrap'}
            jusitfy={jusitfy ? jusitfy : 'flex-start'}
          >
            {data.results.map(result => (
              <Card key={result.id} data={result} mediaType={mediaType} />
            ))}
          </StyledContainer>
          {havePagination && (
            <Pagination
              page={data.page}
              maxPage={data.total_pages}
              path={mediaType === 'movie' ? 'movies' : 'tv'}
            />
          )}
        </>
      )}
    </>
  );
};

const StyledContainer = styled.article`
  padding: 2rem 0;
  display: flex;
  flex-wrap: ${({ wrap }) => wrap};
  justify-content: ${({ jusitfy }) => jusitfy};
`;

CardList.defaultProps = {
  url: '',
  wrap: false,
  jusitfy: 'flex-start',
  havePagination: false,
};
CardList.propTypes = {
  wrap: PropTypes.bool,
  havePagination: PropTypes.bool,
  jusitfy: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  mediaType: PropTypes.string.isRequired,
  page: PropTypes.number,
};
