import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
// api
import { base_poster_url, fetchSerieGenres } from '../../api';
import { useQuery } from 'react-query';

export const SerieCard = ({ data }) => {
  const {
    id,
    name,
    vote_average,
    poster_path,
    genre_ids,
    first_air_date,
  } = data;
  let poster_url = `${base_poster_url}${poster_path}`;
  let releaseYear = parseInt(first_air_date);
  const genres = useQuery(['Fetch genres', genre_ids], fetchSerieGenres);
  return (
    <StyledCard to={`/serie/${id}`}>
      <StyledCardImage src={poster_url} alt={`${name} poster image`} />
      <StyledCardOverlay>
        <StyledCardTitle>{name}</StyledCardTitle>
        <StyledCardSubTitle>{releaseYear}</StyledCardSubTitle>
        <StyledCardCategories>
          {!genres.isLoading &&
            genres.data.map(genre => (
              <StyledCardCategory key={genre}>{genre}</StyledCardCategory>
            ))}
        </StyledCardCategories>
        <StyledCardRating>{vote_average}</StyledCardRating>
      </StyledCardOverlay>
    </StyledCard>
  );
};

const StyledCard = styled(Link)`
  position: relative;
  text-decoration: none;
  display: block;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  transition: border 0.4s ease;
  height: 23.1rem;
  &:hover {
    border-color: ${({ theme: { color } }) => color.primary};
  }
`;

const StyledCardImage = styled.img`
  display: block;
  border-radius: 0.5rem;
  height: 100%;
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
    rgba(0, 0, 0, 0.7) 100%,
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
  font-weight: ${({ theme: { weight } }) => weight.medium};
  margin: 0;
  margin-bottom: 0.2rem;
  font-size: 1.1rem;
`;

const StyledCardTitle = styled.h2`
  ${shared};
  font-size: 1.4rem;
  font-weight: ${({ theme: { weight } }) => weight.bold};
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
  color:${({ theme: { color } }) => color.primary};
`;

SerieCard.propTypes = {
  data: PropTypes.object,
};

StyledCard.defaultProps = {
  to: '/',
};

StyledCard.propTypes = {
  to: PropTypes.string.isRequired,
};

StyledCardImage.propTypes = {
  url: PropTypes.string,
};
