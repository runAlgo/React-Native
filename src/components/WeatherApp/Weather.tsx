import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface WeatherInfo {
  city: string;
  temperature: string;
  weather: string;
}

const countryWeather: WeatherInfo[] = [
  {
    city: "Nepal",
    temperature: "20° Celsius",
    weather: "Rainy"
  },
  {
    city: "India",
    temperature: "25° Celsius",
    weather: "Clear"
  },
  {
    city: "Bhutan",
    temperature: "30° Celsius",
    weather: "Sunny"
  },
  {
    city: "America",
    temperature: "35° Celsius",
    weather: "Hot"
  }
];

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<WeatherInfo | string | null>(null);
  const [city, setCity] = useState<string>('');

  const getWeather = () => {
    const foundWeather = countryWeather.find(item => item.city.toLowerCase() === city.toLowerCase());
    setWeather(foundWeather || "No Country Available");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather</Text>
      <TextInput
        placeholder='Enter City'
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <Button title='Get Weather' onPress={getWeather} />
      {weather ? (
        typeof weather === 'string' ? (
          <Text style={styles.result}>{weather}</Text>
        ) : (
          <View style={styles.result}>
            <Text>City: {weather.city}</Text>
            <Text>Temperature: {weather.temperature}</Text>
            <Text>Weather: {weather.weather}</Text>
          </View>
        )
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize: 20,
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8
  },
  result: {
    marginTop: 20
  }
});

export default Weather;
