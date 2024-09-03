import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'

interface WeatherData {
    [key: string]: string;
  }


const weatherData = {
        London: "20°, Clear",
        Paris: "22°, Sunny",
        NewYork: "18°, Cloudy"
}
const WeatherApp = () => {

    const [city, setCity] = useState('')
    const [weather, setWeather] = useState('')

    const getWeather = () => {
        setWeather(weatherData[city] || "No data available");
      };
  return (
    <View style={styles.mainview}>
      <Text style={{fontWeight: 'bold'}}>Weather App</Text>

      <TextInput placeholder='Enter City' value={city} onChangeText={setCity}/>

      <Pressable onPress={getWeather} style={styles.btn}>
        <Text style={styles.btnText}>Get Weather</Text>
      </Pressable>

      {weather ? <Text>{weather}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
    mainview: {
        marginHorizontal: 110,
        marginVertical: 110,
    },
    inputField: {
        height: 30,
        width: 200,
    },
    outputData: {
        fontWeight: '300',
        fontSize: 30
    },
    btn: {
        backgroundColor: 'blue',
        width: 120,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: 'white'
    }

})

export default WeatherApp