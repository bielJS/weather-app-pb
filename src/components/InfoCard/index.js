import React from 'react';
import { View } from 'react-native';

import { Container, Title, TextValue } from './styles';

const InfoCard = ({ titleCard, value }) => {
  return (
    <Container>
      <Title>{titleCard}</Title>
      <TextValue>{value}</TextValue>
    </Container>
  );
};

export default InfoCard;
