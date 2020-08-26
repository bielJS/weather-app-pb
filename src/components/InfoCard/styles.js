import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  margin: 0 10px 10px 10px;
  min-width: 150px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.text};
  margin: 15px;
  font-size: 20px;
  font-weight: bold;
`;

export const TextValue = styled.Text`
  color: ${({ theme }) => theme.text};
  margin: 15px;
  font-size: 18px;
`;
