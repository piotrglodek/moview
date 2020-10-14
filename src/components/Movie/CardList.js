import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Card } from '../';
import { withGap } from './withGap';

const CardItem = withGap(Card);

export const CardList = () => {
  return (
    <StyledWrapper>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.article`
  padding-bottom: 2rem;
  overflow-y: hidden;
  overflow-x: scroll;
  display: flex;
`;
