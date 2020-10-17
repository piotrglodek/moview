import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// hook
import { useImageError } from '../../hooks/useImageError';
// icon
import brokenImage from '../../assets/broken-image.svg';

export const MediaImage = ({ src, alt }) => {
  const [isError, handleImageError] = useImageError();
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
  width: 18.5rem;
  height: 27.8rem;
`;

MediaImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
