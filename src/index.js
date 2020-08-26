import React, { useState, useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import * as Location from 'expo-location';
import {
  Feather,
  EvilIcons,
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { ThemeProvider } from 'styled-components';

import MainCard from './components/MainCard';
import InfoCard from './components/InfoCard';

import getCurrentWeather from './services/api';

import {
  Container,
  Temperature,
  TemperatureText,
  TemperatureTextSmall,
  RefreshButton,
  TextLocation,
  ChangeThemeButton,
  CardsContainer,
  CardInfo,
  ButtonView,
  ButtonShowInfo,
  TextButton,
  ButtonViewCard,
  ButtonShowInfoCard,
} from './styles/styles';
import { lightTheme, darkTheme } from './styles/theme';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [showCardInfo, setShowCardInfo] = useState(false);

  const [currentTemperature, setCurrentTemperature] = useState('31');

  const [locationCoords, setLocationCoords] = useState(null);

  const [locationName, setLocationName] = useState('Brasil, Bahia');

  const [temperatureMin, setTemperatureMin] = useState('21');
  const [temperatureMax, setTemperatureMax] = useState('32');
  const [wind, setWind] = useState('7');
  const [humidity, setHumidity] = useState('68');

  async function getLocation() {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Tente novamente mais tarde!');
    } else {
      let location = await Location.getCurrentPositionAsync({});
      await setLocationCoords(location.coords);
    }
  }

  async function setCurrentWeather() {
    await getLocation();
    const data = await getCurrentWeather(locationCoords);

    setCurrentTemperature(convertKelvinToC(data[0]));
    setTemperatureMin(convertKelvinToC(data[1]));
    setTemperatureMax(convertKelvinToC(data[2]));
    setLocationName(data[3]);
    setWind(data[4]);
    setHumidity(data[5]);
  }

  function convertKelvinToC(kelvin) {
    return parseInt(kelvin - 273);
  }

  useEffect(() => {
    setCurrentWeather();
  }, []);

  function onChangeTheme() {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  function changeShowCardInfo() {
    setShowCardInfo((prevState) => !prevState);
  }
  console.disableYellowBox = true;

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <StatusBar
          barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
          backgroundColor={theme === 'light' ? lightTheme.body : darkTheme.body}
        />
        <Container>
          <RefreshButton onPress={() => setCurrentWeather()}>
            <EvilIcons
              name="refresh"
              size={30}
              color={theme === 'light' ? darkTheme.body : lightTheme.body}
            />
          </RefreshButton>

          <ChangeThemeButton onPress={onChangeTheme}>
            {theme === 'light' ? (
              <FontAwesome
                name="sun-o"
                size={24}
                color={theme === 'light' ? darkTheme.body : lightTheme.body}
              />
            ) : (
              <Entypo
                name="moon"
                size={24}
                color={theme === 'light' ? darkTheme.body : lightTheme.body}
              />
            )}
          </ChangeThemeButton>

          <Feather
            style={{ marginTop: 60 }}
            name="sun"
            size={40}
            color="orange"
          />

          <Temperature>
            <TemperatureText>{currentTemperature}</TemperatureText>
            <TemperatureTextSmall>°C</TemperatureTextSmall>
          </Temperature>

          <TextLocation>{locationName}</TextLocation>

          <CardsContainer>
            <MainCard
              title={'Manhã'}
              icon={'day-sunny'}
              temperature={'27°'}
              backgroundColor={
                theme === 'light' ? darkTheme.cardManha : lightTheme.cardManha
              }
            />
            <MainCard
              title={'Tarde'}
              icon={'day-haze'}
              temperature={'31°'}
              backgroundColor={
                theme === 'light' ? darkTheme.cardTarde : lightTheme.cardTarde
              }
            />
            <MainCard
              title={'Noite'}
              icon={'night-clear'}
              temperature={'21°'}
              backgroundColor={
                theme === 'light' ? darkTheme.cardNoite : lightTheme.cardNoite
              }
            />
          </CardsContainer>

          {showCardInfo ? (
            <CardInfo
              backgroundColor={
                theme === 'light' ? lightTheme.cardBody : darkTheme.cardBody
              }
            >
              <ButtonViewCard>
                <ButtonShowInfoCard onPress={changeShowCardInfo}>
                  <MaterialCommunityIcons
                    name="playlist-remove"
                    size={24}
                    color={theme === 'light' ? lightTheme.text : darkTheme.text}
                  />
                </ButtonShowInfoCard>
              </ButtonViewCard>

              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <InfoCard titleCard={'Vento'} value={`${wind} m/h`} />
                <InfoCard titleCard={'Umidade'} value={`${humidity} %`} />
                <InfoCard
                  titleCard={'Temp. Min.'}
                  value={`${temperatureMin} ºᶜ`}
                />
                <InfoCard
                  titleCard={'Temp. Max.'}
                  value={`${temperatureMax} ºᶜ`}
                />
              </View>
            </CardInfo>
          ) : (
            <ButtonView>
              <ButtonShowInfo onPress={changeShowCardInfo}>
                <TextButton>Exibir mais informações...</TextButton>
                <MaterialCommunityIcons
                  name="playlist-plus"
                  size={24}
                  color={theme === 'light' ? lightTheme.text : darkTheme.text}
                />
              </ButtonShowInfo>
            </ButtonView>
          )}
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
