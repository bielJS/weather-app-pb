import React from 'react';
import { View } from 'react-native';

import { Fontisto } from '@expo/vector-icons';

import { Container, TextTemp } from './styles';

const MainCard = ({ backgroundColor, title, temperature, icon }) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <TextTemp>{title}</TextTemp>
      <Fontisto style={{ margin: 15 }} name={icon} size={40} color="white" />
      <TextTemp>{temperature}</TextTemp>
    </Container>
  );
};

export default MainCard;
