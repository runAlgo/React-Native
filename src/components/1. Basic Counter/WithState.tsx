import { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const WithState = () => {
    const [counter, setCounter] = useState(0)
  return (
    <View>
      <Text>Count: {counter}</Text>
      <Button  title='Increment' onPress={() => setCounter(counter + 1)}/>
      <Button color={('red')} title='Decrement' onPress={() => setCounter(counter - 1)}/>
    </View>
  )
}


export default WithState