import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// api
import { base_poster_url } from '../../api';
// icon
import { ReactComponent as ArrowBackSvg } from '../../assets/arrow-back.svg';
// component
import { MediaImage } from './MediaImage';
import { MediaHeader } from './MediaHeader';
import { withScroll, CardList } from '../';

const CardScrollList = withScroll(CardList);

export const Media = ({ data, mediaType, history }) => {
  const { id, poster_path, vote_average, genres, overview, tagline } = data;
  const poster_url = `${base_poster_url}w185${poster_path}`;
  let title = mediaType === 'movie' ? data.title : data.name;
  let year = parseInt(
    mediaType === 'movie' ? data.release_date : data.first_air_date
  );

  return (
    <StyledContainer>
      <StyledButton aria-label='go gack' onClick={() => history.goBack()}>
        <StyledArrowLeft />
      </StyledButton>
      <StyledWrapper>
        <StyledImgWrapper>
          <MediaImage src={poster_url} />
        </StyledImgWrapper>
        <StyledMediaWrapper>
          <MediaHeader
            title={title}
            tagline={tagline}
            subtitle={vote_average}
            text={overview}
            genre_ids={genres}
            year={year}
          />
        </StyledMediaWrapper>
      </StyledWrapper>
      <StyledText>
        Similar {mediaType === 'movie' ? 'movies' : 'series'}
      </StyledText>
      <CardScrollList wrap mediaType={mediaType} page={1} similar id={id} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 3rem 0;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  outline: none;
  margin: 0;
  cursor: pointer;
  padding: 0;
`;

const StyledArrowLeft = styled(ArrowBackSvg)`
  fill: ${({ theme: { color } }) => color.primary};
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  padding: 0.6rem;
  transition: background 0.3s ease;

  &:hover {
    background-color: ${({ theme: { color } }) => color.gray};
  }
`;

const StyledWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-wrap: wrap;
`;

const StyledImgWrapper = styled.div`
  width: 30%;
  padding-bottom: 2rem;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const StyledMediaWrapper = styled.div`
  width: 70%;
  padding-bottom: 2rem;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const StyledText = styled.p`
  margin-top: 3rem;
  color: ${({ theme: { color } }) => color.white};
  font-size: 1.6rem;
`;

Media.propTypes = {
  data: PropTypes.object.isRequired,
  mediaType: PropTypes.string.isRequired,
};
