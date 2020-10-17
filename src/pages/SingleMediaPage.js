import React from 'react';
import PropTypes from 'prop-types';
import { useParams, withRouter } from 'react-router-dom';
// components
import { Media, Container, MediaSkeleton } from '../components';
// api
import { useQuery } from 'react-query';
import { fetchMedia } from '../api';

const MediaWithRouter = withRouter(Media);

export const SingleMediaPage = ({ mediaType }) => {
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery([mediaType, id], fetchMedia);
  return (
    <Container>
      {isLoading ? (
        <MediaSkeleton />
      ) : isError ? (
        'error'
      ) : (
        <MediaWithRouter data={data} mediaType={mediaType} />
      )}
    </Container>
  );
};

SingleMediaPage.propTypes = {
  mediaType: PropTypes.string.isRequired,
};
