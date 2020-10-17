import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
// components
import { Container, CardList } from '../components';

export const Show = ({ mediaType }) => {
  let { pageNumber } = useParams();
  pageNumber = parseInt(pageNumber);
  return (
    <Container>
      <CardList
        wrap
        jusitfy='center'
        havePagination
        mediaType={mediaType}
        title={mediaType}
        page={pageNumber}
        discover='discover'
      />
    </Container>
  );
};

Show.propTypes = {
  mediaType: PropTypes.string.isRequired,
};
