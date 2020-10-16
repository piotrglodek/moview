import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const CardFooter = ({ title, year }) => {
  return (
    <StyledFooter>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{year}</StyledSubtitle>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 1rem 0 0.5rem;
  width: 15.4rem;
`;

const shared = css`
  margin: 0;
`;
const StyledTitle = styled.h2`
  ${shared}
  font-size: 1.4rem;
  margin-bottom: 0.2rem;
  color: ${({ theme: { color } }) => color.white};
`;

const StyledSubtitle = styled.p`
  ${shared}
  font-size:1.3rem;
  color: ${({ theme: { color } }) => color.gray};
`;

CardFooter.defaultProps = {
  title: 'unknown',
  year: 'unknown',
};

CardFooter.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
};
