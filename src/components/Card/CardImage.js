import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// icon
import brokenImage from '../../assets/broken-image.svg';

export const CardImage = ({ src, alt }) => {
  const [isError, setError] = useState(false);
  const imageError = () => setError(true);
  return (
    <StyledImage
      onError={imageError}
      src={isError ? brokenImage : src}
      alt={`${alt} image`}
    />
  );
};

const StyledImage = styled.img`
  display: block;
  border-radius: 0.5rem;
  width: 15.4rem;
  height: 23.1rem;
`;

CardImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
