import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// icon
import brokenImage from '../../assets/broken-image.svg';
// hook
import { useCardImageError } from '../../hooks/useCardImageError';

export const CardImage = ({ src, alt }) => {
  const [isError, handleImageError] = useCardImageError();

  return (
    <StyledImage
      onError={handleImageError}
      src={isError ? brokenImage : src}
      alt={`${alt} image`}
    />
  );
};

const StyledImage = styled.img`
  display: block;
  border-radius: 0.2rem;
  width: 15.4rem;
  height: 23.1rem;
`;

CardImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
