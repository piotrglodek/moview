import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      {children}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 3rem 0;
`;

const StyledSectionTitle = styled.p`
  margin: 2rem 0;
  color: ${({ theme: { color } }) => color.white};
  font-size: 1.6rem;
`;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
