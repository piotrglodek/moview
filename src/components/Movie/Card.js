import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = () => {
  return (
    <StyledCard to='/'>
      <StyledCardImage url={''} />
      <StyledCardOverlay>
        <StyledCardTitle>Title</StyledCardTitle>
        <StyledCardSubTitle>SubTitle</StyledCardSubTitle>
        <StyledCardCategories>
          <StyledCardCategory>Category</StyledCardCategory>
          <StyledCardCategory>Category 2</StyledCardCategory>
        </StyledCardCategories>
        <StyledCardRating>Number</StyledCardRating>
      </StyledCardOverlay>
    </StyledCard>
  );
};

const StyledCard = styled(Link)`
  width: 14.8rem;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  height: 17.5rem;
  position: relative;
  text-decoration: none;
  display: block;
  transition: border 0.4s ease;
  scroll-snap-align: center;
  &:hover {
    border-color: ${({ theme: { color } }) => color.primary};
  }
`;

const StyledCardImage = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ url }) => url});
`;

const StyledCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.65) 45%,
    rgba(255, 255, 255, 0) 100%
  );
  opacity: 0;
  visibility: hidden;
  padding: 1rem 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  ${StyledCard}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

const shared = css`
  color: ${({ theme: { color } }) => color.white};
  font-weight: ${({ theme: { weight } }) => weight.regular};
  margin: 0;
  margin-bottom: 0.2rem;
  font-size: 0.9rem;
`;

const StyledCardTitle = styled.h2`
  ${shared};
  font-size: 1.5rem;
  font-weight: ${({ theme: { weight } }) => weight.medium};
  margin-bottom: 0.5rem;
`;
const StyledCardSubTitle = styled.p`
  ${shared}
`;
const StyledCardCategories = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const StyledCardCategory = styled.p`
  ${shared}
  margin-right:.3rem;
`;
const StyledCardRating = styled.p`
  ${shared}
`;

StyledCard.defaultProps = {
  to: '/',
};

StyledCard.propTypes = {
  to: PropTypes.string.isRequired,
};

StyledCardImage.propTypes = {
  url: PropTypes.string,
};
