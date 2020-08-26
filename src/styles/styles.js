import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${({ theme }) => theme.body};
`;

export const Temperature = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
`;

export const TemperatureText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 50px;
`;

export const TemperatureTextSmall = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
`;

export const RefreshButton = styled.TouchableOpacity`
  position: absolute;
  margin: 20px 30px;
  align-self: flex-start;
`;

export const ChangeThemeButton = styled.TouchableOpacity`
  position: absolute;
  padding: 20px 30px;
  align-self: flex-end;
`;

export const CardsContainer = styled.View`
  color: ${({ theme }) => theme.text};
  margin: 10px;
  flex-direction: row;
  align-items: center;
`;

export const TextLocation = styled.Text`

`;

export const CardInfo = styled.View`
  align-items: center;
  border-radius: 20px;
  width: 350px;
  height: 290px;
  margin-top: -228px;
`;

export const ButtonViewCard = styled.View`
  background: ${({ theme }) => theme.cardBody};
  margin-top: 5px;
`;

export const ButtonShowInfoCard = styled.TouchableOpacity`
  padding-left: 300px;
`;

export const ButtonView = styled.View`
  background: ${({ theme }) => theme.cardBody};
  margin-top: 50px;
  height: 40px;
  width: 250px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const ButtonShowInfo = styled.TouchableOpacity`
  flex-direction: row;
`;

export const TextButton = styled.Text`
  font-size: 17px;
  margin-right: 5px;
  color: ${({ theme }) => theme.text};
`;
